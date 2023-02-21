import {type BuildOptions} from "./types/config";
import webpack from 'webpack';
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
export default function buildPlugins ({paths, isDev}: BuildOptions): webpack.WebpackPluginInstance[] {
    return [
        new webpack.ProgressPlugin,
        new HtmlWebpackPlugin({
            template: paths.html
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev)
        }),
        new BundleAnalyzerPlugin({
            openAnalyzer: false
        })
    ]
}
