const path=require('path')
const miniCssExtractPlugin=require('mini-css-extract-plugin')
const HtmlWebpackPlugin=require('html-webpack-plugin')
const vueLoaderPlugin=require('vue-loader/lib/plugin')

module.exports={
    entry:{
        main:path.join(__dirname,'../src/main.js')
    },
    output:{
        filename:'build.[hash:8].js',
        path:path.join(__dirname,"../dist"),
        publicPath:'/'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:[
                    {
                        loader:"babel-loader",
                        options:{
                            preset:"@babel/preset-env",
                            plugins:['@babel/plugin-transform-runtime']
                        }
                    }
                ],
                include:path.join(__dirname,'./src'),
                exclude:/node_modules/
            },
            {
                test:/\.css$/,
                use:[{
                    loader:miniCssExtractPlugin.loader
                },
                'css-loader','postcss-loader']
            },{
                test:/\.(sc|sa)ss$/,
                use:[
                    {loader:miniCssExtractPlugin.loader},
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            },
            {
                test:/\.(git|jpg|png)$/,
                use:[
                    {
                        loader:'file-loader',
                        options:{
                            esModule:false
                        }
                    }
                ]
            },
            {
                test:/\.vue$/,
                use:[
                    {
                        loader:'vue-loader',
                        options:{
                            compiler:require('vue-template-compiler'),
                            transformAssetUrls:{
                                video:['src','poster'],
                                source:'src',
                                img:'src',
                                image:['xlink:href','href'],
                                use:['xlink:href','href']
                            }
                        }
                    }
                ]
            }
        ]
    },
    resolve:{
        extensions:['.js','.vue','.json'],
        alias:{
            'vue$':'vue/dist/vue.esm.js',
            '@':path.join(__dirname,"./src")
        }
    },
    plugins:[
        new miniCssExtractPlugin({
            filename:'main.css'
        }),
        new vueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template:path.join(__dirname,'../index.html'),
            filename:'index.html',
            minify:{
                removeAttributeQuotes:true,
                collapseWhitespace:true,
            }
        })
    ]
}









