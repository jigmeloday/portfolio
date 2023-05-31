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
          main: '#1A8E9C',
          light: '#FCF6F5FF',
          dark: 'rgba(26,142,156,0.48)',
          contrastText: 'rgba(38,38,38,0.82)'
        },
        text: {
          dark: 'rgba(0, 0, 0, 0.87)' ,
          contrastText: 'rgba(0, 0, 0, 0.6)',
          error: '#E74C3C'
        }
      },
      borderColor: {
        primary: {
          main: '#1A8E9C',
          light: '#FCF6F5FF',
          dark: 'rgba(26,142,156,0.48)',
          contrastText: 'rgba(38,38,38,0.82)'
        },
      },
      backgroundColor: {
        primary: {
          main: '#1A8E9C',
          light: '#FCF6F5FF',
          dark: 'rgba(26,142,156,0.48)',
          contrastText: 'rgba(38,38,38,0.82)'
        },
        secondary: {
          main:  '#FFFFFF',
          light: 'rgba(255,255,255,0.68)',
          dark: 'rgba(0, 0, 0, 0.87)' ,
          contrastText: 'rgba(0, 0, 0, 0.6)',
        },
        hover: {
          main: 'rgb(89,91,122)'
        }
      },
    },
  },
  plugins: [],
};
