module.exports = function (eleventyConfig) {
  // make sure we're watching for css changes in dev
  eleventyConfig.addWatchTarget('./src/css/');

  eleventyConfig.addShortcode(
    'currentYear',
    () => `${new Date().getFullYear()}`
  );

  return {
    dir: {
      input: 'src',
      includes: '_includes',
      data: '_data',
      output: '_site',
    },
  };
};
