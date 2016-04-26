var webpack = require('webpack');
var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

var ASS = path.resolve(__dirname, 'assets');
var BUILD = path.resolve(__dirname, 'build');


module.exports = {
    entry: {
        app: ['webpack/hot/dev-server', 'webpack-dev-server/client?http://127.0.0.1:8080', './assets/main.js']
    },
    output: {
        path: BUILD,
        filename: '[name].js',
        publicPath: 'build'
    },
    module: {
        loaders: [
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react','es2015']
                }
            }
        ]
    },
    plugins: [
        new OpenBrowserPlugin({
            url: 'http://localhost:8080'
        })
    ],
};