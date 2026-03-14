import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-dm-sans)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
      },
      colors: {
        navy: {
          DEFAULT: "#0d2535",
          dark: "#091a27",
          light: "#1a4060",
        },
      },
    },
  },
  plugins: [],
};

export default config;