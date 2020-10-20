module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    enableded: true,
    content: ['./**/*.ejs'],
  },
  theme: {
    extend: {
      colors: {
        fff: {
          'dark-green':  '#1B7340',
          'light-green': '#1DA64A',
          'blue':        '#549670',
          'red':         '#F5333F',
        },
      },
    },
  },
  variants: {},
  plugins: [],
}
