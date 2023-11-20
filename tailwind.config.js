/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'linear-gradient(to right, #364e57, #442432)',
        'hero': "url('../../public/hero1.png')",
      },
      colors: {
        'c1': '#374151',
        'c2': '#111827',
        'c3': '#F3F4F6',
        'c4': '#E5E7EB',
      },
      height: {
        '80vh': '80vh',
      }
    },
  },
  plugins: [],
}
