const path = require('path');
const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');//文件压缩
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {

    /*入口*/
    entry: {
        app: [
            path.join(__dirname, 'src/index.js')
        ],
        vendor:['react','react-router-dom','redux','react-dom','react-redux'] ,//提取公共库
    },

    /*输出到dist文件夹，输出文件名字为bundle.js 优化点：缓存*/
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].[chunkhash].js',
        publicPath : '/'
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader?cacheDirectory=true'],
            include: path.join(__dirname, 'src')
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
        }, {
            test: /\.(png|jpg|gif)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8192
                }
            }]
        }]
    },
    devServer: {
        //hot:true, //模块热替换 等同命令 --hot
        port: 8080,
        contentBase: path.join(__dirname, './dist'),
        historyApiFallback: true,
        host: '0.0.0.0'
    },
    /**
     * 文件路径优化 
     */
    resolve: {
        alias: {
            pages: path.join(__dirname, 'src/pages'),
            components: path.join(__dirname, 'src/components'),
            router: path.join(__dirname, 'src/router'),
            actions: path.join(__dirname, 'src/redux/actions'),
            reducers: path.join(__dirname, 'src/redux/reducers'),
        }
    },
    plugins: [
        //
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, 'src/index.html')
        }),
        //公共库缓存
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),
        new UglifyJSPlugin(), //文件压缩
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
             }
         }),
         new webpack.HashedModuleIdsPlugin(),
         new webpack.optimize.CommonsChunkPlugin({
            name: 'runtime'
        }),
        new CleanWebpackPlugin(['dist']),//打包优化
        new ExtractTextPlugin({
            filename: '[name].[contenthash:5].css',
            allChunks: true
        })

    ],
    devtool: "cheap-module-source-map"
};