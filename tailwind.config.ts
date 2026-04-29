import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        "background-alt": "var(--background-alt)",
        text: "var(--text)",
        "text-body": "var(--text-body)",
        "text-secondary": "var(--text-secondary)",
        "text-muted": "var(--text-muted)",
        border: "var(--border)",
        light: "var(--light)"
      },
      fontFamily: {
        display: ["var(--font-instrument-serif)", "ui-serif", "Georgia", "serif"],
        mono: ["var(--font-plex-mono)", "ui-monospace", "SFMono-Regular", "monospace"]
      },
      letterSpacing: {
        meta: "0.08em",
        micro: "0.12em",
        tight2: "-0.02em",
        tight3: "-0.03em"
      },
      maxWidth: {
        content: "1280px"
      },
      fontSize: {
        hero: ["clamp(3rem, 8vw, 6rem)", { lineHeight: "0.95" }],
        title: ["48px", { lineHeight: "1.05" }],
        h2: ["28px", { lineHeight: "1.2" }],
        body: ["18px", { lineHeight: "1.7" }],
        meta: ["13px", { lineHeight: "1.4" }],
        micro: ["10px", { lineHeight: "1.4" }]
      }
    }
  },
  plugins: []
};

export default config;
