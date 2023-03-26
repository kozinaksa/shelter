const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const mode = process.env.NODE_ENV || 'development';
const devMode = mode === 'development';
const target = devMode ? 'web' : 'browserslist';
const devtool = devMode ? 'source-map' : undefined;

const pages = ["index", "pets"];

module.exports = {
  mode,
  target,
  devtool,
  devServer: {
    compress: true,
    open: true,
    port: 3000,
  },
  entry: pages.reduce((config, page) => {
    config[page] = `./src/pages/${page}/${page}.js`;
    return config;
  }, {}),
  // entry: {
  //   index: './src/pages/main/index.js',
  //   pets: './src/pages/pets/pets.js'
  // },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                'src/vars.scss',
              ],
            },
          },
        ],
        generator: {
          filename: 'styles/[name][ext]'
        }
      },
      {
        test: /\.(woff|woff2|ttf|eot)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name][ext]'
        }
      },
      {
        test: /\.(jpe?g|png|webp|gif|svg)$/i,
        use: [
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75
              }
            }
          }
        ],
        type: 'asset/resource',
        generator: {
          filename: 'assets/img/[name][ext]'
        }
      },
    ],
  },
  plugins:
  [].concat(
    pages.map(
      (page) =>
        new HtmlWebpackPlugin({
          inject: true,
          template: `./src/pages/${page}/${page}.html`,
          filename: `${page}.html`,
          chunks: [page],
        }),
    ),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
      ignoreOrder: false,
    }),
  ),
  // [
  //   new HtmlWebpackPlugin({
  //     template: path.resolve(__dirname, './src/pages', 'index.html')
  //   }),
  //   new HtmlWebpackPlugin({
  //     template: './src/pages/pets.html',
  //     filename: 'pets.html',
  //   }),
  //   new MiniCssExtractPlugin({
  //     filename: "[name].css",
  //     chunkFilename: "[id].css",
  //     ignoreOrder: false,
  //   }),
  // ],
  optimization: {
    minimize: false,
    runtimeChunk: 'single',
    // splitChunks: {
    //   chunks: 'all',
    // },
  }
};