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
          main: '#3EB489',
          light: '#8bd2b8',
          dark: '#1f5a45',
        },
        text: {
          main: '#c5c5c5',
          light: '#ffffff',
          dark: '#999999'
        }
      },
      backgroundColor: {
        primary: {
          main: '#2e3047',
          light: '#212121',
          dark: '#2e3047'
        },
        secondary: {
          main: '#3EB489',
          light: '#8bd2b8',
          dark: '#1f5a45',
        },
        hover: {
          main: 'rgb(89,91,122)'
        }
      },
    },
  },
  plugins: [],
};
