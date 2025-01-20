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
      scale: {},
    },
  },
  plugins: [
    function (context: {
      addComponents: (components: Record<string, any>) => void;
      addUtilities: (
        utilities: Record<string, any>,
        options?: Record<string, any>
      ) => void;
    }) {
      const { addComponents, addUtilities } = context;

      // Dodanie niestandardowych klas komponentów
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

      // Dodanie klasy `zoom-110` dla właściwości zoom
      addUtilities(
        {
          ".zoom-110": {
            zoom: "1.1", // Skalowanie o 10% w przeglądarkach obsługujących zoom
          },
        },
        { variants: ["responsive"] } // Obsługa wariantów responsywnych
      );
    },
  ],
} satisfies Config;
