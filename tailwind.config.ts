import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "var(--ink)",
        paper: "var(--bg)",
        surface: "var(--surface)",
        brand: "#EC3148",
        gray: {
          DEFAULT: "#A9ABAE",
          light: "var(--hairline)",
          dark: "#6B6D70",
        },
        slate: "var(--slate)",
        ledger: "#2F9E63",
        hairline: "var(--hairline)",
        rust: "#EC3148",
      },
      fontFamily: {
        display: ["Plus Jakarta Sans", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["IBM Plex Mono", "ui-monospace", "monospace"],
      },
      borderRadius: {
        none: "0px",
        tab: "10px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(20,20,23,0.04), 0 8px 24px -8px rgba(20,20,23,0.08)",
        cardHover: "0 4px 10px rgba(20,20,23,0.06), 0 16px 32px -12px rgba(20,20,23,0.14)",
      },
    },
  },
  plugins: [],
};

export default config;
