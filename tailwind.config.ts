import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      columns: {
        '80': '20rem',
      },

      margin: {
        '88': '22rem',
        '1024': '1024px'
      },

      backgroundPosition: {
        'top-100': 'center top 100px',
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      boxShadow: {
        'outer': '0px 4px 17px 1px rgba(0, 0, 0, .25)',
        'around': '0px 1px 3px 1px rgba(0, 0, 0, .15), 0px 1px 2px 0px rgba(0, 0, 0, 0.3)'
      },

      width: {
        '192': '48rem'
      },

      minWidth: {
        'xs': '20rem',
      },

      height: {
        '3000': '3000px',
        'inherit': 'inherit',
      },

      colors: {
        'poldark': 'rgba(47, 42, 54, 0.75)',
        'darker': '#222222',
        'dark': '#1D1D26',
        'second': '#3B4773',
        'third': '#FFFFFF',
      },

      transitionProperty: {
        'height': 'height',
      }
    },
  },
  plugins: [],
}
export default config
