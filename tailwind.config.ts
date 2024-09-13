// import type { Config } from "tailwindcss";
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/rizzui/dist/*.{js,ts,jsx,tsx}",

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
        },
        blinker: {
          "from": { opacity: "1" },
          "50%": { opacity: ".2" },
          "top": { opacity: "1" },
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
       
        cyan: {
          500: "#900254"
        },


        /*
        * body, modal, drawer background & ring-offset-color
        */
        background: 'rgb(var(--background) / <alpha-value>)',

        /*
        * body text color
        */
        foreground: 'rgb(var(--foreground) / <alpha-value>)',

        /*
        * border, default flat bg color for input components, tab & dropdown hover color
        */
        muted: 'rgb(var(--muted) / <alpha-value>)',

        /*
        * disable foreground color
        */
        'muted-foreground': 'rgb(var(--muted-foreground) / <alpha-value>)',

        /*
        * primary colors
        */
        primary: {
          lighter: "rgb(var(--primary-lighter) / <alpha-value>)",
          DEFAULT: "rgb(var(--primary-default) / <alpha-value>)",
          dark: "rgb(var(--primary-dark) / <alpha-value>)",
          foreground: "rgb(var(--primary-foreground) / <alpha-value>)",
        },

        /*
        * secondary colors
        */
        secondary: {
          lighter: "rgb(var(--secondary-lighter) / <alpha-value>)",
          DEFAULT: "rgb(var(--secondary-default) / <alpha-value>)",
          dark: "rgb(var(--secondary-dark) / <alpha-value>)",
          foreground: "rgb(var(--secondary-foreground) / <alpha-value>)",
        },

        /*
        * danger colors
        */
        red: {
          lighter: "rgb(var(--red-lighter) / <alpha-value>)",
          DEFAULT: "rgb(var(--red-default) / <alpha-value>)",
          dark: "rgb(var(--red-dark) / <alpha-value>)",
        },

        /*
        * warning colors
        */
        orange: {
          lighter: "rgb(var(--orange-lighter) / <alpha-value>)",
          DEFAULT: "rgb(var(--orange-default) / <alpha-value>)",
          dark: "rgb(var(--orange-dark) / <alpha-value>)",
        },

        /*
        * info colors
        */
        blue: {
          lighter: "rgb(var(--blue-lighter) / <alpha-value>)",
          DEFAULT: "rgb(var(--blue-default) / <alpha-value>)",
          dark: "rgb(var(--blue-dark) / <alpha-value>)",
        },

        /*
        * success colors
        */
        green: {
          lighter: "rgb(var(--green-lighter) / <alpha-value>)",
          DEFAULT: "rgb(var(--green-default) / <alpha-value>)",
          dark: "rgb(var(--green-dark) / <alpha-value>)",
        },


      },
      animation: {
        fadeIn: 'fadeIn .5s',
        fadeOut: "fadeOut .5s",
        blinker: "1s ease 0s infinite normal none running blinker"
      }

    },
    plugins: [require("@tailwindcss/forms")],
  },
  
};
export default config;
