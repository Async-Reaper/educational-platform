export type BuildMode = 'development' | 'production';

export type BuildPath = {
    entry: string;
    src: string;
    html: string;
    build: string;
};

export type BuildOptions = {
  mode: BuildMode;
  paths: BuildPath;
  isDev: boolean;
  port: number;
};

export type BuildEnv = {
    mode: BuildMode;
    port: number;
};
