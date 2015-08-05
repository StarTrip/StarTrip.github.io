StarTripApp.controller('IncrementalCtrl', ['$scope', '$interval', 'inventory', 'fleet', function($scope, $interval, inventory, fleet){
  // Basic variable declaration - keep track of how many of each
  // item we currently own, and how much the new ones should cost.

  //How much plutonium is added per click
  $scope.plutoniumPerClick = 1;
  //How much dilithium is added per click
  $scope.dilithiumPerClick = 1;

  // Resource acquisition rates
  $scope.plutoniumRate = 0;
  $scope.dilithiumRate = 0;
  $scope.knowledgeRate = 0;

  //research costs
  $scope.warpDriveResearchCost = 10;

  //Tech track
  $scope.warpDriveResearched = false;

  $scope.displayResearchWarpDriveButton = function(){
    return (fleet.getNumberOfShips('nuclear') >= 5 && !$scope.warpDriveResearched);
  };

  //research warp drive in order to build warp ships
  $scope.researchWarpDrive = function() {
      inventory.deductFromResourceAmount('knowledge', $scope.warpDriveResearchCost);
      $scope.warpDriveResearched = true;
  };

  //Update rate of resource acquisition
  $scope.updateAcquisitionRates = function() {
      //nuclear ships add 0.1 plutonium/s, warp ships add 0.5 plutonium/s
      $scope.plutoniumRate = ($scope.numNuclearShips * 1/10 + $scope.numWarpShips * 5/10);
      //warp ships add 0.1 dilithium/s
      $scope.dilithiumRate = ($scope.numWarpShips * 1/10);
      // nuclear ships add 0.1 knowledge per second, warp ships add 0.2 knowledge per second
      $scope.knowledgeRate = ($scope.numNuclearShips * 1 / 10 + $scope.numWarpShips * 2/10);
  };

  // Run UI update code every 10ms
  $interval(function() {
      $scope.updateAcquisitionRates();
      inventory.addToResourceAmount('plutonium', $scope.plutoniumRate/100);
      inventory.addToResourceAmount('dilithium', $scope.dilithiumRate/100);
      inventory.addToResourceAmount('knowledge', $scope.knowledgeRate/100);

  }, 10);
}]);
