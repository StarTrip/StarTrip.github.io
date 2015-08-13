StarTripApp.service('inventory', function(){
  var resources = {plutonium:0,dilithium:0,knowledge:0};
  //How much plutonium is added per click
  var plutoniumPerClick = 1;
  //How much dilithium is added per click
  var dilithiumPerClick = 1;

  var NUM_NUCLEAR_SHIPS_TO_SHOW_MINE_DILITHIUM_BUTTON = 5;

  //Returns the number of resources of type resourceName (e.g. plutonium, dilithium, etc)
  this.getResourceAmount = function(resourceName){
    return resources[resourceName];
  };

  //Adds amount to the resource resourceName
  this.addToResourceAmount = function(resourceName, amount){
    resources[resourceName] += amount;
  };

  //Deducts amount from the resource resourceName
  this.deductFromResourceAmount = function(resourceName, amount){
    resources[resourceName] -= amount;
  };

  this.getPlutoniumPerClick = function(){
    return plutoniumPerClick;
  };

  this.getDilithiumPerClick = function(){
    return dilithiumPerClick;
  };

  this.displayMineDilithiumButton = function(numNuclearShips){
    return numNuclearShips >= NUM_NUCLEAR_SHIPS_TO_SHOW_MINE_DILITHIUM_BUTTON;
  };

});
