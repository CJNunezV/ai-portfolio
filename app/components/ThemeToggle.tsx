"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  // Both icons are rendered; CSS shows the right one based on [data-theme],
  // so server and client markup match and nothing flickers.
  return (
    <button
      type="button"
      className="iconBtn"
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      <Moon size={18} className="themeIconMoon" />
      <Sun size={18} className="themeIconSun" />
    </button>
  );
}
