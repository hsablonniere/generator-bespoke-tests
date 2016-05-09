// Require Node modules in the browser thanks to Browserify: http://browserify.org
var bespoke = require('bespoke'),
  cube = require('bespoke-theme-cube'),
  keys = require('bespoke-keys'),
  touch = require('bespoke-touch'),
  scale = require('bespoke-scale'),
  bullets = require('bespoke-bullets'),
  hash = require('bespoke-hash');

// Bespoke.js
bespoke.from('article', [
  cube(),
  keys(),
  touch(),
  scale(),
  bullets('li, .bullet'),
  hash()
]);

// Prism syntax highlighting
require('prismjs');

