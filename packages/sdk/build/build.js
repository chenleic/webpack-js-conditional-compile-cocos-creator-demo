var webpack = require('webpack')
var webpackConfig = require('./webpack.config')

console.log(webpackConfig);

function doWebpack(onEnd) {
    webpack(webpackConfig, (err, stats) => {
        if (onEnd) onEnd(err);

        if (err) {
           console.error(err);
        }
        console.log("build complete ", stats);
    })
}
doWebpack();