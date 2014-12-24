/** 
* ========
* Web Audio Toolkit - toolkit.js
* ========
*/
(function(window, interact, jsPlumb, webAudioToolkit) {
  'use strict';

  window.WebAudioToolkit = WebAudioToolkit;

  function WebAudioToolkit(config) {
    config = config || {};

    var 
      toolkit = {
        initialized: false,
        nodeSpaceEnabled: false,
        nodeSpaceDiv: null,
        audioContext: null,
        initialize: initialize,
        addNodeSpaceDiv: addNodeSpaceDiv,
        utils: webAudioToolkit.utils
      };

    toolkit.initialize(config);

    return toolkit;


    function initialize(opts) {

      if(!toolkit.initialized) {
        try{
          toolkit.utils.setDebug(opts.debug || false);
          toolkit.audioContext = createAudioContext();
          if(opts.nodeSpaceDiv) {
            toolkit.addNodeSpaceDiv(opts.nodeSpaceDiv);
          }
          toolkit.initialized = true;
          toolkit.utils.log('Web Audio Toolkit Initialized!');
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
        interact('#' + element)
          .resizable(true)
          .on('resizemove', function(event) {
            var target = event.target;
            // add the change in coords to the previous width of the target element
            var
              newWidth  = parseFloat(target.offsetWidth) + event.dx,
              newHeight = parseFloat(target.offsetHeight) + event.dy;

            // update the element's style
            target.setAttribute('style','width:' + newWidth + 'px; height: '+ newHeight + 'px');
            //target.setAttribute('style','height:' + newHeight + 'px');
          });
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