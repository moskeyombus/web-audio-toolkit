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
        nodeSpaceEnabled: false,
        nodeSpaceDiv: null,
        audioContext: null,
        initialize: initialize,
        addNodeSpaceDiv: addNodeSpaceDiv
      };

    toolkit.initialize(config);

    return toolkit;


    function initialize(opts) {
      if(!toolkit.initialized) {
        try{
          toolkit.audioContext = createAudioContext();
          if(opts && opts.nodeSpaceDiv) {
            toolkit.addNodeSpaceDiv(opts.nodeSpaceDiv);
          }
          toolkit.initialized = true;
        }
        catch(e){
          alert(e.name + "\n" + e.message);
        }
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

    function addNodeSpaceDiv(element) {
      var nodeSpace;
      try{
        nodeSpace = document.getElementById(element);

        toolkit.nodeSpaceDiv = element;
        toolkit.nodeSpaceEnabled = true;
      }
      catch(e){
        alert(e.name + "\n" + e.message);
      } 
    }

    function addNode() {
      if(toolkit.nodeSpace) {

      }
      else {

      }
    }

  }

})(window, interact, jsPlumb, webAudioToolkit);