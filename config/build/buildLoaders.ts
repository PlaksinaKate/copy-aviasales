import webpack from "webpack";
import { BuildOptions } from "./types/config";
import { buildBabelLoader } from "./loaders/buildBabelLoader";
import { buildCssLoader } from "./loaders/buildCssLoader";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const tsLoader = {
    test: /\.(ts|tsx)$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const cssLoader = buildCssLoader(options.isDev);

  const fileLoader = {
    test: /\.(png|jpg|gif|svg)$/,
    use: ["file-loader"],
  };

  const babelLoader = buildBabelLoader(options);

  return [fileLoader, tsLoader, cssLoader, babelLoader];
}
