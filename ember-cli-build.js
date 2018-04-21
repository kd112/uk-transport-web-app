'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
// const leaflet = require('leaflet');
module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    'ember-bootstrap': {
      'bootstrapVersion': 3,
      'importBootstrapFont': true,
      'importBootstrapCSS': true,
      'importBootstrapTheme':true
    }
  });
  app.import('/bower_components/bootstrap/dist/css/bootstrap.css')
  // app.import('leaflet')
    // app.import('/public/js/app.js')

  return app.toTree();
};
