StarTripApp.controller('FleetController', ['$scope', 'fleet', 'inventory', function($scope, fleet, inventory){

  //ships
  $scope.getNumberOfNuclearShips = function(){
      return fleet.getNumberOfShips('nuclear');
  };

  $scope.getNumberOfWarpShips = function(){
      return fleet.getNumberOfShips('warp');
  };

  $scope.buildNuclearShip = function() {
      fleet.addToNumberOfShips('nuclear', 1);
      // Deduct cost
      inventory.deductFromResourceAmount('plutonium', fleet.getShipCost('nuclear'));
      // Increase cost for the next one
      fleet.increaseShipCost('nuclear', 1.1);
  };

  $scope.buildWarpShip = function() {
      fleet.addToNumberOfShips('warp', 1);
      // Deduct cost
      inventory.deductFromResourceAmount('dilithium', fleet.getShipCost('warp'));
      // Increase cost for the next one
      fleet.increaseShipCost('warp', 1.1);
  };

  $scope.getNuclearShipCost = function(){
      return fleet.getShipCost('nuclear');
  };

  $scope.getWarpShipCost = function(){
      return fleet.getShipCost('warp');
  };

  $scope.buildNuclearShipButtonDisabled = function(){
    return $scope.getNuclearShipCost() > inventory.getResourceAmount('plutonium');
  };

  $scope.buildWarpShipButtonDisabled = function(){
    return $scope.getWarpShipCost() > inventory.getResourceAmount('dilithium');
  };

}]);
