const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const include = [
  path.resolve(__dirname, '../src'),
  path.resolve(__dirname, '../node_modules/@rzt/eva'),
  path.resolve(__dirname, '../node_modules/@rzt/eva-utils'),
];

const babeloptions = require('../babel.config.js');

module.exports = {
  rules: [
    {
      test: /.worker\.js$/,
      use: [
        {
          loader: 'worker-loader',
          options: {
            inline: false,
            publicPath: '/',
          },
        },
      ],
    },
    {
      test: /\.(md|ttf|txt|eot|ico|otf|svg|png|gif|woff2|woff|jpg|jpeg|webp|(2)?)(\?[a-z0-9]+)?$/,
      include,
      use: [
        { loader: 'file-loader' },
      ],
    },
    {
      test: /\.html$/,
      loader: 'url-loader',
      include: [
        path.resolve(__dirname, '../src'),
        path.resolve(__dirname, '../node_modules/@rzt/eva'),
      ],
      exclude: [/node_modules/, /index.html/],
    },
    {
      test: /\.css$/,
      include: [
        path.resolve(__dirname, '../src'),
        path.resolve(__dirname, '../node_modules/@rzt/eva'),
      ],
      exclude: [/global.css/, /flaticon.css/],
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            modules: true,
            minimize: process.env.NODE_ENV === 'production',
            sourceMap: true,
            importLoaders: 1,
            localIdentName: '[name]__[local]___[hash:base64:5]',
          },
        },
      ],
    },
    {
      test: [/global.css/, /flaticon.css/],
      include,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            minimize: process.env.NODE_ENV === 'production',
          },
        },
      ],
    },
    {
      test: /\.js$/,
      exclude: [/fonts/, /\.test\.js$/],
      use: {
        loader: 'babel-loader',
        options: {
          babelrc: false,
          ...babeloptions,
        },
      },
      include,
    },
    {
      test: /\.json$/,
      loader: 'json-loader',
      include,
    },
  ],
  exprContextRegExp: /\.\/.js^\node_modules\$/,
};
