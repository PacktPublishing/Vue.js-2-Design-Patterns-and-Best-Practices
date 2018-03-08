const webpackConfig = require('./webpack.config.js');
const wallabyWebpack = require('wallaby-webpack');

module.exports = function(wallaby) {
  webpackConfig.resolve.alias = {
    '@': require('path').join(wallaby.projectCacheDir, 'src'),
  };
  webpackConfig.externals = { vue: 'Vue' };
  webpackConfig.module.rules.find(
    r => r.loader === 'vue-loader',
  ).options.loaders.js =
    '';

  const wallabyPostprocessor = wallabyWebpack(webpackConfig);

  return {
    files: [
      { pattern: 'node_modules/vue/dist/vue.js', instrument: false },
      {
        pattern: 'node_modules/babel-polyfill/dist/polyfill.js',
        instrument: false,
      },
      { pattern: 'src/**/*.*', load: false },
    ],

    env: {
      type: 'browser',
    },

    tests: [{ pattern: 'src/**/*.spec.js', load: false }],

    postprocessor: wallabyPostprocessor,

    setup: function() {
      // eslint-disable-next-line
      Vue.config.errorHandler = function(err) {
        throw err;
      };
      window.__moduleBundler.loadTests();
    },

    hints: {
      ignoreCoverage: /ignore coverage/,
    },
    compilers: {
      '**/*.js': wallaby.compilers.babel(),
      '**/*.vue': require('wallaby-vue-compiler')(wallaby.compilers.babel({})),
    },
    debug: true,
  };
};
