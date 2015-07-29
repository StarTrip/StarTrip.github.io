StarTripApp.controller('IncrementalCtrl', ['$scope', '$interval', function($scope, $interval){
  // Basic variable declaration - keep track of how many of each
  // item we currently own, and how much the new ones should cost.

  //raw resources
  $scope.plutonium = 0;
  $scope.knowledge = 0;
  $scope.dilithium = 0;

  //things to build
  $scope.numNuclearShips = 0;
  $scope.numWarpShips = 0;
  $scope.numMasterWidgeteers = 0;

  //stuff costs
  $scope.nuclearShipCost = 10;
  $scope.warpShipCost = 10;

  //research costs
  $scope.warpDriveCost = 10;

  $scope.masterWidgeteerCost = 15;

  // Resource acquisition rates
  $scope.plutoniumRate = 0;
  $scope.dilithiumRate = 0;
  $scope.knowledgeRate = 0;

  //Tech track
  $scope.warpDriveResearched = false;

  // Increase plutonium every time mine-plutonium is clicked
  $scope.minePlutonium = function() {
      $scope.plutonium++;
  }

  // Increase dilithium every time mine-dilithium is clicked
  $scope.mineDilithium = function() {
      $scope.dilithium++;
  }

  $scope.buildNuclearShip = function() {
      $scope.numNuclearShips++;

      // Deduct cost
      $scope.plutonium -= $scope.nuclearShipCost;

      // Increase cost for the next one, using Math.ceil() to round up
      $scope.nuclearShipCost = Math.ceil($scope.nuclearShipCost * 1.1);
  }

  $scope.buildWarpShip = function() {
      $scope.numWarpShips++;

      // Deduct cost
      $scope.dilithium -= $scope.warpShipCost;

      // Increase cost for the next one, using Math.ceil() to round up
      $scope.warpShipCost = Math.ceil($scope.warpShipCost * 1.1);
  }

  // Ditto for master-widgeteer... you get the idea
  $scope.hireMasterWidgeteer = function() {
      $scope.numMasterWidgeteers++;
      $scope.distance -= $scope.masterWidgeteerCost;
      $scope.masterWidgeteerCost = Math.ceil($scope.masterWidgeteerCost * 1.1);
  }

  $scope.researchWarpDrive = function() {
      $scope.knowledge -= $scope.warpDriveCost;
      $scope.warpDriveResearched = true;
  }

  // Run UI update code every 10ms
  $interval(function() {
      // nuclear ships add 1 plutonium per second (1/100 every 10ms)
      // Warp ships add 5 plutonium per second and 1 dilithium/s (5/100 every 10ms)
      $scope.plutoniumRate = ($scope.numNuclearShips + $scope.numWarpShips * 5);
      $scope.dilithiumRate = ($scope.numWarpShips);
      // nuclear ships add 0.1 knowledge per second, warp ships add 0.2 knowledge per second
      $scope.knowledgeRate = ($scope.numNuclearShips * 1 / 10 + $scope.numWarpShips * 2);

      $scope.knowledge += ($scope.numNuclearShips * 1 / 1000 + $scope.numWarpShips * 2/100);
      $scope.plutonium += ($scope.numNuclearShips * 1 / 100 + $scope.numWarpShips * 5 / 100);
      $scope.dilithium += ($scope.numWarpShips * 1/100);

  }, 10);
}]);
