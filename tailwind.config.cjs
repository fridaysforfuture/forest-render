module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    enabled: true,
    content: ['./**/*.ejs'],
  },
  theme: {
    extend: {
      colors: {
        fff: {
          'dark-green':  '#1B7340',
          'light-green': '#1DA64A',
          'blue':        '#90D3ED',
          'red':         '#F5333F',
        },
      },
    },
  },
  variants: {},
  plugins: [],
}
