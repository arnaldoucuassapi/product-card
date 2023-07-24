/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#D9CDF7',
        violet: '#271A45'
      },
      fontFamily: {
        title: '--font-crimson-pro'
      }
    }
  },
  plugins: [],
}
