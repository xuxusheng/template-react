import 'webpack-dev-server'

import merge from 'webpack-merge'

import common from './webpack.common'

export default merge(common, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                // 为了适配蛇形驼峰类名的问题加入 modules 选项后，千万不要忘了设置这里

                mode: 'local',
                auto: true,
                // 针对 scss 文件中类名为蛇形，ts 中类名为驼峰，这样设置之后，ts 中不管用驼峰类名还是蛇形类名都会转为相同的 hash 串
                exportLocalsConvention: 'camelCase',
              },
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  devServer: {
    port: 'auto',
    hot: true,
    historyApiFallback: true,
    open: ['/?appId=test&redirectUrl=test'],
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
      },
    },
  },
})
