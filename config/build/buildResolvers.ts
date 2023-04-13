import { ResolveOptions } from 'webpack';
import { BuildOptions } from './types/config';

export function buildResolvers(options: BuildOptions): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules'],
    mainFiles: ['index'],
    alias: {
      mixins: `${options.paths.src}/1.app/styles/_mixins.scss`,
      size: `${options.paths.src}/1.app/styles/size.scss`,
    },
  };
}
