import path from 'path'

const config = {
  projectName: 'my-App',
  date: '2023-12-11',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  sourceRoot: 'src',
  compiler: "webpack5",
  outputRoot: process.env.NODE_ENV === 'development' ? `dev/${process.env.TARO_ENV}` : `dist/${process.env.TARO_ENV}`,
  alias: {
    '@api': path.resolve(__dirname, '../src/api'),
    '@images': path.resolve(__dirname, '../src/images'),
    '@utils': path.resolve(__dirname, '../src/utils'),
    '@lib': path.resolve(__dirname, '../src/lib'),
    '@store': path.resolve(__dirname, '../src/store')
  },
  plugins: [
    [
      '@tarojs/plugin-inject',
      {
        // 配置需要新增的 API
        syncApis: ['getPrivacySetting', 'openPrivacyContract', 'requirePrivacyAuthorize', 'onNeedPrivacyAuthorization'],
        components: {
          // 配置组件新增 属性和事件
          Button: {
            bindAgreePrivacyAuthorization: '',
          },
        },
      },
    ]
  ],
  defineConstants: {},
  copy: {
    patterns: [],
    options: {}
  },
  framework: 'react',
  mini: {
    enableExtract: true,
    miniCssExtractPluginOption: {
      // 忽略css文件引入顺序
      ignoreOrder: true
    },
    debugReact: true,
    postcss: {
      pxtransform: {
        enable: true,
        config: {

        }
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {}
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  }
}
module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
