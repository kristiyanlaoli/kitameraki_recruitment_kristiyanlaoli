/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {},
    colors: {
      color: {
        primary: "#9755f5",
        secondary: "#c9aaff",
      },
    },
  },
  plugins: [],
};
