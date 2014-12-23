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

    it('exists', function() {
      toolkit = new WebAudioToolkit();
      expect(toolkit).to.not.be.undefined;
    });

    it('initializes successfully', function() {
      toolkit = new WebAudioToolkit();
      toolkit.initialize();
      expect(toolkit.audioContext).to.not.be.undefined;
    });    

});