import { useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";

// The phone keeps one thing about the person: the API token, in the device's
// secure store (the Keychain on iOS, the Keystore on Android). Not the
// password, not the person's details. Every function here is the whole of how
// the app reads, keeps or forgets it.

const TOKEN_KEY = "api-token";

// The stored token, or null when the person has not signed in on this phone.
export async function getToken(): Promise<string | null> {
  return SecureStore.getItemAsync(TOKEN_KEY);
}

export async function saveToken(token: string): Promise<void> {
  await SecureStore.setItemAsync(TOKEN_KEY, token);
}

export async function clearToken(): Promise<void> {
  await SecureStore.deleteItemAsync(TOKEN_KEY);
}

export type Session = { loading: boolean; token: string | null };

// What a screen asks when it opens: is a token stored? `loading` is true until
// the secure store has answered. A screen reads it again each time it opens,
// so signing in and signing out need no shared state: they save or clear the
// token and navigate, and the next screen reads what is there.
export function useSession(): Session {
  const [session, setSession] = useState<Session>({ loading: true, token: null });

  useEffect(() => {
    let active = true;
    getToken()
      .catch(() => null)
      .then((token) => {
        if (active) setSession({ loading: false, token });
      });
    return () => {
      active = false;
    };
  }, []);

  return session;
}
