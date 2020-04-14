const autoprefixer = require('autoprefixer')
const pxtorem = require('postcss-pxtorem')

// 增加环境变量
process.env.VUE_APP_VERSION = require('./package.json').version
process.env.VUE_APP_BUILD_TIME = require('dayjs')().format('YYYY-M-D HH:mm:ss')

// 基础路径 **发布之前要先修改这里**
let publicPath = process.env.VUE_APP_PUBLIC_PATH || '/'

// 设置不参与构建的库
// let externals = {}
// cdnDependencies.forEach(package => { externals[package.name] = package.library })

// // 引入文件的 cdn 链接
// const cdn = {
//   css: cdnDependencies.map(e => e.css).filter(e => e),
//   js: cdnDependencies.map(e => e.js).filter(e => e)
// }

module.exports = {
  // 根据自身实际情况修改
  publicPath,
  lintOnSave: false,   // 取消 eslint 验证

  // 跨域代理
  devServer: {
    port: 8888,     // 端口
    proxy: {
      '/api': {
        target: '',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api/': ''
        }
      }
    }
  },
  css: {
    loaderOptions: {
      // 设置 scss 公用变量文件
      sass: {
        // prependData: `@import '~@/assets/style/public.scss';`
      },
      stylus: {
        'resolve url': true,
        'import': []
      },
      postcss: {
        plugins: [
          autoprefixer({
            browsers: ['Android >= 4.0', 'iOS >= 7']
          }),
          pxtorem({
            remUnit: 75,
            propList: ['*'],
          })
        ]
      }
    }
  },
  pluginOptions: {
    'element-ui': {
      postCompile: false,
      theme: false
    }
  }
}
