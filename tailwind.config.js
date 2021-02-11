const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      sans: ["lato"],
      body: ["Noto Sans"],
    },
    /* ["fontSize", "lineHeight"]
       These typography rules have been pulled from the design system
    */
    fontSize: {
      sm: ["16px", "22px"],
      base: ["20px", "26px"],
      p: ["20px", "28px"],
      h3: ["24px", "26px"],
      h2: ["30px", "38px"],
      h1: ["34px", "44px"],
    },
    maxWidth: {
    prose: "75ch",
    },
    screens: {
      xxs: "280px",
      xs: "325px",
      sm: "450px",
      md: "550px",
      lg: "768px",
      xl: "1024px",
    },
    colors: {
      red: {
        ...colors.red,
        100: "#f3e9e8",
        default: "#b10e1e",
      },
      purple: {
        ...colors.purple,
        default: "#7834bc",
      },
      white: {
        ...colors.white,
        default: "#FFF",
      },
      blue: {
        ...colors.blue,
        dark: "#284162",
        light: "#335075",
        default: "#26374A",
        100: "#B2E3FF",
        200: "#DFF8FD",
        300: "#4B98B2",
        400: "#335075",
        500: "#75b9e0",
        600: "#007cba",
        700: "#335075",
        800: "#26374a",
      },
      gray: {
        ...colors.gray,
        default: "#EEE",
        selected: "#e1e4e7",
        text: "#585858",
        background: "#f4f4f4",
        500: "#a0aec0",
        600: "#718096",
        700: "#4a5568",
        800: "#2d3748",
      },
      yellow: {
        ...colors.yellow,
        default: "#ffbf47",
      },
      green: {
        ...colors.green,
        default: "#00703C",
        darker: "#005930",
      },
      black: {
        ...colors.black,
        default: "#000",
        form: "#0b0c0c",
      },
    },
    boxShadow: {
      default: "0 1px 3px rgba(0, 0, 0, 0.05);",
      result: "0px 0px 12px -2px rgba(0,0,0,0.4)",
      none:
        "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
    },
    borderWidth: {
      default: "1px",
      0: "0",
      1: "1px",
      1.5: "1.5px",
      2: "2px",
      2.5: "2.5px",
      3: "3px",
      4: "4px",
      8: "8px",
    },
    zIndex: {
      "-1": "-1,",
      100: "100,",
    },
  },
  variants: {
    extend: {},
  },
  purge: ["./components/**/*.tsx", "./pages/**/*.js"],
  plugins: [require("tailwindcss"), require("precss"), require("autoprefixer")],
};
