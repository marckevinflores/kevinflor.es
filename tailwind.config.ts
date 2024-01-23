import { environment } from './src/environments/environment.development';
import type { Config } from 'tailwindcss'
const defaultTheme = require('tailwindcss/defaultTheme')
const mainColor = environment.mainColor;

const getTintedColor = (color: string, intensity: number, mixColor: string = 'white') => {
  return `color-mix(in srgb, ${color}, ${mixColor} ${intensity * 100}%)`
}

const generateTintedColors = (color: string, variants: Record<number, number>, mixColor: string = 'white') => {
  return Object.fromEntries(
    Object.entries(variants).map(([key, value]) => [key, getTintedColor(color, value, mixColor)])
  );
};

export default {
  content: ["./src/**/*.{html,ts}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Inter"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          DEFAULT: mainColor,
          ...generateTintedColors(mainColor, {
            50: 0.95,
            100: 0.9,
            200: 0.7,
            300: 0.5,
            400: 0.3
          }),
          500: mainColor,
          ...generateTintedColors(mainColor, {
            600: 0.1,
            700: 0.3,
            800: 0.5,
            900: 0.7
          }, 'black'),
        },
      },
      keyframes: {
        wave: {
          'from, 50%, to': { transform: 'rotate(0deg)' },
          '10%, 30%': { transform: 'rotate(-10deg)' },
          '20%': { transform: 'rotate(12deg)' },
          '40%': { transform: 'rotate(9deg)' },
        },
      },
      animation: {
        'waving-hand': 'wave 2s linear infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
  safelist: [
    {
      pattern: /(bg|text)-(sky|green|slate)-(400)/,
      variants: ['hover', 'dark', 'dark:hover']
    },
    'hover:fill-[#1469C7]',
    'hover:fill-[#e74c3c]',
    'hover:fill-[#c3c3c3]',
    'dark:hover:fill-[#1469C7]',
    'dark:hover:fill-[#e74c3c]',
    'dark:hover:fill-[#c3c3c3]'
  ]
} satisfies Config

