StarTripApp.controller('ResearchController', ['$scope', 'research', 'fleet', 'inventory', function($scope, research, fleet, inventory){
  $scope.displayResearchWarpDriveButton = function(){
    return research.displayResearchWarpDriveButton(fleet.getNumberOfShips('nuclear'));
  };

  $scope.researchWarpDriveButtonDisabled = function(){
    return research.researchWarpDriveButtonDisabled(inventory.getResourceAmount('knowledge'));
  };

  $scope.getWarpDriveResearchCost = function(){
    return research.getWarpDriveResearchCost();
  };

  //research warp drive in order to build warp ships
  $scope.researchWarpDrive = function() {
    var warpDriveResearchCost = research.getWarpDriveResearchCost();
    inventory.deductFromResourceAmount('knowledge', warpDriveResearchCost);
    research.researchWarpDrive();
  };

}]);
