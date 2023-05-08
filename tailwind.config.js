/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner-1-img': "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/src/assets/images/banner-1.JPG')",
        'banner-2-img': "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/src/assets/images/banner-2.JPG')",
        'banner-3-img': "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/src/assets/images/banner-3.JPG')",
        'banner-4-img': "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/src/assets/images/banner-4.JPG')",
        'quotes-img': "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/src/assets/images/quotes-bg.JPG')",
      },
      fontFamily: {
        'poppins': ["'Poppins'", 'sans-serif'],
        'dancing-script': ["'Dancing Script'", 'cursive'],
        'solitreo': ["'Solitreo'", 'cursive'],
      },
      boxShadow: {
        'snl': 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
      },
      gridTemplateRows: {
        'snl-product-card': '1fr 70px 0.8fr 50px',
        'snl-miscellaneous-product-card': '70px',
      },
      clipPath: {
        'snl-polygon': 'polygon(0 -20%, 100% -20%, 100% 95%, 0 95%)',
      },
    },
  },
  plugins: [
    require('daisyui'),
    require('tailwind-clip-path'),
  ],
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
