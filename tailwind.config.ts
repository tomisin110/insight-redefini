import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1F2023",
        paper: "#FFFFFF",
        brand: "#EC3148",
        gray: {
          DEFAULT: "#A9ABAE",
          light: "#E5E5E6",
          dark: "#6B6D70",
        },
        slate: "#6B6D70",
        ledger: "#2F9E63",
        hairline: "#E5E5E6",
        rust: "#EC3148",
      },
      fontFamily: {
        display: ["Fraunces", "ui-serif", "Georgia", "serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["IBM Plex Mono", "ui-monospace", "monospace"],
      },
      borderRadius: {
        none: "0px",
        tab: "2px 14px 2px 2px",
      },
    },
  },
  plugins: [],
};

export default config;
