describe('Research service', function (){
  var research;

  // excuted before each "it" is run.
  beforeEach(function (){

    // load the module.
    module('StarTripApp');

    // inject your service for testing.
    // The _underscores_ are a convenience thing
    // so you can have your variable name be the
    // same as your injected service.
    inject(function(_research_) {
      research = _research_;
    });
  });

  it('should show the research warp drive button', function() {
    var resourceCount = inventory.getResourceAmount('plutonium');

    expect(resourceCount).
        toEqual(0);
  });

});
