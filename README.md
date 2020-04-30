# webpack-js-conditional-compile-cocoscreator-demo


安装依赖环境
-----

在vscode的终端下安装下面依赖项  

* npm install webpack  
* npm install cross-env  
* npm install js-conditional-compile-loader
* npm install babel-core
* npm install babel-loader@7

使用说明
----

   增加编译选项在  package.json文件中  
 ![](https://github.com/chenleic/webpack-js-conditional-compile-demo/blob/master/package.json.png)


  修改sdk的编译输出路径，输出文件名，编译文件和编译条件在 webpack.config.js中  
![](https://github.com/chenleic/webpack-js-conditional-compile-demo/blob/master/webpack.config.js.png)

  
   编译出来的文件名记得改个参数，不然 用 import a = require('./platform/sdk')导不出来
![](https://github.com/chenleic/webpack-js-conditional-compile-demo/blob/master/output.png)

