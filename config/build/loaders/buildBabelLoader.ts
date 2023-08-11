import { BuildOptions } from '../types/config';

export function buildBabelLoader(options: BuildOptions) {
  const { isDev } = options;

  return {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [['@babel/preset-env'], '@babel/preset-typescript',],
        plugins: [
          isDev && require.resolve('react-refresh/babel'),
        ].filter(Boolean),
      },
    },
  };
}
