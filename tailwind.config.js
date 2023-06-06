/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgba(var(--primary), <alpha-value>)",
        secondary: "rgba(var(--secondary), <alpha-value>)",
        tertiary: "rgba(var(--tertiary), <alpha-value>)",
      },
      backgroundColor: {
        dark: "rgba(var(--background), <alpha-value>)",
        // light: "rgba(var(--tertiary), <alpha-value>)",
      },
      textColor: {
        primary: "rgba(var(--text-color-heading), <alpha-value>)",
        secondary: "rgba(var(--text-color-body), <alpha-value>)",
        hover: "rgba(var(--secondary), <alpha-value>)",
      },
      fontFamily: {
        poppins: "Poppins, sans-serif",
        firaCode: "Fira Code, monospace",
      },
      borderColor: {
        primary: "rgba(var(--text-color-body), <alpha-value>)",
      },
    },
  },
  plugins: [],
};
