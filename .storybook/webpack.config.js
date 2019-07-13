const path = require('path')

module.exports = ({ config, mode }) => {
  config.resolve.alias = {
    ...config.resolve.alias,
    '~': path.resolve(__dirname, '../src'),
  }
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: ['@babel/typescript', '@emotion/babel-preset-css-prop'],
    },
  })
  config.module.rules.push({
    test: /\.stories\.tsx?$/,
    loaders: [
      {
        loader: require.resolve('@storybook/addon-storysource/loader'),
        options: {
          parser: 'typescript',
          prettierConfig: {
            singleQuote: true,
            semi: false,
            trailingComma: 'all',
          },
        },
      },
    ],
    enforce: 'pre',
  })
  config.module.rules.push({
    test: /\.s(c|a)ss$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
    include: path.resolve(__dirname, '../'),
  })
  config.resolve.extensions.push('.ts', '.tsx')
  return config
}
