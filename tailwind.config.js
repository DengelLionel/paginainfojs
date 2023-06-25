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
                "blueOne":"#2F6AAD",
                "blancoOne":"#EEEFF3",
                "blancoTwo":"#F7F8F7",
                "negro":"#020507",
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
