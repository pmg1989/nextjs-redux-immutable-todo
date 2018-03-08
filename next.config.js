const { ANALYZE, ASSET_HOST } = process.env
const path = require('path')
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')

// for those who using CDN
const assetPrefix = ASSET_HOST || 'http://localhost:3000'

module.exports = {
  assetPrefix,
  webpack: (config, { dev }) => {
    config.output.publicPath = `${assetPrefix}${config.output.publicPath}`

    if (ANALYZE) {
      const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
      config.plugins.push(new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        analyzerPort: 8888,
        openAnalyzer: true
      }))
    }

    config.module.rules.push({
      test: /\.scss/,
      use: [{
        loader: 'emit-file-loader',
        options: {
          name: 'dist/[path][name].[ext]'
        }
      },
        'babel-loader',
        'styled-jsx-css-loader', {
          loader: 'sass-loader',
          options: { sourceMap: dev }
        }]
    })

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
}
