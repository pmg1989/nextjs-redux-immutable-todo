const { ANALYZE, ASSET_HOST } = process.env
const path = require('path')
const withLess = require('@zeit/next-less')
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')

// for those who using CDN
// const assetPrefix = ASSET_HOST || 'http://localhost:3000'

module.exports = withLess({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  },
  // assetPrefix,
  webpack: (config, { dev, isServer }) => {
    // config.output.publicPath = `${assetPrefix}${config.output.publicPath}`

    config.resolve.alias = {
      components: path.resolve('./components'),
      utils: path.resolve('./utils'),
      constants: path.resolve('./constants'),
      actions: path.resolve('./actions')
    }

    if (ANALYZE) {
      const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
      config.plugins.push(new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        analyzerPort: isServer ? 8888 : 8889,
        openAnalyzer: true
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
            'static/**/*' // Precache all static files by default
          ],
          runtimeCaching: [
            // Example with different handlers
            {
              handler: 'fastest',
              urlPattern: /[.](png|jpg|css)/
            },
            {
              handler: 'networkFirst',
              urlPattern: /^http.*/ //cache all files
            }
          ]
        })
      )
    }

    return config
  }
})
