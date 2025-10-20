/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ".src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7C3AED', // purple glow color
        border: '#E5E7EB', // light gray border color
      },
      boxShadow: {
        glow: '0 0 15px rgba(124, 58, 237, 0.6)', // purple outer glow
      },
      backgroundImage: {
        'gradient-card': 'linear-gradient(to bottom right, #ffffff, #f3f4f6)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
