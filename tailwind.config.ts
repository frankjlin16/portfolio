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
      'brick': '#8B8684',
      'light': '#E4E5E3',
      'accent': '#B7CBD2',
    },
    },
    
    fontFamily: {
      sans: ['Palanquin'],
      serif: ['Palanquin'],
    },
  },
  plugins: [],
}
export default config
