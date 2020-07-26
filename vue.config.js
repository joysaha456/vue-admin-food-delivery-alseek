const CopyWebpackPlugin = require('copy-webpack-plugin');
const publicPath = '/vue-admin-crm-flexmust/';
module.exports = {
  publicPath: publicPath,
  pages: {
    index: {
      entry: 'src/index.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  devServer: {
    clientLogLevel: 'warning',
    hot: true,
    contentBase: 'dist',
    compress: true,
    open: true,
    overlay: {warnings: false, errors: true},
    publicPath: '/',
    quiet: true,
    watchOptions: {
      poll: false,
      ignored: /node_modules/
    }
  },

  chainWebpack: config => {
    config.plugins.delete('prefetch-index'),
      config.module
        .rule('vue')
        .use('vue-loader')
        .tap(args => {
          args.compilerOptions.whitespace = 'preserve'
        })
  },
  productionSourceMap: true,
  assetsDir: './assets/',
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin([
        {from: 'src/assets/img', to: publicPath + 'assets/img'},
        {from: 'src/assets/fonts', to: publicPath+ 'assets/fonts'}
      ])
    ]
  }
}
