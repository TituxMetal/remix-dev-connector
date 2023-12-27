import { type Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: colors.zinc['700'],
        forground: colors.amber['100'],
        primary: colors.blue['600'],
        secondary: colors.amber['300'],
        accent: colors.green['500'],
        destructive: colors.red['400'],
        success: colors.green['400'],
        info: colors.sky['400']
      }
    }
  },
  plugins: []
} satisfies Config
