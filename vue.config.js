module.exports = {
  publicPath: "/portfolio",
  outputDir: "docs",

  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "~@/assets/scss/variables";
          @import "~@/assets/scss/mixins";
          @import "~@/assets/scss/functions";
        `
      }
    }
  }
};
