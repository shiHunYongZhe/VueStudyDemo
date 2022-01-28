'use strict';

const path = require('path');
const utils = require('./utils');
const config = require('../config');
const vueLoaderConfig = require('./vue-loader.conf');

function resolve(dir) {
    return path.join(__dirname, '..', dir);
}

// 要是嫌代码检查太麻烦，可以注释掉eslint工具（1）
const createLintingRule = () => ({
    test: /\.(js|vue)$/,
    loader: 'eslint-loader',
    enforce: 'pre',
    include: [resolve('src'), resolve('test')],
    options: {
        formatter: require('eslint-friendly-formatter'),
        emitWarning: !config.dev.showEslintErrorsInOverlay
    }
});

module.exports = {
    context: path.resolve(__dirname, '../'),
    entry: {
        app: './src/main.js'
    },
    output: {
        // 选择这个目录为输出目录，此处为项目下的子目录dist文件夹（自动生成）
        path: config.build.assetsRoot,
        // 这里的name代表entry入口的key，这里生成的文件名为app.js
        filename: '[name].js',
        // 开发或生产模式下的html.js等文件内部引用的公共路径
        publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath
    },
// 一些解决方案配置
    resolve: {
        // 设置扩展名，如果配置了这个，特定后缀的文件在import导入的时候，就不用再写后缀名了
        // 使用scss的时候，还可以加上 .css 和 .scss
        extensions: ['.js', '.vue', '.json'],
        alias: {
            // 引入路径别名
            vue$: 'vue/dist/vue.esm.js',
            src: path.resolve(__dirname, '../src'),
            common: path.resolve(__dirname, '../src/common'),
            components: path.resolve(__dirname, '../src/components')
        }
    },
    // 加载器，关于各个加载器的参数配置。
    module: {
        rules: [
            // 要是嫌代码检查太麻烦，可以注释掉eslint工具（2）
            ...(config.dev.useEslint ? [createLintingRule()] : []),
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: vueLoaderConfig
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]// 必须包含的文件夹
                // Chrome版本大于67的无需es6转es5
                // options: {
                //   presets: [['@bable/preset-env', {
                //     targets: {
                //       Chrome: "67"
                //     },
                //     useBuiltIns: 'usage'
                //   }]]
                // }
                // 开启多进程打包，适用于工作消耗时间长的场景，一般给babel用，需要安装thread-loader
                // use: [{
                //   loader: 'thread-loader',
                //   options: {
                //     workers:  2
                //   }
                // }]
            },
            // 引入的markdown文件需要解析器
            {
                test: /.md$/,
                loader: 'text-loader'
            },
            // 当图片文件大于10kb的时候，自动生成下面名称的图片（小于10kb的自动变成base64嵌入到页面中）// 文件名为name.7 位 hash 值.扩展名
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]'),
                    // 关闭es6模块化
                    // esModule: false,
                    // 处理后生成的文件夹
                    // outputPath: 'imgs'
                }
            },

            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('media/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            }
        ]
    },
    node: {
        // prevent webpack from injecting useless setImmediate polyfill because Vue
        // source contains it (although only uses it if it's native).
        setImmediate: false,
        // prevent webpack from injecting mocks to Node native modules
        // that does not make sense for the client
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty'
    },
    // 拒绝以下包被打包进来，不过需要在html使用CDN引入外部文件，依然可以在项目中使用import语法，键名是import的npm包名，键值是该库暴露的全局变量,
    // externals: {
    //     vue: 'Vue',
    //     'vue-router': 'VueRouter',
    //     vuex: 'Vuex',
    //     axios: 'axios'
    // }
};
