StarTripApp.controller('ResearchController', ['$scope', 'research', 'fleet', 'inventory', function($scope, research, fleet, inventory){
  $scope.displayResearchWarpDriveButton = function(){
    return research.displayResearchWarpDriveButton(fleet.getNumberOfShips('nuclear'));
  };

  $scope.researchWarpDriveButtonDisabled = function(){
    return research.researchWarpDriveButtonDisabled(inventory.getResourceAmount('knowledge'));
  };

}]);
