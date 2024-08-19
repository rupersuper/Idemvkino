/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        costom: "0 0 4px rgba(22, 166, 175, 1)",
      },
    },
  },
  plugins: [],
};
