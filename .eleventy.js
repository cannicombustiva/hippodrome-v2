module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("./assets/my_logo.jpg");

    eleventyConfig.addPassthroughCopy("css/fonts");
  
    eleventyConfig.addPassthroughCopy("**/*.jpg");

    eleventyConfig.addPassthroughCopy("bundle.css");
  };