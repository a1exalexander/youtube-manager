process.env.VUE_APP_VERSION = require('./package.json').version;

module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "~@/scss/core/index.scss";',
      },
    },
  },
};
