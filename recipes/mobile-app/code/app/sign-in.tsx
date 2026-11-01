import { useState } from "react";
import { ActivityIndicator, Platform, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { useRouter } from "expo-router";

import { ApiError, createSession } from "../src/api";
import { saveToken } from "../src/session";

// The sign-in screen: the same email address and password the person uses on
// the web. A right password gets a token from the API, which goes into the
// device's secure store, and the person goes to the home screen. A wrong one
// shows the API's own message and stores nothing.
export default function SignInScreen() {
  const router = useRouter();
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [problem, setProblem] = useState<string | null>(null);

  async function signIn() {
    if (busy) return;
    setBusy(true);
    setProblem(null);
    try {
      const { token } = await createSession(emailAddress.trim(), password, `${Platform.OS} phone`);
      await saveToken(token);
      router.replace("/");
    } catch (error: unknown) {
      setProblem(error instanceof ApiError || error instanceof Error ? error.message : "Something went wrong.");
      setBusy(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign in</Text>
      <TextInput
        style={styles.input}
        placeholder="Email address"
        autoCapitalize="none"
        autoComplete="email"
        autoCorrect={false}
        keyboardType="email-address"
        value={emailAddress}
        onChangeText={setEmailAddress}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        autoCapitalize="none"
        autoComplete="current-password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        onSubmitEditing={signIn}
      />
      {problem ? <Text style={styles.problem}>{problem}</Text> : null}
      <Pressable
        accessibilityRole="button"
        style={[styles.button, busy && styles.buttonBusy]}
        onPress={signIn}
        disabled={busy}
      >
        {busy ? <ActivityIndicator color="#ffffff" /> : <Text style={styles.buttonText}>Sign in</Text>}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, gap: 12, justifyContent: "center" },
  title: { fontSize: 28, fontWeight: "700", marginBottom: 8 },
  input: {
    borderWidth: 1,
    borderColor: "#c7c7cc",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
  },
  problem: { fontSize: 14, color: "#b00020" },
  button: {
    backgroundColor: "#0a60d8",
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
    marginTop: 4,
  },
  buttonBusy: { opacity: 0.7 },
  buttonText: { color: "#ffffff", fontSize: 16, fontWeight: "600" },
});
