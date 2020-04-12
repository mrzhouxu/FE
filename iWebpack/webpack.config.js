const path = require('path');

module.exports = {
    mode: 'development',  // development 和 production 开发模式和生产模式，生产模式下代码会进行压缩
    // entry: './src/index.js',  // 与下面写法相等
    entry: {  // 打包输入 打包入口
        main: './src/index.js'
    },
    module: {
        rules: [  // 一些规则
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: '[hash].[ext]',  // [name]... 这是一些占位符
                            outputPath: 'images/',  // 输出位置
                            limit: 1024,
                        }
                    }
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff)/,
                use: {
                    loader: 'file-loader',
                    options: {
                        outputPath: 'font/'
                    }
                }  // 用来 copy 字体文件
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',  // 将 JS 字符串生成为 style 节点, 就是将 js 中的样式自动添加到 dom 节点的 header 中
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2  // 用于配置「css-loader 作用于 @import 的资源之前」有多少个 loader。
                        },
                    },  // 将 CSS 转化成 CommonJS 模块, 比如处理一些 css 中的 @import 引入
                    'sass-loader',  // 将 Sass 编译成 CSS
                    'postcss-loader'  // 样式厂商前缀自动补全
                ]
            }
        ]
    },
    output: {  // 打包输出
        filename: 'bundle.js',  // 输出文件名
        path: path.resolve(__dirname, 'dist')  // 输出路径
    }
}