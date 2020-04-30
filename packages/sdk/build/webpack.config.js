var path = require('path')

module.exports = {
    entry: {
        entry: '../src/sdk.js',
    },
    output: {
        path: path.resolve(__dirname, '../../../assets/scripts/platform/'),
        filename:'sdk.js',
        publicPath: ''
    },
    resolve: {
        extensions: ['.js', '.json']
        // alias: {
        //     'vue$': 'vue/dist/vue.esm.js',
        //     '@': resolve('src')
        // }
    },
    optimization:{
        minimize: false, // <---- 禁用 uglify. 混淆代码
        // minimizer: [new UglifyJsPlugin()] 使用自定义压缩工具
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [path.resolve(__dirname, '../src')],
                use: [
                    //step-2
                    'babel-loader?cacheDirectory',
                    //step-1
                    {
                        loader: 'js-conditional-compile-loader',
                        options: {
                            isDebug: process.env.NODE_ENV === 'development', // optional, this expression is default
                            apple: process.env.ENV_CONFIG === 'ios',  // any name you want, used for /* IFTRUE_apple ...js code... FITRUE_apple */
                            oppo: process.env.ENV_CONFIG === 'oppo'  // any name you want, used for /* IFTRUE_oppo ...js code... FITRUE_oppo */
                           // isPreview: process.env.npm_config_apple, // npm run build-demo --preview, for mock client data
                        }
                    },
                ]
            }
        ]
    }
}
