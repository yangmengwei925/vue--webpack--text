let {smart} = require('webpack-merge')
let base=require('./webpack.base.js')
let {CleanWebpackPlugin} =require('clean-webpack-plugin')//清除上一次打包的文件。
let TerserPlugin=require('terser-webpack-plugin')//解决压缩CSS出现的JS不能压缩问题。
let OptimizeCssAssetsWebpackPlugin=require('optimize-css-assets-webpack-plugin')//压缩Css文件。

module.exports=smart(base,{
    mode:'production',
    plugins:[new CleanWebpackPlugin()],
    optimization:{minimizer: [new TerserPlugin({}), new OptimizeCssAssetsWebpackPlugin({})]}
})

