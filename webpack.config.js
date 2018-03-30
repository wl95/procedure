const path = require('path');
const webpack = require('webpack')
const mongoose = require('mongoose');
// 引入body-parser
const bodyParser = require('body-parser');
// 设置bodyParser
const urlencodedExtended = bodyParser.urlencoded({ extended: true });
var WebpackDevServer = require("webpack-dev-server");

module.exports = {
    entry: {
        bundle: __dirname + '/views/main.js'
    },
    output: {
        path: path.join(__dirname, 'output'),
        filename:'[name].js',
        chunkFilename:'[name].bundle.js'
    },
    module: {
        rules: [{
            test: /\.(jsx|js)$/,
            use:['babel-loader']
        }, {
            test: /\.css$/,
            loader:'style-loader!css-loader'    
        },
        {
            test:/\.(jpg|png|jpeg|eot|svg|ttf|woff|woff2)$/,
            loader: 'url-loader'
        },
        {
            test: /\.less$/,
            loader: 'style-loader!css-loader!less-loader'
        }
        
        ]
    },
    devServer: {
        port: 8000,
        open: true,
        disableHostCheck: true,
        historyApiFallback: true,
        contentBase:'.',
    },
    resolve: {
        extensions: ['.json', '.js', '.jsx']
    },
    devtool: 'eval-source-map',
    //插件
    plugins: [
        //必须配置，react的公共模块
       
    ]
}


