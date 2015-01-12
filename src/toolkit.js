/** 
* ========
* Web Audio Toolkit - toolkit.js
* ========
*/
(function(window, webAudioToolkit, utils, ToolkitNode, ToggleNode, interact, jsPlumb, Handlebars) {
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
        addInputNode: addInputNode,
        nodeList: []
      };

    toolkit.initialize(config);

    return toolkit;


    function initialize(opts) {
      if(!toolkit.initialized) {
        try{
          utils.setDebug(opts.debug || false);
          toolkit.audioContext = createAudioContext();
          if(opts.nodeSpaceDiv) {
            toolkit.addNodeSpaceDiv(opts.nodeSpaceDiv);
          }
          toolkit.initialized = true;
          utils.log('Web Audio Toolkit Initialized!');
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
            var 
              target = event.target,
              newWidth  = parseFloat(target.offsetWidth) + event.dx,
              newHeight = parseFloat(target.offsetHeight) + event.dy;

            target.setAttribute('style','width:' + newWidth + 'px; height: '+ newHeight + 'px');
          });

        toolkit.nodeSpace = nodeSpace;
        toolkit.nodeSpaceDiv = element;
        toolkit.nodeSpaceEnabled = true;
        enableDragging();
      }
      catch(e){
        alert(e.name + "\n" + e.message);
      } 
    }

    function enableDragging() {
      interact('.input-node')
        .draggable({
          inertia: true,
          restrict: {
            restriction: toolkit.nodeSpace,
            endOnly: true,
            elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
          },

          // call this function on every dragmove event
          onmove: function (event) {
            var target = event.target,
                // keep the dragged position in the data-x/data-y attributes
                x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
                y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

            // translate the element
            target.style.webkitTransform =
            target.style.transform =
              'translate(' + x + 'px, ' + y + 'px)';

            // update the posiion attributes
            target.setAttribute('data-x', x);
            target.setAttribute('data-y', y);
          },
          // call this function on every dragend event
          onend: function (event) {

          }
        });          
    }

    function addInputNode(type, id, label) {
      var node;
      if(type === 'toggle') {
        node = new ToggleNode(label, id);
        toolkit.nodeList.push(node);
      }      
      if(toolkit.nodeSpaceEnabled) {
        node.render(toolkit.nodeSpace);
      }
      else {

      }
    }

  }

})(window, webAudioToolkit, webAudioToolkit.utils, webAudioToolkit.ToolkitNode, webAudioToolkit.ToggleNode, interact, jsPlumb, Handlebars);