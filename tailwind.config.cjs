/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors:{
        primary: "#922866",
        table: "#f3f4f6",
        darkred: "#630b3c",
      },
      boxShadow:{
        shadowafter: "10px 0 0 0 rgb(255, 255, 255)",
        shadowbefore: "8px 0 0 0 rgb(255, 255, 255)",
      },
    },
  },
  plugins: [],
}

