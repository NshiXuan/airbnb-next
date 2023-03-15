/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#ff385c',
        'secondary-color': '#00848A'
      },
      textColor: {
        'font-primary-color': '#484848',
        'font-secondary-color': '#222'
      }
    }
  },
  plugins: [require('@tailwindcss/line-clamp')]
}
