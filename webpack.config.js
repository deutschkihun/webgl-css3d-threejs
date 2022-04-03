const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'bundle.js',
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
  plugins: [new webpack.HotModuleReplacementPlugin()],
}


/*const path = require('path')
const webpack = require('webpack')


// https://webpack.js.org/configuration/
// npx webpack-dev-server --mode development
module.exports = {
    entry: './src/index.js',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                options: { presets: ["@babel/env"] }
            },
            {
                test: /\.css$/,
                use: ["style-loader","css-loader"]
            }
        ]
    },
    resolve: { extensions: ['*','.js','.jsx'] },
    output: {
        path: path.resolve(__dirname,'dist'),
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
    devServer: {
        port: 3000,
        hot: "only",
        devMiddleware: {
            publicPath: 'http://localhost:3000/dist',
        },
        static: {
            directory: path.resolve(__dirname, "public/"),
        }
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
}
*/