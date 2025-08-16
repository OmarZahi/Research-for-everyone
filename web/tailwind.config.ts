import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    '../../*.html',
    '../../**/*.html'
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0b0f19',
        panel: '#0f1526',
        text: '#e6e9f2',
        muted: '#a8b0c3',
        brand: '#10b981',
        brand2: '#3b82f6',
        danger: '#f97316'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Segoe UI', 'Roboto', 'Arial']
      }
    },
  },
  plugins: [],
} satisfies Config
