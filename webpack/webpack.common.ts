import HtmlWebpackPlugin from 'html-webpack-plugin'
import { resolve } from 'path'
import { Configuration } from 'webpack'

const config: Configuration = {
  entry: './src/index.tsx',
  output: {
    path: resolve(__dirname, '../dist'),
    filename: '[name]-[contenthash:8].bundle.js',
    clean: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name]-[contenthash:8].[ext]',
              outputPath: 'images',
              limit: 8 * 1024,
            },
          },
        ],
      },
      {
        test: /\.(eot|ttf|woff|woff2|font)$/,
        use: [{ loader: 'file-loader' }],
      },
      {
        test: /\.tsx?$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, '../src/index.html'),
    }),
  ],
}

export default config