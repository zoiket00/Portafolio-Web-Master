/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./proyectos/*.html"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        base: { 950: '#050507' },
        indigo: { DEFAULT: '#6366f1', soft: '#818cf8' },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}