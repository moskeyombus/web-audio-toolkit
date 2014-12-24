(function(window) {
  'use strict';

  var
    debug = false,
    utils = {
      log: log,
      setDebug: setDebug
    };

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

})(window);