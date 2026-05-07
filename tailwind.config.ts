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
        pearl: "#F7F4EE",
        rosegold: "#B67B5F",
        deepcharcoal: "#1C1A1A",
        champagne: "#E8D8BA",
      },
      boxShadow: {
        halo: "0 20px 60px -30px rgba(182, 123, 95, 0.6)",
      },
    },
  },
  plugins: [],
};

export default config;
