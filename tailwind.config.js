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
          contrastText: 'rgba(38,38,38,0.82)',
          header: 'rgba(59,59,59,0.65)',
          drawer: 'rgb(239,239,239)'
        },
        custom: {
          card1: '#dc7460',
          card2: '#1A8E9C',
          card3: '#ab0c4a',
          card4:  '#5CAEEA',
          card5: '#9568d4',
          card6:'#ff03b5',
        },
        text: {
          dark: 'rgba(0, 0, 0, 0.87)' ,
          contrastText: 'rgba(0, 0, 0, 0.6)',
          light: '#FCF6F5FF',
          moon: 'rgba(157,178,191,0.44)',
          sun: '#FDB813',
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
        expbox: {
           card1: {
             border: '#dc7460',
             icon: 'rgba(220,116,96,0.35)'
           },
          card2: {
            border: '#1A8E9C',
            icon: 'rgba(26,142,156,0.35)'
          },
          card3: {
            border: '#ab0c4a',
            icon: 'rgba(171,12,74,0.35)'
          },
          card4: {
            border: '#5CAEEA',
            icon: 'rgba(92,174,234,0.35)',
          },
          card5: {
            border: '#9568d4',
            icon: 'rgba(149,104,212,0.35)',
          },
          card6: {
            border: '#ff03b5',
            icon: 'rgba(255,3,181,0.35)',
          }
        }
      },
      backgroundColor: {
        primary: {
          main: '#1A8E9C',
          light: '#FCF6F5FF',
          dark: 'rgba(14,101,115,0.88)',
          contrastText: 'rgba(38,38,38,0.82)'
        },
        secondary: {
          main:  '#FFFFFF',
          light: 'rgba(255,255,255,0.68)',
          dark: 'rgba(0, 0, 0, 0.87)' ,
          contrastText: 'rgba(0, 0, 0, 0.6)',
        },
        hover: {
          card1: 'rgba(220,116,96,0.35)',
          card2: 'rgba(26,142,156,0.35)',
          card3: 'rgba(171,12,74,0.35)',
          card4:  'rgba(92,174,234,0.35)',
          card5: 'rgba(149,104,212,0.35)',
          card6:'rgba(255,3,181,0.35)',
        }
      },
      screens: {
        'sm': '576px',
        'md': '760px',
        'lg': '1440px',
      },
    },
  },
  plugins: [],
};
