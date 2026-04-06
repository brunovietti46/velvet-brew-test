/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brew: {
          espresso:  '#1C0F0A',
          dark:      '#2C1810',
          rich:      '#3D2314',
          medium:    '#6B3A2A',
          sienna:    '#A0522D',
          caramel:   '#C9956A',
          gold:      '#C9A96E',
          cream:     '#F5E6D3',
          ivory:     '#FFF8F0',
          latte:     '#EDD5B3',
        }
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', '"Times New Roman"', 'serif'],
        sans:  ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.3em',
      }
    },
  },
  plugins: [],
}
