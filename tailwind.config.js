/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto Mono", "monospace"],
        Viga: ['Viga', 'sans-serif'],
        Poor : ['Poor ', 'system-ui']
      },
      colors: {
        ctm1: "#F1F6F9",
        ctm2: "#394867",
        ctm3: "#212A3E",
        ctm4: "#9BA4B5",
        ctm5: "#00B8A9",
        np1: "#24a492",
        np2: "#35ac9b",
      },
      
    },
  },
  plugins: [],
};
