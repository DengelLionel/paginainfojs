const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ['./src/**/*.js'],
    darkMode: 'media',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
            colors:{
                "blackTransparente":"rgba(0,0,0,.5)",
                "blancoTransparente":"rgba(255.255.255)",
                "plomo":"#595858",
                "plomoTwo":"#9998B3",
                "blueOne":"#2F6AAD",
                "blancoOne":"#EEEFF3",
                "blancoTwo":"#F7F8F7",
                "negro":"#020507",
                "blueTwo":"#E0E9EF",
                "blueTres":"#6893AE"
                     },
            fontFamily:{
                notosans:'var(--font-notosans)'
            },
            boxShadow: {
                'marca': '35px 0 60px -15px rgba(0, 0, 0, 0.5)',
                'nav': '35px 0 60px -15px rgba(0, 0, 0, 0.5)',
                'areas':'0 0 7px 0 rgba(0, 125, 255, 0.8)'
              }
        },
    },
    variants: {
        extend: {
            opacity: ['disabled'],
        },
    },
    plugins: [require('@tailwindcss/forms')],
}
