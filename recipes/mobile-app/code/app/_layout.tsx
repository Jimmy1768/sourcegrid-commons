import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

// The root layout: one stack of three screens. Which screen opens first is
// decided by app/index.tsx, which sends a person with no stored token to the
// sign-in screen.
export default function RootLayout() {
  return (
    <>
      <StatusBar style="auto" />
      <Stack>
        <Stack.Screen name="index" options={{ title: "Home" }} />
        <Stack.Screen name="sign-in" options={{ title: "Sign in", headerBackVisible: false }} />
        <Stack.Screen name="settings" options={{ title: "Settings" }} />
      </Stack>
    </>
  );
}
