import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Fond & surfaces — carte d'invitation chaleureuse, pas de "dashboard" sombre
        cream: {
          50: "#FFFDF8",
          100: "#FDF6E8",
          200: "#F7EAD0",
          300: "#EFDCB4",
        },
        ink: {
          DEFAULT: "#241F1A", // texte principal, quasi-noir chaud
          muted: "#7A6F63", // texte secondaire
        },
        // Accents — trio chaud et joyeux, inspiré d'un faire-part, pas d'un produit tech
        coral: {
          400: "#F2896D",
          500: "#EA5B3C",
          600: "#D24726",
        },
        gold: {
          300: "#F3D48B",
          400: "#EBBB4E",
          500: "#DDA51F",
        },
        sage: {
          400: "#8FAE93",
          500: "#6D9373",
        },
      },
      fontFamily: {
        display: [
          '"Manrope"',
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
        body: [
          '"Inter"',
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
        hand: ['"Caveat"', "cursive"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-14px) rotate(1deg)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-2deg)" },
          "50%": { transform: "rotate(2deg)" },
        },
        blob: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(20px, -30px) scale(1.08)" },
          "66%": { transform: "translate(-15px, 15px) scale(0.95)" },
        },
        "pop-in": {
          "0%": { opacity: "0", transform: "scale(0.8) rotate(-4deg)" },
          "100%": { opacity: "1", transform: "scale(1) rotate(-2deg)" },
        },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        wiggle: "wiggle 3.5s ease-in-out infinite",
        blob: "blob 14s ease-in-out infinite",
        "pop-in": "pop-in 0.6s cubic-bezier(0.16,1,0.3,1) both",
      },
      boxShadow: {
        soft: "0 20px 50px -22px rgba(36, 31, 26, 0.25)",
        pop: "3px 3px 0 rgba(36, 31, 26, 0.9)",
        "pop-sm": "2px 2px 0 rgba(36, 31, 26, 0.9)",
      },
    },
  },
  plugins: [],
};
export default config;
