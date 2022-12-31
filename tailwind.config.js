/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner-1-img': "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/src/assets/images/banner-1.jpg')",
        'banner-2-img': "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/src/assets/images/banner-2.jpg')",
        'banner-3-img': "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/src/assets/images/banner-3.jpg')",
      },
      fontFamily: {
        'poppins': ["'Poppins'", 'sans-serif'],
      },
      boxShadow: {
        'snl': 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
      }
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        'snl-theme': {
          primary: "#C58940",
          secondary: "#E5BA73",
          accent: "#FAEAB1",
          neutral: "#3A3627",
          "base-100": "#FAF8F1",
        },
      },
    ],
  },
}
