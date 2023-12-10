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
        '88': '22rem'
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
        'around': '0 0 8px 4px rgba(0, 0, 0, 0.75)',
      },

      width: {
        '192': '48rem'
      },

      minWidth: {
        'xs': '20rem',
      },

      height: {
        '3000': '3000px',
      },

      colors: {
        'poldark': 'rgba(57, 52, 64, 0.95)',
        'darker': '#222222',
        'dark': '#1D1D26',
        'second': '#3B4773',
        'third': '#FFFFFF',
      },
    },
  },
  plugins: [],
}
export default config
