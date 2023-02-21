import { type Configuration as ConfigurationDevServer } from 'webpack-dev-server';
import { type BuildOptions } from './types/config';

export function buildDevServer(options: BuildOptions): ConfigurationDevServer {
  const { port } = options;
  return {
    port,
    open: true,
    historyApiFallback: true,
    hot: true,
  };
}
