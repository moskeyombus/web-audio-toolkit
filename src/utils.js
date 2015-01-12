(function(window, webAudioToolkit) {
  'use strict';

  var
    debug = false,
    utils;

  utils = webAudioToolkit.utils = {};

  utils.log = log;
  utils.setDebug = setDebug;

  function log(msg) {
    if(debug) {
      console.log(msg);
    }
  }

  function setDebug(setting) {
    debug = setting;
  }

  if (window.webAudioToolkit) {
    window.webAudioToolkit.utils = utils;
  }

})(window, webAudioToolkit);