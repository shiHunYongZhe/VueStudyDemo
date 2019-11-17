// 生产环境，启用第三方文件单独打包，静态缓存
const path = require('path');
const webpack = require('webpack');

module.exports = {
    // 你想要打包的模块的数组
    entry: {
        vendor: ['vue/dist/vue.esm.js', 'axios', 'vue-router', 'vuex']
    },
    output: {
        path: path.join(__dirname, '../static/js'), // 打包后文件输出的位置
        filename: '[name].dll.js',
        library: '[name]_library'
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname, '.', '[name]-manifest.json'),
            name: '[name]_library',
            context: __dirname
        }),
        // 压缩打包的文件
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};

// 在**build/webpack.dev.config.js**和**build/webpack.prod.config.js**中添加 plugins

//     	new webpack.DllReferencePlugin({
//     	      context: __dirname,
//     	      manifest: require('./vendor-manifest.json')
//     	}),

// 在**根目录下的 index.html**下引入预编译的库

//      	<script src="./static/js/vendor.dll.js"></script>

// 在**package.json/scripts**下中添加 dll 命令

//     "dll": "webpack --config ./build/webpack.dll.config.js"

// 运行:

//     npm run dll                   生成 ./build/vendor-manifest.json 和 ./static/js/vendor.dll.js

// 然后再

//     npm run dev或npm run build
