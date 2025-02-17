import webpack from "webpack";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildEnv } from "./config/build/types/config";
import path from "path";

export default (env: BuildEnv): webpack.Configuration => {
  const paths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    build: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
    src: path.resolve(__dirname, "src"),
  };

  const mode = env.mode || "development";
  const isDev = mode === "development";
  const PORT = env.port || 3000;
  const API_URL = env.apiUrl || "http://localhost:8000";

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
    apiUrl: API_URL,
    project: "frontend",
  });

  return config;
};
