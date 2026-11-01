import Constants from "expo-constants";

// The small client for the API the phone app signs in against: the api-service
// base with api-sign-in laid on it. One function for each call the app makes.
// Every function takes the token it needs as an argument, so this file keeps
// no state; src/session.ts keeps the token.

export type User = { id: number; email_address: string };
export type Item = { id: number; name: string };
export type Page<T> = { items: T[]; page: number; size: number; total: number; pages: number };

type ErrorBody = { error?: { code?: string; message?: string } };

// Every error the API answers has one shape, { error: { code, message } }. A
// call that fails throws this, with the HTTP status. A status of 0 means the
// API could not be reached at all.
export class ApiError extends Error {
  status: number;
  code: string;

  constructor(status: number, code: string, message: string) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.code = code;
  }
}

// Where the API is. EXPO_PUBLIC_API_URL, when it is set, names it whole. When
// it is not, the API is taken to run on the computer that serves the app to
// the phone, on port 3000, which is where `bin/dev` of api-service starts it.
export function apiBaseUrl(): string {
  const named = process.env.EXPO_PUBLIC_API_URL;
  if (named) return named.replace(/\/+$/, "");

  const host = Constants.expoConfig?.hostUri?.split(":")[0];
  return `http://${host || "localhost"}:3000`;
}

function parse(text: string): unknown {
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}

async function request(
  method: string,
  path: string,
  options: { token?: string; body?: unknown } = {}
): Promise<unknown> {
  const headers: Record<string, string> = { Accept: "application/json" };
  if (options.body !== undefined) headers["Content-Type"] = "application/json";
  if (options.token) headers.Authorization = `Bearer ${options.token}`;

  let response: Response;
  try {
    response = await fetch(`${apiBaseUrl()}/api/v1${path}`, {
      method,
      headers,
      body: options.body === undefined ? undefined : JSON.stringify(options.body),
    });
  } catch {
    throw new ApiError(0, "network", "Could not reach the server. Check its address and that the API is running.");
  }

  const text = await response.text();
  const data = text ? parse(text) : null;

  if (!response.ok) {
    const error = (data as ErrorBody | null)?.error;
    throw new ApiError(
      response.status,
      error?.code ?? "error",
      error?.message ?? `The request failed (${response.status})`
    );
  }
  return data;
}

// GET /api/v1/status: whether the API is up. Needs no token.
export async function fetchStatus(): Promise<{ status: string; version: string }> {
  return (await request("GET", "/status")) as { status: string; version: string };
}

// POST /api/v1/sessions: sign in. Answers the token and the person. A wrong
// email address or password throws an ApiError with status 401.
export async function createSession(
  emailAddress: string,
  password: string,
  deviceName: string
): Promise<{ token: string; user: User }> {
  const body = { email_address: emailAddress, password, device_name: deviceName };
  return (await request("POST", "/sessions", { body })) as { token: string; user: User };
}

// DELETE /api/v1/sessions: sign out. The server revokes the token.
export async function destroySession(token: string): Promise<void> {
  await request("DELETE", "/sessions", { token });
}

// GET /api/v1/me: the person the token belongs to. A revoked or unknown token
// throws an ApiError with status 401.
export async function fetchMe(token: string): Promise<User> {
  const data = (await request("GET", "/me", { token })) as { user: User };
  return data.user;
}

// GET /api/v1/items?page=&size=: one page of the list, and how many pages
// there are. The API holds a size above its ceiling to the ceiling.
export async function fetchItems(token: string, page = 1, size = 25): Promise<Page<Item>> {
  return (await request("GET", `/items?page=${page}&size=${size}`, { token })) as Page<Item>;
}
