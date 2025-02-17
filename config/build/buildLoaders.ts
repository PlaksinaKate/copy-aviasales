import webpack from "webpack";
import { BuildOptions } from "./types/config";
import { buildBabelLoader } from "./loaders/buildBabelLoader";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const tsLoader = {
    test: /\.(ts|tsx)$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const cssLoader = {
    test: /\.css$/,
    use: ["style-loader", "css-loader"],
  };

  const imgLoader = {
    test: /\.(png|jpg|gif|svg)$/,
    use: ["file-loader"],
  };

  const babelLoader = buildBabelLoader(options);

  return [tsLoader, cssLoader, imgLoader, babelLoader];
}
