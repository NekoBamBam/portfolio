/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#1d3031", 
        primary: "#049c92", 
        accent: "#04cc9c", 
        muted: "#21676d", 
        surface: "#3c553f", 
        highlight: "#d39152", 
        danger: "#357c59",
        info: "#0daab7",
      },
    },
  },

  plugins: [require("daisyui")],
};
