import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#101010",
        ink2: "#171717",
        paper: "#f0eee9",
        paper2: "#e6e2db",
        casaRed: "#ef171c",
        casaRedDark: "#c60f14",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "var(--font-dm-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(.2,.7,.2,1)",
      },
    },
  },
  plugins: [],
};
export default config;
