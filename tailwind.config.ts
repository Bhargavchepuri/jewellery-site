import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#FBF8F1",
        pearl: "#F4EEE3",
        gold: "#B88A4A",
        rose: "#B86F63",
        bronze: "#8F6653",
        ink: "#1B1715",
        champagne: "#E8D8BA",
      },
      boxShadow: {
        halo: "0 20px 60px -30px rgba(184, 138, 74, 0.55)",
        soft: "0 18px 40px -24px rgba(27, 23, 21, 0.28)",
      },
    },
  },
  plugins: [],
};

export default config;
