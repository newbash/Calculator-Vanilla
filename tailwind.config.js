/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './main.js',
  ],
  theme: {
    extend: {
      colors: {
        warmWhite: {
          DEFAULT: '#F8F4F0', // Base background
          light: '#FAF8F5',    // Lighter accent
          dark: '#F2E8DC',
        },
        cozyBrown: {
          light: '#A58D7F',    // Subtle text/accents
          DEFAULT: '#7A5E47',  // Body text
          dark: '#5A4635',     // Headlines/strong contrast
        },
        shadowBrown: {
          soft: '#CBB49A',     // Soft shadow
          medium: '#9C7A5A',   // Moderate shadow
          deep: '#4A3325',     // Deep shadow
        },
      }
    },
    darkMode: 'class',
  },
  plugins: [],
  
}

