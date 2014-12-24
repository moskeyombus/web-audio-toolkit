var expect = chai.expect;

describe('WebAudioToolkit', function() {
    'use strict';
    var toolkit;

    before(function() {
      //
    });

    after(function() {
        //jQuery('#fixture').remove();
    });

    it('initializes successfully - no params', function() {
      toolkit = new WebAudioToolkit();
      expect(toolkit).to.not.be.undefined;
      expect(toolkit.audioContext).to.not.be.undefined;
      expect(toolkit.initialized).to.be.true;
      expect(toolkit.nodeSpaceEnabled).to.be.false;
    });    

    it('initializes successfully - params', function() {
      toolkit = new WebAudioToolkit({
        nodeSpaceDiv: 'node-space'
      });
      expect(toolkit).to.not.be.undefined;
      expect(toolkit.audioContext).to.not.be.undefined;
      expect(toolkit.initialized).to.be.true;
      expect(toolkit.nodeSpaceEnabled).to.be.true;
      expect(toolkit.nodeSpaceDiv).to.equal('node-space');
      
    });   

    it('creates resizeable nodespace', function() {
      var 
        toolkit = new WebAudioToolkit(),
        element = 'node-space',
        nodeSpace;

      toolkit.addNodeSpaceDiv(element);
      nodeSpace = document.getElementById(element);

    });

});