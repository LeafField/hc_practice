import { resolve } from "path";

/** @type {import("vite").UserConfig} */
export default {
  base: "./",
  build: {
    outDir: "../docs",
    rollupOptions: {
      output: {
        assetFileNames: (info) => {
          const extType = info.name.split(".")[1];
          console.log(extType);
          if (extType === "css") {
            return "css/style.css";
          }
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            console.log(extType);
            return "images/[name][extname]";
          }
          if (extType === "html") {
            return "[name][extname]";
          }
        },
      },
      input: {
        index: resolve(__dirname, "./index.html"),
      },
    },
  },
};
