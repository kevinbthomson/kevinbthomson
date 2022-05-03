module.exports = function (eleventyConfig) {
  // make sure we're watching for css changes in dev
  eleventyConfig.addWatchTarget('./src/css/');

  eleventyConfig.addShortcode(
    'currentYear',
    () => `${new Date().getFullYear()}`
  );

  return {
    dir: {
      data: '_data',
      includes: '_includes',
      input: 'src',
      output: 'public',
    },
  };
};
