StarTripApp.service('fleet', function(){
  var ships = {nuclear:0,warp:0};
  var shipCosts = {nuclear:10,warp:10};

  //Returns number of ships of type shipType
  this.getNumberOfShips = function(shipType){
    return ships[shipType];
  };

  //Adds amount ships of type shipType (e.g. nuclear, warp, etc)
  this.addToNumberOfShips = function(shipType, amount){
    ships[shipType] += amount;
  };

  //Returns the cost of the given shipType
  this.getShipCost = function(shipType){
    return shipCosts[shipType];
  };

  //Increase the cost of a given ship type by the multiplier
  this.increaseShipCost = function(shipType, multiplier){
    shipCosts[shipType] = Math.ceil(shipCosts[shipType] * multiplier);
  };

});
