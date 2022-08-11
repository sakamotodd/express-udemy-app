const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8080,
    proxy: "http://localhost:3000",
  },
  pages: {
    app: {
      entry: "src/pages/App/main.js",
      template: "public/index.html",
      filename: "index.html",
    },
    login: {
      entry: "src/pages/login/main.js",
      template: "public/login.html",
      filename: "login.html",
    },
  },
});
