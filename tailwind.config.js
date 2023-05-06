/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontWeight: {
        1: '100',
        2: '200',
        3: '300',
        4: '400',
        5: '500',
        6: '600',
        7: '700',
        8: '800',
        9: '900'
      },
      colors: {
        primary: {
          main: '#fae20a',
          light: '#fcee6c',
          dark: '#e1cb09',
        },
        text: {
          main: '#adadad',
          light: '#dedede',
          dark: '#797979'
        }
      },
      backgroundColor: {
        primary: {
          main: '#333333',
          light: '#1a1a1a',
          dark: '#000000'
        },
        secondary: {
          main: '#fae20a',
          light: '#fcee6c',
          dark: '#e1cb09',
        },
      },
    },
  },
  plugins: [],
};
