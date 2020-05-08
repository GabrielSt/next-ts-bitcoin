const withCSS = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");

const withFonts = require("next-fonts");
const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");


module.exports = withPlugins([
  [withFonts],
  [withImages],
  [withCSS],
  [withSass],
]);
