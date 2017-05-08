module.exports = {
  enrty: './main.js',
  output: {
    path: __dirname,
    filename: 'build.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'bable',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue'
      }
    ]
  },
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  }
}
