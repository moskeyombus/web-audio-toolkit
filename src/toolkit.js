/** 
* ========
* Web Audio Toolkit - toolkit.js
* ========
*/
(function(window, interact, jsPlumb, webAudioToolkit) {
  'use strict';

  window.WebAudioToolkit = WebAudioToolkit;

  function WebAudioToolkit(config) {

    var 
      toolkit = {
        initializeNodeSpace: initializeNodeSpace
      };


    return toolkit;

    // Identify div for 
    function initializeNodeSpace(element) {
      toolkit.nodeSpace = element;
    }

    function addNode() {
      if(toolkit.nodeSpace) {

      }
      else {

      }
    }

  }

})(window, interact, jsPlumb, webAudioToolkit);