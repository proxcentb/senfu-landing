/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'c1': '#374151',
        'c2': '#111827',
        'c3': '#F3F4F6',
      },
      height: {
        '80vh': '80vh',
      },
      minWidth: {
        '270': '270px',
      }
    },
  },
  plugins: [],
}
