(function(window, webAudioToolkit, utils, InputNode) {

  var
    toggleNode;

  function ToggleNode(label, id) { 
    InputNode.call(this);
    this.toggle = false;
    this.label = label || 'Toggle Node';
    this.id = id || 'toggle-node';
  }

  ToggleNode.prototype = new InputNode();

  ToggleNode.prototype.toggle = function() { 
    this.toggle = !this.toggle;
    return this.toggle;
  };

  ToggleNode.prototype.setOn = function() { 
    this.toggle = true;
    return this.toggle;
  };

  ToggleNode.prototype.setOff = function() { 
    this.toggle = false;
    return this.toggle;
  };

  ToggleNode.prototype.render = function(nodeSpace) { 
    var 
      compiledTemplate = webAudioToolkit.templates.inputToggleNode,
      htmlString, div;

    htmlString = compiledTemplate({ nodeId: this.id, label: this.label });  
    div = document.createElement('div');
    div.innerHTML = htmlString;
    nodeSpace.appendChild(div.firstChild);
  };

  toggleNode = webAudioToolkit.ToggleNode = ToggleNode;
  if (window.webAudioToolkit) {
    window.webAudioToolkit.ToggleNode = toggleNode;
  }

})(window, webAudioToolkit, webAudioToolkit.utils, webAudioToolkit.InputNode);