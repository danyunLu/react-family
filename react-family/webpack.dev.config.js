const merge = require('webpack-merge');
const path = require('path');
const commonConfig = require('./webpack.common.config.js');
const webpack = require('webpack');
const devConfig = {
    devtool: "inline-source-map",//调试
    /*入口*/
    entry: {
        app: [
            'babel-polyfill',
            'react-hot-loader/patch',
            path.join(__dirname, 'src/index.js')
        ],
    },

    output: {
        /*这里本来应该是[chunkhash]的，但是由于[chunkhash]和react-hot-loader不兼容。只能dev环境妥协*/
        filename: '[name].[hash].js',
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader',"postcss-loader"],
        }]
    },
    plugins:[
        new webpack.DefinePlugin({
               MOCK: true
        })
    ],
    devServer: {
        //hot:true, //模块热替换 等同命令 --hot
        contentBase: path.join(__dirname, './dist'),
        historyApiFallback: true,
        host: '0.0.0.0'
    },
};
module.exports = merge({
    customizeArray(a, b, key) {
        /*entry.app不合并，全替换*/
        if (key === 'entry.app') {
            return b;
        }
        return undefined;
    }
})(commonConfig, devConfig);