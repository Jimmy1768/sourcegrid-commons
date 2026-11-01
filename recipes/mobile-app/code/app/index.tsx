import { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { Link, Redirect } from "expo-router";

import { ApiError, fetchMe, type User } from "../src/api";
import { clearToken, useSession } from "../src/session";

// The home screen, and the app's first screen. With no token stored on this
// phone it sends the person to the sign-in screen. With one, it shows who is
// signed in, asking the API with the token, and a link to the settings screen.
// A token the API no longer accepts, revoked on another device or by signing
// out, is forgotten and the person is sent to sign in again.
export default function HomeScreen() {
  const { loading, token } = useSession();
  const [user, setUser] = useState<User | null>(null);
  const [expired, setExpired] = useState(false);
  const [problem, setProblem] = useState<string | null>(null);

  useEffect(() => {
    if (!token) return;
    let active = true;

    fetchMe(token)
      .then((person) => {
        if (active) setUser(person);
      })
      .catch(async (error: unknown) => {
        if (error instanceof ApiError && error.status === 401) {
          await clearToken();
          if (active) setExpired(true);
        } else if (active) {
          setProblem(error instanceof Error ? error.message : "Something went wrong.");
        }
      });

    return () => {
      active = false;
    };
  }, [token]);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator />
      </View>
    );
  }

  if (!token || expired) {
    return <Redirect href="/sign-in" />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Text style={styles.text}>
        {user ? `Signed in as ${user.email_address}` : "Signed in"}
      </Text>
      {problem ? <Text style={styles.problem}>{problem}</Text> : null}
      <Link href="/settings" style={styles.link}>
        Settings
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, alignItems: "center", justifyContent: "center" },
  container: { flex: 1, padding: 24, gap: 12 },
  title: { fontSize: 28, fontWeight: "700" },
  text: { fontSize: 16 },
  problem: { fontSize: 14, color: "#b00020" },
  link: { fontSize: 18, color: "#0a60d8", marginTop: 12 },
});
