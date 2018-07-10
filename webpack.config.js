const merge = reqiure("webpack-merge");
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');//文件压缩
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const commonConfig = require('./webpack.common.config.js');

const publicConfig = {
    devtool: "cheap-module-source-map",
    module: {
        rules: [{
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: ["css-loader","postcss-loader"]
            }),
        }]
    },
    plugins: [
        new UglifyJSPlugin(), //文件压缩
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new CleanWebpackPlugin(['dist/*.*']),//打包优化
        new ExtractTextPlugin({
            filename: '[name].[contenthash:5].css',
            allChunks: true
        })

    ],
};

module.export = merge(commonConfig, publicConfig)