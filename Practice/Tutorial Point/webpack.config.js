var config = {
   entry: './main.js',

   output: {
      path:__dirname,
      filename: 'index.js',
   },

   devServer: {
      inline: true,
      port: 8080
   },

   module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015']
      }
    }]
  },
}

module.exports = config;