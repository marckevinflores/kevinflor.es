import { environment } from './src/environments/environment.development';
import type { Config } from 'tailwindcss'
import colorList from './src/app/data/json/language-tools.json'
const tintVariants = {
  50: 0.95, //95%
  100: 0.9, //90%
  200: 0.7, //70%
  300: 0.5, //50%
  400: 0.3, //30%
  600: 0.1, //10%
  700: 0.3, //30%
  800: 0.5, //50%
  900: 0.7, //70%
}

const mainColor = environment.mainColor;
function getTintVariantColor(color: string, intensity: number, mixColor: string = 'white') {
  return `color-mix(in srgb, ${color}, ${mixColor} ${intensity * 100}%)`
}

const colorVariants = ['sky', 'green', 'slate'];
const variants = [
  'text',
  'bg',
  'hover:text',
  'hover:bg',
  'dark:bg',
  'dark:text',
  'dark:hover:text',
  'dark:hover:bg'
];
const levels = ['200', '500', '700'];

let safelist: any = [];

colorVariants.forEach((color) => {
  variants.forEach((variant) => {
    levels.forEach((level) => {
      safelist.push(`${variant}-${color}-${level}`);
    });
  });
});

let customColor: any = [];
let iconColor = [
  'hover:border',
  'dark:hover:border',
  'group-hover:fill'
]
colorList.lists.forEach(item => {
  iconColor.forEach((variant) => {
    customColor.push(`${variant}-[${item.color}]`);
  })
});

export default {
  content: ["./src/**/*.{html,ts}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: mainColor,
          50: getTintVariantColor(mainColor, tintVariants['50']),
          100: getTintVariantColor(mainColor, tintVariants['100']),
          200: getTintVariantColor(mainColor, tintVariants['200']),
          300: getTintVariantColor(mainColor, tintVariants['300']),
          400: getTintVariantColor(mainColor, tintVariants['400']),
          500: mainColor,
          600: getTintVariantColor(mainColor, tintVariants['600'], 'black'),
          700: getTintVariantColor(mainColor, tintVariants['700'], 'black'),
          800: getTintVariantColor(mainColor, tintVariants['800'], 'black'),
          900: getTintVariantColor(mainColor, tintVariants['900'], 'black'),
        },
      },
    },
  },
  plugins: [],
  safelist: [...safelist, ...customColor]
} satisfies Config

