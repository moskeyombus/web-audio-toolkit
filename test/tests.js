var expect = chai.expect;

describe('WebAudioToolkit', function() {
    'use strict';
    var toolkit;

    before(function() {
        toolkit = new WebAudioToolkit();
    });

    after(function() {
        //jQuery('#fixture').remove();
    });

    it('exists', function() {
        expect(toolkit).to.not.be.undefined;
    });

});