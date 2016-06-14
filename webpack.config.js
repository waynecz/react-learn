var webpack = require('webpack');
var path = require('path');
// var autoprefixer = require('autoprefixer');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

var CSS = path.resolve(__dirname, 'app/style');
var BUILD = path.resolve(__dirname, 'build');


module.exports = {
    entry: {
        app: ['webpack-dev-server/client?http://127.0.0.1:8080', 'webpack/hot/dev-server', './app/main.js']
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
                loader: 'react-hot!babel-loader?presets=react&presets=es2015'
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'autoprefixer', 'sass'],
                include: CSS
            }
        ]
    },
    plugins: [
        new OpenBrowserPlugin({
            url: 'http://localhost:8080'
        })
    ]
};