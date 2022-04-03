const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  // multi entry file 
  /*/entry: {
    index:'./src/index.js',
    app:'./src/app.js',
  },*/
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'bundle.js',
    // multi filename
    // name is a name of each entry file, in this case index and app
    //filename: '[name]_bundle.js' 
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: { presets: ['@babel/env'] },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  performance: {
    maxEntrypointSize: 1024000,
    maxAssetSize: 1024000,
  },
  devServer: {
    hot: 'only',
    devMiddleware: {
      publicPath: 'http://localhost:9000/dist',
    },
    static: {
      directory: path.resolve(__dirname, 'public/'),
    },
    compress: true,
    port: 9000,
  },
  plugins: [new webpack.HotModuleReplacementPlugin(),    new LiveReloadPlugin()],
}