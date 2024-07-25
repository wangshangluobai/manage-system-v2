
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader', // 添加 postcss-loader 对 css 文件进行处理
            options: {
              postcssOptions: { // 设置 PostCSS 选项和插件
                plugins: [
                  require('tailwindcss'),
                  require('autoprefixer') // 使用 autoprefixer 插件
                ]
              }
            }
          }
        ]
      },
    ]
  }
}
