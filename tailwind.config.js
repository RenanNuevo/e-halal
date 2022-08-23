module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  darkmode: false,
  theme: {
    'display': ['roboto'],
    'body': ['"Roboto"'],
    extend: {
      borderColor: theme => ({
        DEFAULT: theme('colors.gray.300', 'currentColor'),
        'switch-enabled': '#71bc02', 
      }),
      backgroundColor: theme => ({
        'switch-enabled': '#71bc02',
        'switch-disabled': '#ff3636',
      }),
    },
  },
  variants: {
    extend: {
      backgroundColor: ['checked']
    },
  },
  plugins: [],
}
