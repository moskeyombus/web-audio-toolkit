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
        initialized: false,
        initialize: initialize
      };


    return toolkit;


    function initialize(config) {
      try{
        toolkit.audioContext = createAudioContext();
      }
      catch(e){
        alert(e.name + "\n" + e.message);
      }       
    }

    function createAudioContext() {
      var ctx = null;

      if (typeof AudioContext !== 'undefined') {
        ctx = new AudioContext();
      } else if (typeof webkitAudioContext !== 'undefined') {
        ctx = new webkitAudioContext();
      } else {
        throw new Error("This browser does not support the Web Audio API");
      }
      return ctx;
    }

    function addNode() {
      if(toolkit.nodeSpace) {

      }
      else {

      }
    }

  }

})(window, interact, jsPlumb, webAudioToolkit);