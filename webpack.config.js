const path = require ('path'); // Встроенный модуль NodeJS для путей к файлам проекта

module.exports = {
  // entry: './src/index.js', // Файл входа
  entry: path.resolve (__dirname, 'src/index.js'),
  output: {
    path: path.join (__dirname, 'build'), // dirname - путь к директории относительно файла, откуда идёт вызов
    // filename: '[name].[contenthash].js', // Куда собираем (с хэшем)
    filename: '[name].js', // Куда собираем
    publicPath: '/build/', // Папка для стилей, картинок и т.п.
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ['style', 'css?sourceMap', 'sass?sourceMap'],
      },
      {
        test: /\.jpg$/,
        loader: 'file-loader',
      },
    ],
  },
  devServer: {
    open: true,
    index: 'index.html',
    port: 3000,
    host: '0.0.0.0',
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.js/, // Расширение файла в виде регулярного выражения
        use: [
          // Принимает лоадеры модулей в виде объектов
          // uglify сюда
          {
            loader: 'babel-loader',
            options: {
              // Настройки конкретного лоадера
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
      {
        test: /\.(svg|png|jp(e*)g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
              outputPath: 'img',
            },
          },
        ],
      },
      {
        test: /\.html$/,
        loader: 'raw-loader',
      },
      {
        // Sass компилятор
        test: /\.s[ac]ss$/,
        exclude: [
          path.resolve (__dirname, '_theme.dark'),
          path.resolve (__dirname, 'sections'),
          path.resolve (__dirname, '_library.blocks'),
          path.resolve (__dirname, '_common.blocks'),
        ],
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              url: false,
            },
          },

          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
};
