import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        text: "#eceff4",
        background: "#3B4252",
        primary: "#ECEFF4",
        secondary: "#D8DEE9",
        accent: "#81A1C1",
      },
    },
    fontSize: {
      sm: "0.750rem",
      base: "1rem",
      xl: "1.333rem",
      "2xl": "1.777rem",
      "3xl": "2.369rem",
      "4xl": "3.158rem",
      "5xl": "4.210rem",
    },
    fontFamily: {
      heading: "Palanquin",
      body: "Palanquin",
    },
    fontWeight: {
      normal: "400",
      bold: "700",
    },
  },
  plugins: [],
};
export default config;
