import { resolve } from "path";

/** @type {import("vite").UserConfig} */
export default {
  base: "./",
  root: "./src",
  build: {
    outDir: "../docs",
    rollupOptions: {
      output: {
        assetFileNames: (info) => {
          console.log(info.name);
          if (info.name.split(".")[1] === "css") {
            return "css/style.css";
          }
          if (info.name.split(".")[1] === "html") {
            return "[name][extname]";
          }
        },
      },
      input: {
        index: resolve(__dirname, "./src/index.html"),
      },
    },
  },
};
