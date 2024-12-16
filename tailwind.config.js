/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

// module.exports = {
//   theme: {
//     extend: {
//       animation: {
//         'spin-slow': 'spin 8s linear infinite',
//         'slide-left': 'slideLeft 3s ease-in-out infinite',
//       },
//       keyframes: {
//         slideLeft: {
//           '0%, 100%': { transform: 'translateX(0)' },
//           '50%': { transform: 'translateX(15px)' },
//         },
//       },
//     },
//   },
// };