const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const CleanPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const pkg = require('./package.json');
const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
  app: path.join(__dirname, 'app'),
  dist: path.join(__dirname, 'dist'),
  style: path.join(__dirname, 'app/css/style.css')
};

const common = {
  entry: {
    index: path.join(PATHS.app, 'index.jsx'),
    style: PATHS.style
  },
  resolve: {
    root: PATHS.app,
    alias: {
      libs:       'libs',
      constants:  'constants',
      actions:    'actions',
      apis:       'apis',
      stores:     'stores'
    },
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: PATHS.dist,
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.jpe?g$|\.gif$|\.png$/,
        loader: 'file',
      },
      {
        test: /\.(otf|eot|svg|ttf|woff)/,
        loader: 'url-loader?limit=8192'
      },
      {
        test: /\.jsx?$/,
        loaders: ['babel?cacheDirectory'],
        include: PATHS.app
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      filename: 'index.html',
      template: 'app/templates/template.ejs'
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
      "window.Tether": 'tether'
    })
  ]
};

if(TARGET === 'build' || !TARGET) {
  module.exports = merge(common, {
    entry: {
      vendor: Object.keys(pkg.dependencies).filter(function(v) {
        return v !== 'font-awesome' && v !== 'tether' && v !== 'bootstrap';
      })
    },
    output: {
      path: PATHS.dist,
      filename: '[name].[chunkhash].js',
      chunkFilename: '[chunkhash].js'
    },
    module: {
      loaders: [
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract('style', 'css')
        }
      ]
    },
    plugins: [
      new CleanPlugin(
        [PATHS.dist]
      ),
      new ExtractTextPlugin('[name].[chunkhash].css'),
      new webpack.optimize.CommonsChunkPlugin({
        names: ['vendor', 'manifest']
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"production"'
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
    ]
  });
}

if(TARGET === 'start') {
  module.exports = merge(common, {
    devtool: 'eval-source-map',
    module: {
      loaders: [
        {
          test: /\.css$/,
          loaders: ['style', 'css']
        }
      ]
    }
  });
}
