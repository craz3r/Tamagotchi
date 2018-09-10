const HtmlWebPackPlugin = require("html-webpack-plugin");
const combineLoaders = require("webpack-combine-loaders");

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015', 'stage-2'],
          plugins: ['transform-class-properties']
        }
      },
      {
        test: /\.css$/,
        loader: combineLoaders([
        {
          loader: 'style-loader'
        }, {
          loader: 'css-loader',
          query: {
            modules: true,
            localIdentName: '[name]__[local]___[hash:base64:5]'
          }
        }
      ])
    }]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html'
    })
  ],
}
