(function(window, webAudioToolkit, utils) {

  var
    toolkitNode;

  function ToolkitNode() { 
    this.create();
  }

  ToolkitNode.prototype.create = function() { 
 
  };

  ToolkitNode.prototype.destroy = function() { 
 
  };

  ToolkitNode.prototype.render = function() { 
 
  };

  ToolkitNode.prototype.connect = function(destination) { 
 
  };

  toolkitNode = webAudioToolkit.ToolkitNode = ToolkitNode;
  if (window.webAudioToolkit) {
    window.webAudioToolkit.ToolkitNode = toolkitNode;
  }

})(window, webAudioToolkit, webAudioToolkit.utils);