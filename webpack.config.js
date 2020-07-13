const path = require ('path'); // Встроенный модуль NodeJS для путей к файлам проекта

module.exports = {
  devServer: {
    open: true,
    index: 'index.html',
    port: 3000,
    host: '0.0.0.0',
  },
  devtool: 'source-map',
  entry: './src/index.js', // Файл входа
  output: {
    path: path.join (__dirname, 'build/'), // dirname - путь к директории относительно файла, откуда идёт вызов
    filename: 'bundle.js', // Куда собираем
    publicPath: '/build/', // Папка для стилей, картинок и т.п.
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
