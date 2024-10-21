import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'nav-scroll': 'header-scroll 0.4s ease-out',
      },
      keyframes: {
        'header-scroll': {
          from: { transform: 'translateY(-150%)'},
          to: { transform: 'translateY(0)'},
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
export default config;
