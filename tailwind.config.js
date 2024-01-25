/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto Mono", "monospace"],
      },
      colors: {
        ctm1: "#F1F6F9",
        ctm2: "#394867",
        ctm3: "#212A3E",
        ctm4: "#9BA4B5",
      },
      
    },
  },
  plugins: [],
};
