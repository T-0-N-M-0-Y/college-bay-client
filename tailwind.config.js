/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#5de258",

          "secondary": "#21cea8",

          "accent": "#a0f7f1",

          "neutral": "#282735",

          "base-100": "#ffffff",

          "info": "#2fb8e9",

          "success": "#6ee7c9",

          "warning": "#eb930f",

          "error": "#ec5a46",
        },
      },
    ],
  },
  plugins: [require("daisyui")]
}

