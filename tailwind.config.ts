import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#e8f7ff',
          100: '#d5f0ff',
          200: '#b3e1ff',
          300: '#2f7fff',
          400: '#0047ff',
          500: '#0640cd',
          600: '#103e9f',
          700: '#0640cd',
          800: '#0640cd',
          900: '#103e9f',
          950: '#0a225c'
        }
      }
    }
  }
}
