const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            { test: /\.js$/, use: 'babel-loader' },
            { test: /\.scss$/, use: ExtractTextPlugin.extract([ 'css-loader', 'sass-loader']) }
        ]
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './app/index.html'
      }),
      new ExtractTextPlugin({
        filename: './app/styles.css',
        allChunks: true
      })
    ]
};

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env' : {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      }
    }),
    new webpack.optimize.UglifyJsPlugin()
  )
}

module.exports = config;
