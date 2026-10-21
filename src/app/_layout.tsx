import "../../global.css";
import * as React from "react";
import { Stack, ThemeProvider } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { PortalHost } from "@rn-primitives/portal";
import { NAV_THEME } from "@/lib/theme";
import { useColorScheme } from "@/lib/useColorScheme";

export default function RootLayout() {
  const { colorScheme, isDarkColorScheme } = useColorScheme();

  return (
    <ThemeProvider value={NAV_THEME[colorScheme]}>
      <StatusBar style={isDarkColorScheme ? "light" : "dark"} />
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: NAV_THEME[colorScheme].colors.card,
          },
          headerTintColor: NAV_THEME[colorScheme].colors.text,
          contentStyle: {
            backgroundColor: NAV_THEME[colorScheme].colors.background,
          },
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            title: "Al-Ta'aruf | Begin with intention",
          }}
        />
      </Stack>
      <PortalHost />
    </ThemeProvider>
  );
}

