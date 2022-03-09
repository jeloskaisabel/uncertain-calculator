const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  //publicPath: process.env.NODE_ENV === 'production' ? '/teams/' : '/',
  publicPath: process.env.NODE_ENV === "production" ? "/uncertain-calculator/" : "/",
});
