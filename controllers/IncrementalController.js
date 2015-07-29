StarTripApp.controller('IncrementalCtrl', ['$scope', '$interval', function($scope, $interval){
  // Basic variable declaration - keep track of how many of each
  // item we currently own, and how much the new ones should cost.

  //raw resources
  $scope.plutonium = 0;
  $scope.dilithium = 0;
  $scope.knowledge = 0;

  //ships to build
  $scope.numNuclearShips = 0;
  $scope.numWarpShips = 0;
  //ship costs
  $scope.nuclearShipCost = 10;
  $scope.warpShipCost = 10;

  //Weapons and shields
  $scope.weaponsLvl = 0;
  $scope.shieldsLvl = 0;

  // Resource acquisition rates
  $scope.plutoniumRate = 0;
  $scope.dilithiumRate = 0;
  $scope.knowledgeRate = 0;

  //research costs
  $scope.warpDriveResearchCost = 10;
  $scope.weaponsResearchPlutoniumCost = 100;
  $scope.weaponsResearchKnowledgeCost = 20;
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

  //research warp drive in order to build warp ships
  $scope.researchWarpDrive = function() {
      $scope.knowledge -= $scope.warpDriveResearchCost;
      $scope.warpDriveResearched = true;
  }

  $scope.researchWeapons = function() {
      $scope.plutonium -= $scope.weaponsResearchPlutoniumCost;
      $scope.knowledge -= $scope.weaponsResearchKnowledgeCost;
      $scope.weaponsLvl += 1;
      $scope.weaponsResearchCost = Math.ceil($scope.weaponsResearchCost * 1.1);
  }

  //build a warp ship
  $scope.buildWarpShip = function() {
      $scope.numWarpShips++;

      // Deduct cost
      $scope.dilithium -= $scope.warpShipCost;

      // Increase cost for the next one, using Math.ceil() to round up
      $scope.warpShipCost = Math.ceil($scope.warpShipCost * 1.1);
  }

  //Update rate of resource acquisition
  $scope.updateAcquisitionRates = function() {
      //nuclear ships add 0.1 plutonium/s, warp ships add 0.5 plutonium/s
      $scope.plutoniumRate = ($scope.numNuclearShips * 1/10 + $scope.numWarpShips * 5/10);
      //warp ships add 0.1 dilithium/s
      $scope.dilithiumRate = ($scope.numWarpShips * 1/10);
      // nuclear ships add 0.1 knowledge per second, warp ships add 0.2 knowledge per second
      $scope.knowledgeRate = ($scope.numNuclearShips * 1 / 10 + $scope.numWarpShips * 2/10);
  }

  // Run UI update code every 10ms
  $interval(function() {
      $scope.updateAcquisitionRates();
      $scope.plutonium += ($scope.plutoniumRate/100);
      $scope.dilithium += ($scope.dilithiumRate/100);
      $scope.knowledge += ($scope.knowledgeRate/100);

  }, 10);
}]);
