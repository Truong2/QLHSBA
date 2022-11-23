/** @type {import('tailwindcss').Config} */
/* eslint-disable import/no-extraneous-dependencies */
const lineClamp = require("@tailwindcss/line-clamp");
// const colors = require('tailwindcss/colors');

module.exports = {
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    options: {
      safelist: {
        standard: [/^col-/, /^grid-/],
      },
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    // textColor: { // move to colors
    // 	...colors,
    // 	'primary': '#2C3D94',
    // 	'default': '#333333',
    // 	'secondary': '#666666',
    // 	'danger': '#F77178',
    // 	'success': '#009551',
    // 	'white': '#ffffff'
    // },
    // scale: {
    // 	120: '1.2'
    // },
    fontSize: {
      tiny: ".625rem",
      xs: [
        "0.75rem",
        {
          lineHeight: "1rem",
        },
      ],
      sm: [
        "0.875rem",
        {
          lineHeight: "1.375rem",
        },
      ],
      base: [
        "1rem",
        {
          lineHeight: "1.5rem",
        },
      ],
      lg: [
        "1.125rem",
        {
          lineHeight: "1.75rem",
        },
      ],
      xl: [
        "1.25rem",
        {
          lineHeight: "1.75rem",
        },
      ],
      "2xl": [
        "1.5rem",
        {
          lineHeight: "2rem",
        },
      ],
      "3xl": [
        "1.875rem",
        {
          lineHeight: "2.25rem",
        },
      ],
      "4xl": [
        "2.25rem",
        {
          lineHeight: "2.5rem",
        },
      ],
      "5xl": [
        "3rem",
        {
          lineHeight: "1",
        },
      ],
      "6xl": [
        "4rem",
        {
          lineHeight: "1",
        },
      ],
      "7xl": [
        "4.5rem",
        {
          lineHeight: "1",
        },
      ],
      "8xl": [
        "6rem",
        {
          lineHeight: "1",
        },
      ],
      "9xl": [
        "8rem",
        {
          lineHeight: "1",
        },
      ],
    },
    extend: {
      gap: {
        4.5: "1.125rem",
        25: "6.75rem",
        7.5: "1.875rem",
      },
      screens: {
        // // "2xl": { max: "1535px" },
        // laptop: { max: "1279px" },
        // // xl: { max: "1279px" },
        // tablet: { max: "1024px" },
        // // lg: { max: "1023px" },
        // mobile: { max: "639px" },
        // md: { max: "767px" },
        // sm: { max: "639px" },
        // "2xl": { max: "1535px" },
        // laptop: { max: "1535px" },
        // xl: { max: "1279px" },
        tablet: { max: "1169px" },
        // lg: { max: "1023px" },
        mobile: { max: "767px" },
        // md: { max: "767px" },
        // sm: { max: "639px" },
      },
      fontFamily: {
        // sans: ["var(--font-family)", ...defaultTheme.fontFamily.sans],
        // "sans-serif": [
        // 	"var(--font-family)",
        // 	...defaultTheme.fontFamily.serif,
        // ],
        vl_kathya: ["vl_kathya"],
        MarckScript: ["Marck Script", "cursive"],
      },
      colors: {
        primary: "#2C3D94",
        default: "#333333",
        secondary: "#666666",
        extraSecondary: "#999999",
        danger: "#F77178",
        success: "#009551",
        mbprimary: "#2C3D94",
        grey: "#D5D6EA",

        blue: {
          60: "#EAECF4",
          250: "#E8F2FC",
        },
        gray: {
          40: "#999999",
          60: "#666666",
          80: "#333333",
          400: "#78909C",
          300: "#FAFAFA",
          100: "#CFD8DC",
          350: "#666666",
          200: "#F0F0F0",
          250: "#F8F8F8",
          50: "#F6EFEE",
          150: "#E5E5E5",
          800: "#37474F",
          700: "#2D3047",
          600: "#CCCCCC",
          850: "#263238",
          grayscale: "#F4F5FA",
          F9: "#F9F9F9",
          DEFAULT: "#F2F2F2",
        },
        main: "#fcfcfd",
        green: {
          400: "#22AAA1",
        },
        yellow: {
          300: "#FBEBB7",
          400: "#FFB300",
          450: "#F4BF1B",
        },
        black: {
          DEFAULT: "#333333",
        },
        primary2: "#667CF2",
      },
      inset: {
        "14-i": "3.5rem !important",
        "1/43": "43% !important",
      },
      margin: {
        "0-i": "0 !important",
        "2-i": "0.5rem !important",
        15: "3.75rem",
        22: "5.25rem",
        18: "4.5rem",
        5.5: "1.375rem",
        6.5: "1.625rem",
        7.5: "1.8rem",
        23: "5.5rem",
        27: "6.75rem",
        30: "7.5rem",
      },
      padding: {
        "0-i": "0 !important",
        "3-i": "0.75rem !important",
        full: "100%",
        "1/2": "50%",
        "17/10": "170%",
        15: "3.75rem",
        5.5: "1.375rem",
        7.5: "1.8rem",
        22: "5.25rem",
        27: "6.75rem",
        "84px": "5.25rem",
        "58px": "3.625rem",
        "9px": "0.563rem",
        "99px": "6.1875rem",
        "14px": "0.875rem",
        "10px": "0.625rem",
      },
      borderRadius: {
        "full-i": "9999px !important",
        "2lg": "0.625rem",
      },
      minWidth: {
        10: "10rem !important",
        12: "12rem !important",
        3: "3rem !important",
        2: "2rem !important",
        64: "16rem !important",
        81: "20.25rem !important",
      },
      width: {
        17: "4.5rem !important",
        68: "17rem !important",
        "3/4-i": "75% !important",
        98: "28rem !important",
        "1-3": "33.5%",
        30: "7.5rem",
        "674-px": "42.125rem",
        "770-px": "48.125rem",
        "340-px": "19rem",
        "234-px": "14.625rem",
        "351-px": "21.9375rem",
      },
      height: {
        100: "36rem !important",
        "banner-sm": "512px",
        banner: "665px",
        94: "23rem",
        30: "7.5rem",
        "380-px": "23.75rem",
        34: "8.25rem",
        23: "5.875rem",
        "432-px": "27rem",
        "108px": "6.75rem",
        "234-px": "14.625rem",
        "198-px": "12.375rem",
        "405px": "25.313rem",
      },
      lineHeight: {
        0: "0",
      },
      minHeight: {
        24: "6rem",
        94: "23rem",
        12: "3rem",
      },
      maxHeight: {
        100: "256rem",
      },
      zIndex: {
        max: 999,
        "2max": 10000,
      },
      cursor: {
        allScroll: "all-scroll",
      },
      boxShadow: {
        card: "0 4px 24px 0 rgb(34 41 47 / 10%)",
        "card-sm": "0px 0px 20px rgba(0, 0, 0, 0.1)",
        header: "0px 0px 10px rgba(0, 0, 0, 0.2)",
      },
      animation: {
        flower: "flower 0.3s ease-in",
        zoomOut: "zoomOut 0.3s ease-in-out",
        run: "run 0.2s ease-in",
        zoomIn: "zoomIn 0.4s ease-in",
        card: "card 0.4s ease-in",
        fadeIn: "fadeIn 0.3s ease",
        gradient: "gradient 5s ease-in-out ",
      },
      keyframes: {
        flower: {
          "0%": { transform: "scaleY(0.8)", opacity: 0.6 },
          "100%": { transform: "scaleY(1)", opacity: 1 },
        },
        zoomOut: {
          "0%": { transform: "scale(0.95)", opacity: 0 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
        run: {
          "0%": { transform: "translateY(-20px)" },
          "100%": { transform: "translateY(0px)" },
        },
        zoomIn: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.2)" },
        },
        card: {
          "0%": { opacity: 0, transform: "translateX(300px)" },
          "100%": { opacity: 1, transform: "translateX(0px)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        gradient: {
          "0%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
          "100%": {
            backgroundPosition: "0% 50%",
          },
        },
      },
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
      transform: ["hover", "focus"],
      cursor: ["hover"],
      display: ["hover", "focus", "group-hover", "group-focus"],
      animation: ["hover"],
      scale: ["hover"],
      padding: ["hover"],
      resize: ["hover", "focus"],
    },
  },
  plugins: [lineClamp],
};
