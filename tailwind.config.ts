import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

// Remove deprecated colors to avoid warnings
delete colors["lightBlue"];
delete colors["warmGray"];
delete colors["trueGray"];
delete colors["coolGray"];
delete colors["blueGray"];

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.2s ease-out",
      },
      colors: {
        ...colors,
        // primary: "#1A202C",
      },
    },
  },
  plugins: [require("tailgrids/plugin")],
};
export default config;
