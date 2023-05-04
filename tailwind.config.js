/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      primary: {
        main: '#fae20a',
        light: '#fcee6c',
        dark: '#e1cb09'
      },
      background: {
        main: '#1a1a1a',
        light: '#333333',
        dark: '#000000'
      }
    },
  },
  plugins: [],
};
