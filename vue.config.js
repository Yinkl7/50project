const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(jpe?g|png|gif)$/i,
          type: 'asset',
          generator: {
            // 输出文件位置以及文件名
            // [ext] 自带 "." 这个与 url-loader 配置不同
            filename: '[name][hash:8][ext]',
          },
          parser: {
            dataUrlCondition: {
              maxSize: 50 * 1024,
            },
          },
        },
        {
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
          type: 'asset',
          generator: {
            filename: '[name][hash:8][ext]',
          },
          parser: {
            dataUrlCondition: {
              // 超过 10 * 1024 不转base64
              maxSize: 10 * 1024,
            },
          },
        },
      ],
    },
  },
})
