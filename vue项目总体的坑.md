# vscode关于eslint的问题
## 安装插件： vetur

vscode 的插件安装完成后还不用重启整个程序，只要重新加载下工作区窗口就可以了

安装完 vetur 后还需要加上这样一段配置下：
```
"emmet.syntaxProfiles": {
  "vue-html": "html",
  "vue": "html"
}
```
这时可以打开一个vue文件试试，注意下右下角状态栏是否正确识别为 vue 类型：


## 安装了 ESLint 插件后，还需要在 vscode 中配置下 ESLint：
```
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        "html",
        "vue"
    ],
    "eslint.options": {
        "plugins": ["html"]
    },
```
# npm install之后npm run dev，报错This is probably not a problem with npm,there is likely additional logging output above
npm install之后，运行 npm i -D webpack-dev-server@2.9.7
