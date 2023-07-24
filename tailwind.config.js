/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "latin"]
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      },

      boxShadow: {
        custom: "0px 4px 4px rgba(0,0,0,0.25)"
      },

      borderRadius: {
        "custom-50": "13px",
        "custom-100": "18px"
      },

      colors: {
        primary: "#FFBCCC",
        secondary: "#01A7A3",
        tertiary: "#E6007E",
        cgray: {
          100: "#D9D9D9",
          200: "#B3B3B3",
          300: "#243232"
        },

        cpink: {
          50: "#FFDDE2",
          100: "#FFBCCC",
          200: "#ED9CA7",
          300: "#ED8097"
        }
      }
    },

    container: {
      center: true,

      screens: {
        sm: "100%",
        md: "100%",
        lg: "1024px",
        xl: "1280px"
      }
    }
  },

  plugins: [require("daisyui")]
};
