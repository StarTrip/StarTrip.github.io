describe('Inventory service', function (){
  var inventory;

  // excuted before each "it" is run.
  beforeEach(function (){

    // load the module.
    module('StarTripApp');

    // inject your service for testing.
    // The _underscores_ are a convenience thing
    // so you can have your variable name be the
    // same as your injected service.
    inject(function(_inventory_) {
      inventory = _inventory_;
    });
  });

  it('should return a plutonium count of 0', function() {
    var resourceCount = inventory.getResourceAmount('plutonium');

    expect(resourceCount).
        toEqual(0);
  });

  it('should return a dilithium count of 0', function() {
    var resourceCount = inventory.getResourceAmount('dilithium');

    expect(resourceCount).
        toEqual(0);
  });

  it('should return a knowledge count of 0', function() {
    var resourceCount = inventory.getResourceAmount('knowledge');

    expect(resourceCount).
        toEqual(0);
  });

  it('should add 2 plutonium', function() {
    inventory.addToResourceAmount('plutonium', 2);
    var resourceCount = inventory.getResourceAmount('plutonium');

    expect(resourceCount).
        toEqual(2);
  });

  it('should add 2 dilithium', function() {
    inventory.addToResourceAmount('dilithium', 2);
    var resourceCount = inventory.getResourceAmount('dilithium');

    expect(resourceCount).
        toEqual(2);
  });

  it('should add 2 knowledge', function() {
    inventory.addToResourceAmount('knowledge', 2);
    var resourceCount = inventory.getResourceAmount('knowledge');

    expect(resourceCount).
        toEqual(2);
  });

  it('should deduct 20 plutonium', function() {
    inventory.deductFromResourceAmount('plutonium', 20);
    var resourceCount = inventory.getResourceAmount('plutonium');

    expect(resourceCount).
        toEqual(-20);
  });

  it('should deduct 20 dilithium', function() {
    inventory.deductFromResourceAmount('dilithium', 20);
    var resourceCount = inventory.getResourceAmount('dilithium');

    expect(resourceCount).
        toEqual(-20);
  });

  it('should deduct 20 knowledge', function() {
    inventory.deductFromResourceAmount('knowledge', 20);
    var resourceCount = inventory.getResourceAmount('knowledge');

    expect(resourceCount).
        toEqual(-20);
  });

  it('should return a plutonium per click rate of 1', function() {
    var clickRate = inventory.getPlutoniumPerClick();

    expect(clickRate).
        toEqual(1);
  });

  it('should return a dilithium per click rate of 1', function() {
    var clickRate = inventory.getDilithiumPerClick();

    expect(clickRate).
        toEqual(1);
  });

  it('should show the mine dilithium button', function() {
    var result = inventory.displayMineDilithiumButton(5);

    expect(result).
        toBe(true);
  });

  it('should not show the mine dilithium button', function() {
    var result = inventory.displayMineDilithiumButton(4);

    expect(result).
        toBe(false);
  });
});
