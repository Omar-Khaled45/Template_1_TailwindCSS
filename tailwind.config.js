/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}", "./index.html"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        body: ["Work Sans"],
      },
      colors: {
        primary: "var(--color-primary)",
        secBackground: "var(--color-secBackground)",
        bodyText: "var(--color-bodyText)",
        titleHeader: "var(--color-titleHeader)",
        titleSpan: "var(--color-titleSpan)",
        overlay: "var(--color-overlay)",
      },
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "750px",
          margin: "0 auto",
          padding: "0 15px",
          "@screen md": {
            maxWidth: "750px",
          },
          "@screen lg": {
            maxWidth: "970px",
          },
          "@screen xl": {
            maxWidth: "1170px",
          },
        },
      });
    },
  ],
};
