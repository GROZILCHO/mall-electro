/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./App.tsx",
    "./index.tsx",
    "./pages/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#4A90E2',
          dark: '#2C3E50',
          orange: '#FF6B35',
          gray: '#F5F7FA',
          text: '#333333'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        body: ['Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
};