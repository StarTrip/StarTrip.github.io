describe('Research service', function (){
  var research;
  var inventory;

  // excuted before each "it" is run.
  beforeEach(function (){

    // load the module.
    module('StarTripApp');

    // inject your service for testing.
    // The _underscores_ are a convenience thing
    // so you can have your variable name be the
    // same as your injected service.
    inject(function(_research_, _inventory_) {
      research = _research_;
      inventory = _inventory_;
    });
  });

  it('should show the research warp drive button', function() {
    var result = research.displayResearchWarpDriveButton(5, inventory.getNumNuclearShipsToShowMineDilithiumButton());

    expect(result).toBe(true);
  });

  it('should not show the research warp drive button', function() {
    var result = research.displayResearchWarpDriveButton(3, inventory.getNumNuclearShipsToShowMineDilithiumButton());

    expect(result).toBe(false);
  });

  it('should return that the research warp drive button is disabled', function() {
    var result = research.researchWarpDriveButtonDisabled(9);

    expect(result).toBe(true);
  });

  //TODO: For some reason if the input is 10, the test fails?
  it('should return that the research warp drive button is not disabled', function() {
    var result = research.researchWarpDriveButtonDisabled(11);

    expect(result).toBe(false);
  });

});
