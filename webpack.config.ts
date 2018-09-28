/* global __dirname */
import * as webpack from 'webpack';
import WebpackPwaManifest = require('webpack-pwa-manifest');
import HtmlWebpackPlugin = require('html-webpack-plugin');
import WorkboxPlugin = require('workbox-webpack-plugin');
import ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const config = function (env: any): webpack.Configuration {
  const entryArray: string[] = ['./src/app/index.tsx'];

  if (!env.production) entryArray.push('webpack-hot-middleware/client?path=/__hmr&reload=true&timeout=2000')

  return {
    entry: entryArray,
    output: {
      path: __dirname,
      filename: 'app.bundle.js',
      publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.(j|t)sx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              babelrc: false,
              presets: [
                [
                  '@babel/preset-env',
                  { targets: { browsers: 'last 2 versions' } } // or whatever your project requires
                ],
                '@babel/preset-typescript',
                '@babel/preset-react'
              ],
              plugins: [
                'react-hot-loader/babel',
              ]
            }
          }
        }
      ]
    },
    plugins: [
      new ForkTsCheckerWebpackPlugin(),
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        title: 'React / Node Boilerplate',
        template: './src/app/assets/index.html',
        favicon: './src/app/assets/favicon.png',
        inject: 'body',
        files: {
          js: ['dist/app.bundle.js'],
          css: ['semantic/semantic.min.css']
        }
      }),
      new WebpackPwaManifest({
        'short_name': 'PWA',
        'name': 'PWA Starter',
        'icons': [
          {
            'src': './src/app/assets/homescreen_icon_192.png',
            'size': '192x192'
          },
          {
            'src': './src/app/assets/homescreen_icon_512.png',
            'size': '512x512'
          }
        ],
        'start_url': '/?source=pwa',
        'background_color': '#008B8B',
        'display': 'standalone',
        'scope': '/',
        'theme_color': '#00b3b3'
      }),
      new WorkboxPlugin.InjectManifest({
        swDest: './service-worker.js',
        swSrc: './src/app/sw/index.js',
        include: [/\.html$/, /\.js$/, /\.png$/]
      }),
    ],
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.css', 'json']
    }
  };
};

export default config;
