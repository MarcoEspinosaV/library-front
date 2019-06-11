const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require('path');

const timeStamp = Date.now();

const config = {
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        publicPath: '/js/',
        filename: 'app.bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Paktay App',
            template: 'src/template.html',
            filename: '../index.html'
        })
    ],
    module: {
        rules: [
            { test: /\.tsx?$/, loader: 'ts-loader' },
            {
                test: /\.js?$/,
                exclude: [path.resolve(__dirname, 'node_modules')],
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            },
            {
                test: /\.(tsx|ts|js)$/,
                enforce: 'pre',
                exclude: /node_modules/,
                loader: 'tslint-loader',
                options: {
                    /* Loader options go here */
                }
            },
            {
                test: /\.scss$/,
                use: [
                    /*devMode ? 'style-loader' : MiniCssExtractPlugin.loader,*/
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader:"sass-loader"
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif|ico)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            publicPath: './../images/',
                            outputPath: './../images/'
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            publicPath: './../fonts/',
                            outputPath: './../fonts/'
                        }
                    }
                ]
            }
        ]
    }
};

module.exports = (env, argv) => {
    const envType = process.env.NODE_ENV || 'development';
    if (envType === 'development') {
        config.devtool = 'source-map';
        config.mode = 'development';
        config.entry = [
            'react-hot-loader/patch',
            'webpack-dev-server/client?http://localhost:8081/',
            'webpack/hot/only-dev-server',
            path.resolve('./src/index.tsx')
        ];
        config.plugins.push(
            new webpack.HotModuleReplacementPlugin(),
            new MiniCssExtractPlugin({
              // Options similar to the same options in webpackOptions.output
              // both options are optional
              filename: "./../css/main.css"
            })
        );
        config.devServer = {
            contentBase: path.resolve(__dirname, 'dist'),
            publicPath: '/',
            hot: true,
            port: 8081,
            historyApiFallback: {
                rewrites: [{ from: /^\/$/, to: '/index.html' }]
            }
        }
    }
    if (envType === 'production') {
        config.output.filename = 'app.bundle.js?' + timeStamp;
        config.plugins.push(
          new MiniCssExtractPlugin({
              // Options similar to the same options in webpackOptions.output
              // both options are optional
              filename: "./../css/main" + timeStamp + ".css"
          })
        );
        config.mode = 'production';
        config.entry = [
            path.resolve('./src/index.tsx')
        ]
    }
    return config;
};