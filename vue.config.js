/**
 * *@2019-10-08
 * *@author luoxiapeng
 * *@describe vue-cli 3.x配置文件
 */
const path = require('path');
const vConsolePlugin = require('vconsole-webpack-plugin'); // 引入 移动端模拟开发者工具 插件 （另：https://github.com/liriliri/eruda）
const CompressionPlugin = require('compression-webpack-plugin'); //Gzip
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin; //Webpack包文件分析器
const baseUrl = process.env.NODE_ENV === "production" ? "/static/" : "/"; //font scss资源路径 不同环境切换控制
const IS_PROD = ["production", "prod"].includes(process.env.NODE_ENV);
const webpack = require("webpack");
const environment = require("./environment");


module.exports = {
	//基本路径
	//baseUrl: './',//vue-cli3.3以下版本使用
  publicPath:'./',//vue-cli3.3+新版本使用
	//输出文件目录
	outputDir: 'mcdonalds',
	// eslint-loader 是否在保存的时候检查
	lintOnSave: true,
	//放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
	assetsDir: 'static',
	//以多页模式构建应用程序。
	pages: undefined,
	//是否使用包含运行时编译器的 Vue 构建版本
	runtimeCompiler: false,
	//是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建，在适当的时候开启几个子进程去并发的执行压缩
	parallel: require('os').cpus().length > 1,
	//生产环境是否生成 sourceMap 文件，一般情况不建议打开
	productionSourceMap: false,
	// webpack配置
	//对内部的 webpack 配置进行更细粒度的修改 https://github.com/neutrinojs/webpack-chain see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
	chainWebpack: config => {
		/**
		 * 删除懒加载模块的prefetch，降低带宽压力
		 * https://cli.vuejs.org/zh/guide/html-and-static-assets.html#prefetch
		 * 而且预渲染时生成的prefetch标签是modern版本的，低版本浏览器是不需要的
		 */
		//config.plugins.delete('prefetch');
		//if(process.env.NODE_ENV === 'production') { // 为生产环境修改配置...process.env.NODE_ENV !== 'development'
		//} else {// 为开发环境修改配置...
		//}
		config.module
         .rule('css')
         .test(/\.css$/)
         .oneOf('vue')
         .resourceQuery(/\?vue/)
         .use('px2rem')
         .loader('px2rem-loader')
         .options({
             remUnit: 75
				 })
		if (IS_PROD) {
			// 压缩图片
			config.module
				.rule("images")
				.test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
				.use("image-webpack-loader")
				.loader("image-webpack-loader")
				.options({
					mozjpeg: { progressive: true, quality: 65 },
					optipng: { enabled: false },
					pngquant: { quality: [0.65, 0.90], speed: 4 },
					gifsicle: { interlaced: false }
				});
	
			// 打包分析
			config.plugin("webpack-report").use(BundleAnalyzerPlugin, [
				{
					analyzerMode: "static"
				}
			]);
		}
	},
	//调整 webpack 配置 https://cli.vuejs.org/zh/guide/webpack.html#%E7%AE%80%E5%8D%95%E7%9A%84%E9%85%8D%E7%BD%AE%E6%96%B9%E5%BC%8F
	configureWebpack: config => {
		//生产and测试环境
		let pluginsPro = [
			new CompressionPlugin({ //文件开启Gzip，也可以通过服务端(如：nginx)(https://github.com/webpack-contrib/compression-webpack-plugin)
				filename: '[path].gz[query]',
				algorithm: 'gzip',
				test: new RegExp('\\.(' + ['js', 'css','ts'].join('|') + ')$', ),
				threshold: 8192,
				minRatio: 0.8,
			}),
			//	Webpack包文件分析器(https://github.com/webpack-contrib/webpack-bundle-analyzer)
			new BundleAnalyzerPlugin(),
		];
		//开发环境
		let pluginsDev = [
			//移动端模拟开发者工具(https://github.com/diamont1001/vconsole-webpack-plugin  https://github.com/Tencent/vConsole)
			new vConsolePlugin({
				filter: [], // 需要过滤的入口文件
				enable:process.env.NODE_ENV === 'production'? false:true // 发布代码前记得改回 false
			}),
		];
		if(process.env.NODE_ENV === 'production') { // 为生产环境修改配置...process.env.NODE_ENV !== 'development'
			config.plugins = [...config.plugins, ...pluginsPro];
		} else {
			// 为开发环境修改配置...
			config.plugins = [...config.plugins, ...pluginsDev];
		}
		return{
			plugins: [
        new webpack.DefinePlugin({
          "process.env.STAGE": JSON.stringify(environment.stage),
          "process.env.LOCAL_URL": JSON.stringify(environment.localUrl)
        })
      ]
		}
		
	},
	
	css: {
			// 启用 CSS modules
			modules: false,
			// 是否使用css分离插件
			extract: true,
			// 开启 CSS source maps，一般不建议开启
			sourceMap: false,
			// css预设器配置项
			loaderOptions: {
				sass: {
					//设置css中引用文件的路径，引入通用使用的scss文件（如包含的@mixin）
					data: 
					`
					$baseUrl: "/";
					@import '@/assets/scss/common.scss';
					@import '@/assets/scss/mixin.scss';
					`
				}
			},
			loaderOptions: {
				postcss: {
						plugins: [
								require('postcss-plugin-px2rem')({
										rootValue: 75, //换算基数， 默认100  ，这样的话把根标签的字体规定为1rem为50px,这样就可以从设计稿上量出多少个px直接在代码中写多上px了。
										// unitPrecision: 5, //允许REM单位增长到的十进制数字。
										//propWhiteList: [],  //默认值是一个空数组，这意味着禁用白名单并启用所有属性。
										// propBlackList: [], //黑名单
										exclude: /(node_module)/, //默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)\/如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值
										// selectorBlackList: [], //要忽略并保留为px的选择器
										// ignoreIdentifier: false,  //（boolean/string）忽略单个属性的方法，启用ignoreidentifier后，replace将自动设置为true。
										// replace: true, // （布尔值）替换包含REM的规则，而不是添加回退。
										mediaQuery: false, //（布尔值）允许在媒体查询中转换px。
										minPixelValue: 3 //设置要替换的最小像素值(3px会被转rem)。 默认 0
								}),
						]
				}
		}
	},
	// webpack-dev-server 相关配置 https://webpack.js.org/configuration/dev-server/
	devServer: {
		// host: 'localhost',
		host: "0.0.0.0",
		port: 8083, // 端口号
		https: false, // https:{type:Boolean}
		open: true, //配置自动启动浏览器  http://172.11.11.22:8888/rest/XX/ 
		hotOnly: true, // 热更新
		// proxy: 'http://localhost:8000'   // 配置跨域处理,只有一个代理
		proxy: { //配置自动启动浏览器
			// "/": {
			// 	target: "http://baidu.com",
			// 	changeOrigin: true,//是否跨域
			// 	ws: true, // proxy websockets
			// 	secure: false,
			// 	// pathRewrite: {//重写路径
			// 	// 		"^/admin": ''
			// 	// }
			// },
			"/data/*": {
				target: "http://baidu.com",
				changeOrigin: true,//是否跨域
				ws: true, // proxy websockets
				secure: false,
				pathRewrite: {//重写路径
						"^/admin": ''
				}
			},
			"/XX2/*": {
				target: "http://172.12.12.12:2018",
				changeOrigin: true,
				//ws: true,//websocket支持
				secure: false
			},
		}
	},

	// 第三方插件配置 https://www.npmjs.com/package/vue-cli-plugin-style-resources-loader
	pluginOptions: {
		'style-resources-loader': {//https://github.com/yenshih/style-resources-loader
			preProcessor: 'scss',//声明类型
			'patterns': [
                                //path.resolve(__dirname, './src/assets/scss/_common.scss'), 
			],
                        //injector: 'append'
		}
	}
};