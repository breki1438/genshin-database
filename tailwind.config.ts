import { Lato } from 'next/font/google'
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
        '1024': '1024px',
        '720': '720px'
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
        '192': '48rem',
        '420': '420px',
        '336': '336px',
        '1/8': '12.5%'
      },

      minWidth: {
        'xs': '20rem',
      },

      height: {
        '3000': '3000px',
        'inherit': 'inherit',
        '192': '720px',
        '432': '432px'
      },

      colors: {
        'poldark': 'rgba(47, 42, 54, 0.75)',
        'poldark15': 'rgba(47, 42, 54, 0.15)',
        'darker': '#222222',
        'dark': '#1D1D26',
        'dark75': 'rgba(28, 26, 31, 0.75)',
        'second': '#3B4773',
        'third': '#FFFFFF',
        'fiveStar': 'rgba(255, 170, 0, 0.25)',
        'fourStar': '#9500ff',
        'lightFont': '#E8E8E8',
        'grayFont': '#8E8E8E',
        'electro': '#7858A6',
        'yellow': '#fab632'
      },

      transitionProperty: {
        'height': 'height',
      },

      dropShadow: {
        'text': '1px 1px 2px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
}
export default config
