/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "background": "#FDFDFD",
        primary: {
          "500": "#333333",
          "600": "#222222",
          "900": "#000000",
        },
        "secondary": "#FFD700",
        "accent": "#FFD700",
      },
    },
  },
  plugins: [],
};
