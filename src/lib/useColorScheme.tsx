import { useColorScheme as useNativeWindColorScheme } from "nativewind";
import * as React from "react";
import { Platform, useColorScheme as useRNColorScheme } from "react-native";

// On web, immediately add 'dark' class if the system prefers dark mode
// to avoid any flash of light mode and ensure NativeWind initializes properly.
if (Platform.OS === "web" && typeof window !== "undefined" && typeof document !== "undefined") {
  const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (isDark && !document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.add("dark");
  }
}

export function useColorScheme() {
  const { colorScheme: nwColorScheme, setColorScheme: setNWColorScheme } =
    useNativeWindColorScheme();
  const rnColorScheme = useRNColorScheme();
  const systemColorScheme: "light" | "dark" =
    rnColorScheme === "dark" ? "dark" : "light";
  const [userPreference, setUserPreference] = React.useState<
    "light" | "dark" | "system"
  >("system");

  const effectiveColorScheme: "light" | "dark" =
    userPreference === "system" ? systemColorScheme : userPreference;
  const isDarkColorScheme = effectiveColorScheme === "dark";

  // Keep NativeWind and Web DOM in sync with the effective color scheme
  React.useEffect(() => {
    setNWColorScheme(effectiveColorScheme);

    if (Platform.OS === "web" && typeof document !== "undefined") {
      document.documentElement.classList.toggle("dark", isDarkColorScheme);
      document.documentElement.classList.add("bg-background");
    }
  }, [effectiveColorScheme, isDarkColorScheme, setNWColorScheme]);

  const setColorScheme = React.useCallback(
    (theme: "light" | "dark" | "system") => {
      setUserPreference(theme);
      const nextScheme = theme === "system" ? systemColorScheme : theme;
      setNWColorScheme(nextScheme);

      if (Platform.OS === "web" && typeof document !== "undefined") {
        document.documentElement.classList.toggle("dark", nextScheme === "dark");
      }
    },
    [systemColorScheme, setNWColorScheme]
  );

  const toggleColorScheme = React.useCallback(() => {
    setColorScheme(isDarkColorScheme ? "light" : "dark");
  }, [isDarkColorScheme, setColorScheme]);

  return {
    colorScheme: effectiveColorScheme,
    isDarkColorScheme,
    setColorScheme,
    toggleColorScheme,
  };
}
