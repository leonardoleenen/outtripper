const withCSS = require('@zeit/next-css')
const withPlugins = require('next-compose-plugins');
const withTypescript = require('@zeit/next-typescript')
const withImages = require('next-images')

module.exports = withPlugins(
    [withTypescript,withCSS,withImages]
  );