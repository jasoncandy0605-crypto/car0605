/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Luxury Automotive Warm Dark Theme
        'luxury-dark': '#1a1410',
        'luxury-brown': '#2d2419',
        'luxury-caramel': '#8b7355',
        'luxury-amber': '#d4a574',
        'luxury-copper': '#b8860b',
        'luxury-cream': '#f5f1ed',
        'luxury-accent': '#e67e22',
      },
      fontFamily: {
        sans: ['system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['Monaco', 'Courier New', 'monospace'],
      },
      spacing: {
        'safe-bottom': 'max(1rem, env(safe-area-inset-bottom))',
        'safe-top': 'max(1rem, env(safe-area-inset-top))',
      },
    },
  },
  plugins: [],
}
