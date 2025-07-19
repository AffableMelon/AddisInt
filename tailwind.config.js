/** @type {import('tailwindcss').Config} */
module.exports = {
  // Content scans the directories and finds files that match.
  // It then reads the files insdie and compiles the tailwind class names
  // to css classes.
  darkMode: "class",
  content: ["./*.html", "./src/**/*.{js,ts,jsx,tsx}", "./pages/**/*.html"],
  theme: {
    fontFamily: {
      display: ["Inter", "system-ui", "sans-serif"],
      body: ["Inter", "system-ui", "sans-serif"],
    },
    colors: {
      primary: {
        50: "#f8f8f8",
        100: "#efefef",
        200: "#e0e0e0",
        300: "#cccccc",
        400: "#a3a3a3",
        500: "#737373",
        600: "#525252",
        700: "#404040",
        800: "#262626",
        900: "#171717",
        950: "#0a0a0a",
      },
      secondary: {
        50: "#fafafa",
        100: "#f3f4f6",
        200: "#e5e7eb",
        300: "#d1d5db",
        400: "#9ca3af",
        500: "#6b7280",
        600: "#4b5563",
        700: "#374151",
        800: "#1f2937",
        900: "#111827",
      },
      tertiary: {
        50: "#ffffff",
        100: "#f9f9f9",
        200: "#f0f0f0",
        300: "#e5e5e5",
        400: "#d4d4d4",
        500: "#a3a3a3",
        600: "#8c8c8c",
        700: "#6b6b6b",
        800: "#4a4a4a",
        900: "#2e2e2e",
      },
      accent: {
        50: "#eef2ff",
        100: "#e0e7ff",
        200: "#c7d2fe",
        300: "#a5b4fc",
        400: "#818cf8",
        500: "#6366f1",
        600: "#4f46e5",
        700: "#4338ca",
        800: "#3730a3",
        900: "#312e81",
      },
      error: {
        100: "#fee2e2",
        400: "#f87171",
        500: "#ef4444",
        700: "#b91c1c",
      },
      success: {
        100: "#dcfce7",
        400: "#4ade80",
        500: "#22c55e",
        700: "#15803d",
      },

      warning: {
        100: "#fffbe5",
        200: "#fef3c7",
        400: "#fbbf24",
        500: "#f59e0b",
        700: "#b45309",
      },
    },
  },
  plugins: [],
};
