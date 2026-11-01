import { useEffect, useState } from "react";
import { ActivityIndicator, Pressable, StyleSheet, Text, View } from "react-native";
import { Redirect, useRouter } from "expo-router";

import { apiBaseUrl, destroySession, fetchMe, type User } from "../src/api";
import { clearToken, useSession } from "../src/session";

// The settings screen: who is signed in, which server the app talks to, and
// the Sign out button. Signing out asks the API to revoke the token, then
// forgets it on this phone. The token is forgotten even when the API cannot be
// reached, so the person is never stuck signed in; a token left unrevoked is
// the cost, and the API's own sign-out is the only way to revoke it.
export default function SettingsScreen() {
  const router = useRouter();
  const { loading, token } = useSession();
  const [user, setUser] = useState<User | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (!token) return;
    let active = true;

    fetchMe(token)
      .then((person) => {
        if (active) setUser(person);
      })
      .catch(() => {
        // The home screen is where a refused token is handled; this screen
        // simply shows no email address.
      });

    return () => {
      active = false;
    };
  }, [token]);

  async function signOut() {
    if (busy || !token) return;
    setBusy(true);
    try {
      await destroySession(token);
    } catch {
      // A 401 means the token was already revoked; any other failure still
      // signs the person out of this phone.
    }
    await clearToken();
    router.replace("/sign-in");
  }

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator />
      </View>
    );
  }

  if (!token) {
    return <Redirect href="/sign-in" />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>

      <View style={styles.row}>
        <Text style={styles.label}>Signed in as</Text>
        <Text style={styles.value}>{user ? user.email_address : "..."}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Server</Text>
        <Text style={styles.value}>{apiBaseUrl()}</Text>
      </View>

      <Pressable
        accessibilityRole="button"
        style={[styles.button, busy && styles.buttonBusy]}
        onPress={signOut}
        disabled={busy}
      >
        {busy ? <ActivityIndicator color="#ffffff" /> : <Text style={styles.buttonText}>Sign out</Text>}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, alignItems: "center", justifyContent: "center" },
  container: { flex: 1, padding: 24, gap: 16 },
  title: { fontSize: 28, fontWeight: "700" },
  row: { gap: 2 },
  label: { fontSize: 13, color: "#6b6b70" },
  value: { fontSize: 16 },
  button: {
    backgroundColor: "#b00020",
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
    marginTop: 12,
  },
  buttonBusy: { opacity: 0.7 },
  buttonText: { color: "#ffffff", fontSize: 16, fontWeight: "600" },
});
