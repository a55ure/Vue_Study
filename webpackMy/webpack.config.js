const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
	//编译模式
	mode:'development' ,//  production
	plugins:[htmlPlguin,new VueLoaderPlugin()],
	module:{
		rules:[
			{test:/\.css$/,use:['style-loader','css-loader']}
			{test:/\.less$/,use:['style-loader','css-loader','less-loader']}
			{test:/\.sass$/,use:['style-loader','css-loader','sass-loader']}
			{test:/\.vue$/,use:['vue-loader']}
		]
	}
}