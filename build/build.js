'use strict';
// 以下这段代码注释后，由于不检查版本升级，npm run dev会显著提升效率
require('./check-versions')();

process.env.NODE_ENV = 'production';

//实现node.js 命令行环境的 loading效果
const ora = require('ora');
//node环境下的 rm -rf插件，在项目的文件编译之前，可以清除dist文件夹里的内容
const rm = require('rimraf');
const path = require('path');
// 终端显示带颜色的文字
const chalk = require('chalk');
const webpack = require('webpack');
const config = require('../config');
const webpackConfig = require('./webpack.prod.conf');

// 日志输出
const spinner = ora('building for production...');
spinner.start();

// 打包之前删除上次打包的文件
rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
    if (err) throw err;
    webpack(webpackConfig, (Err, stats) => {
        spinner.stop();
        if (Err) throw Err;
        process.stdout.write(
            `${stats.toString({
                colors: true,
                modules: false,
                children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
                chunks: false,
                chunkModules: false
            })}\n\n`
        );

        if (stats.hasErrors()) {
            console.log(chalk.red('  Build failed with errors.\n'));
            process.exit(1);
        }

        console.log(chalk.cyan('  Build complete.\n'));
        console.log(chalk.yellow('  Tip: built files are meant to be served over an HTTP server.\n' + "  Opening index.html over file:// won't work.\n"));
    });
});
