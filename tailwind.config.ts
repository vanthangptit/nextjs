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
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    fontSize: {
      '2xsm': '10px',
      xsm: '12px',
      sm: '13px',
      md: '15px',
      lg: '18px',
      xl: '20px',
      '2xl': '22px',
      '3xl': '26px',
      '4xl': '32px',
      '5xl': '48px'
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
export default config;
