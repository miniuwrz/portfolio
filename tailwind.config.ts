import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        borderclr: "#3C3C3B",
      },
      screens: {
        "max-608": { max: "608px" },
      },
    },
  },
  plugins: [
    function ({
      addComponents,
    }: {
      addComponents: (components: Record<string, any>) => void;
    }) {
      addComponents({
        ".hovertrans": {
          transitionProperty: "all", // Wszystkie właściwości
          transitionDuration: "100ms", // Czas trwania
          transitionTimingFunction: "ease-in-out", // Funkcja czasowa
          transform: "none", // Domyślnie bez transformacji
        },
        ".hovertrans:hover": {
          transform: "scale(1.1)", // Zmiana transformacji na hover (np. powiększenie)
        },
      });
    },
  ],
} satisfies Config;
