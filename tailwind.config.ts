import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"


  ],
  theme: {
    extend: {
      transitionProperty: {
        'padding': 'padding',
      },
      keyframes: {
        fadeIn: {
          "from": { maxHeight: "0" },
          "to": { maxHeight: "500px" }
        },
        fadeOut: {
          "from": { maxHeight: "500px" },
          "to": { maxHeight: "0" }
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        cyan: {
          500: "#000"
        }
      },
      animation: {
        fadeIn: 'fadeIn .5s',
        fadeOut: "fadeOut .5s",
      }

    },
  },
  darkMode: "class",
  plugins: [
    require('flowbite/plugin'),
    nextui()
  ],
};
export default config;
