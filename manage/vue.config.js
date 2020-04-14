const Version = new Date().getTime()

// 拼接路径
const resolve = dir => require('path').join(__dirname, dir)

// 增加环境变量
process.env.VUE_APP_VERSION = Version
// process.env.VUE_APP_BUILD_TIME = require('dayjs')().format('YYYY-M-D HH:mm:ss')

// 基础路径 注意发布之前要先修改这里
// let publicPath = process.env.VUE_APP_PUBLIC_PATH || '/'
let publicPath = process.env.VUE_APP_PUBLIC_PATH || '/'

module.exports = {
  /* 部署生产环境和开发环境下的URL：可对当前环境进行区分，baseUrl 从 Vue CLI 3.3 起已弃用，要使用publicPath */
  /* baseUrl: process.env.NODE_ENV === 'production' ? './' : '/' */
  // publicPath: process.env.NODE_ENV === "production" ? "/public/" : "./",
  publicPath,
  /* 输出文件目录：在npm run build时，生成文件的目录名称 */
  outputDir: "dist",
  /* 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录 */
  assetsDir: "assets",
  /* 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度 */
  productionSourceMap: false,
  /* 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存，你可以通过将这个选项设为 false 来关闭文件名哈希。(false的时候就是让原来的文件名不改变) */
  filenameHashing: false,
  /* 代码保存时进行eslint检测 */
  lintOnSave: true,
  /* webpack-dev-server 相关配置 */
  devServer: {
    /* 自动打开浏览器 */
    open: true,
    /* 设置为0.0.0.0则所有的地址均能访问 */
    host: "0.0.0.0",
    port: 8083,
    https: false,
    hotOnly: false
  },
  css: {
      loaderOptions: {
          postcss: {
              plugins: [
                  require('postcss-plugin-px2rem')({
                      rootValue: 37.5, //换算基数， 默认100  ，这样的话把根标签的字体规定为1rem为50px,这样就可以从设计稿上量出多少个px直接在代码中写多上px了。
                      // unitPrecision: 5, //允许REM单位增长到的十进制数字。
                      //propWhiteList: [],  //默认值是一个空数组，这意味着禁用白名单并启用所有属性。
                      // propBlackList: [], //黑名单
                      exclude: /(node_module|element-ui)/i, //默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)\/如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值
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
  configureWebpack: {
    //引入jquery
    plugins: [
      // new webpack.ProvidePlugin({
      //     $: "jquery",
      //     jQuery: "jquery",
      //     "windows.jQuery": "jquery"
      // })
    ],
    /*打包配置版本号*/
    output: {/*模块名称+时间戳*/
      filename: `[name].${Version}.js`,
      chunkFilename: `[name].${Version}.js`
    }
  }
}