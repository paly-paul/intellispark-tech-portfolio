import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        teal: '#00B8A9',
        blue: '#2D5BFF',
        navy: '#0A0F1E',
        'gray-50': '#F8F9FA',
      },
      fontFamily: {
        inter: ['var(--font-inter)', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      spacing: {
        'nav-height': '68px',
      },
    },
  },
  plugins: [],
}

export default config
