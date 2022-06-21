/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "var(--color-primary-orange)",
        paleOrange: "var(--color-pale-orange)",
        grayishLightBlue: "var(--color-grayish-light-blue)",
        grayishBlue: "var( --color-grayish-blue)",
        grayishDarkBlue: "var(--color-grayish-dark-blue)",
        veryDarkBlue: "var(--color-very-dark-blue)",
      },
      textColor: {
        primary: "var(--color-primary-orange)",
        paleOrange: "var(--color-pale-orange)",
        grayishLightBlue: "var(--color-grayish-light-blue)",
        grayishBlue: "var( --color-grayish-blue)",
        grayishDarkBlue: "var(--color-grayish-dark-blue)",
        veryDarkBlue: "var(--color-very-dark-blue)",
      },
      borderColor: {
        primary: "var(--color-primary-orange)",
        paleOrange: "var(--color-pale-orange)",
        grayishLightBlue: "var(--color-grayish-light-blue)",
        grayishBlue: "var( --color-grayish-blue)",
        grayishDarkBlue: "var(--color-grayish-dark-blue)",
        veryDarkBlue: "var(--color-very-dark-blue)",
      },
    },
  },
  plugins: [],
};
