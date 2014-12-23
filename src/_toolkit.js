// sets up main namespace, needs to load first
(function(window) {
  
  if (window.webAudioToolkit) {
    throw new Error("Web Audio Toolkit already loaded");
  }

  var webAudioToolkit = {};
  window.webAudioToolkit = webAudioToolkit;
  
})(window);