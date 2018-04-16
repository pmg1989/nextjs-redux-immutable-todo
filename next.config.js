const { ANALYZE } = process.env
const path = require('path')
const withLess = require('@zeit/next-less')
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')
const { assetPrefix } = require('./src/utils/config')

function moduleDir (m) {
  return path.dirname(require.resolve(`${m}/package.json`))
}

module.exports = withLess({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]___[hash:base64:5]',
  },
  assetPrefix,
  webpack: (config, { dev, isServer }) => {
    config.output.publicPath = `${assetPrefix}${config.output.publicPath}`

    config.resolve.alias = {
      components: path.resolve('./components'),
      utils: path.resolve('./utils'),
      constants: path.resolve('./constants'),
      actions: path.resolve('./actions'),
      services: path.resolve('./services'),
      svg: path.resolve('./svg'),
      themes: path.resolve('./themes'),
    }

    // fix with babel-plugin-import start
    config.resolve.extensions = ['.web.js', '.js', '.json']

    config.module.rules.push(
      {
        test: /\.(svg)$/i,
        loader: 'emit-file-loader',
        options: {
          name: 'dist/[path][name].[ext]',
        },
        include: [
          moduleDir('antd-mobile'),
          __dirname,
        ],
      },
      {
        test: /\.(svg)$/i,
        loader: 'svg-sprite-loader',
        include: [
          moduleDir('antd-mobile'),
          __dirname,
        ],
      }
    )
    // fix with babel-plugin-import end

    if (ANALYZE) {
      const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
      config.plugins.push(new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        analyzerPort: isServer ? 8888 : 8889,
        openAnalyzer: true,
      }))
    }

    /* Enable only in Production */
    if (!dev) {
      // Service Worker
      config.plugins.push(
        new SWPrecacheWebpackPlugin({
          cacheId: 'next-ss',
          filepath: './static/sw.js',
          minify: true,
          staticFileGlobsIgnorePatterns: [/\.next\//],
          staticFileGlobs: [
            'static/**/*', // Precache all static files by default
          ],
          runtimeCaching: [
            // Example with different handlers
            {
              handler: 'fastest',
              urlPattern: /[.](png|jpg|css)/,
            },
            {
              handler: 'networkFirst',
              urlPattern: /^http.*/, // cache all files
            },
          ],
        })
      )
    }

    return config
  },
})
