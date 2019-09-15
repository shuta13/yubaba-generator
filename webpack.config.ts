const pubDir = __dirname + '/public';
module.exports = {
  entry: [
    './src/index.tsx'
  ],
  output: {
    path: pubDir,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: pubDir
  }
};
