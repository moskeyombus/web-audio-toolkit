(function(window, webAudioToolkit, utils, ToolkitNode) {

  var
    inputNode;

  function InputNode() { 
    ToolkitNode.call(this);
  }

  InputNode.prototype = new ToolkitNode();

  inputNode = webAudioToolkit.InputNode = InputNode;
  if (window.webAudioToolkit) {
    window.webAudioToolkit.InputNode = inputNode;
  }

})(window, webAudioToolkit, webAudioToolkit.utils, webAudioToolkit.ToolkitNode);