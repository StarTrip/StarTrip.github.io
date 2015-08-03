StarTripApp.controller('IncrementalCtrl', ['$scope', '$interval', 'inventory', function($scope, $interval, inventory){
  // Basic variable declaration - keep track of how many of each
  // item we currently own, and how much the new ones should cost.

  //How much plutonium is added per click
  $scope.plutoniumPerClick = 1;
  //How much dilithium is added per click
  $scope.dilithiumPerClick = 1;

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
  $scope.shieldsResearchPlutoniumCost = 100;
  $scope.shieldsResearchKnowledgeCost = 20;
  //Tech track
  $scope.warpDriveResearched = false;

  $scope.getPlutonium = function() {
      return inventory.getResourceAmount('plutonium');
  }
  $scope.getDilithium = function() {
      return inventory.getResourceAmount('dilithium');
  }
  $scope.getKnowledge = function() {
      return inventory.getResourceAmount('knowledge');
  }

  // Increase plutonium every time mine-plutonium is clicked
  $scope.minePlutonium = function() {
      inventory.addToResourceAmount('plutonium', $scope.plutoniumPerClick);
  }
  // Increase dilithium every time mine-dilithium is clicked
  $scope.mineDilithium = function() {
      inventory.addToResourceAmount('dilithium', $scope.dilithiumPerClick);
  }

  $scope.buildNuclearShip = function() {
      $scope.numNuclearShips++;

      // Deduct cost
      inventory.deductFromResourceAmount('plutonium', $scope.nuclearShipCost);

      // Increase cost for the next one, using Math.ceil() to round up
      $scope.nuclearShipCost = Math.ceil($scope.nuclearShipCost * 1.1);
  }
  //build a warp ship
  $scope.buildWarpShip = function() {
      $scope.numWarpShips++;

      // Deduct cost
      inventory.deductFromResourceAmount('dilithium', $scope.warpShipCost);

      // Increase cost for the next one, using Math.ceil() to round up
      $scope.warpShipCost = Math.ceil($scope.warpShipCost * 1.1);
  }

  //research warp drive in order to build warp ships
  $scope.researchWarpDrive = function() {
      inventory.deductFromResourceAmount('knowledge', $scope.warpDriveResearchCost);
      $scope.warpDriveResearched = true;
  }

  $scope.researchWeapons = function() {
      inventory.deductFromResourceAmount('plutonium', $scope.weaponsResearchPlutoniumCost);
      inventory.deductFromResourceAmount('knowledge', $scope.weaponsResearchKnowledgeCost);
      $scope.weaponsLvl += 1;
      $scope.weaponsResearchPlutoniumCost = Math.ceil($scope.weaponsResearchPlutoniumCost * 1.1);
      $scope.weaponsResearchKnowledgeCost = Math.ceil($scope.weaponsResearchKnowledgeCost * 1.1);
  }

  $scope.researchShields = function() {
      inventory.deductFromResourceAmount('plutonium', $scope.shieldsResearchPlutoniumCost);
      inventory.deductFromResourceAmount('knowledge', $scope.shieldsResearchKnowledgeCost);
      $scope.shieldsLvl += 1;
      $scope.shieldsResearchPlutoniumCost = Math.ceil($scope.shieldsResearchPlutoniumCost * 1.1);
      $scope.shieldsResearchKnowledgeCost = Math.ceil($scope.shieldsResearchKnowledgeCost * 1.1);
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
      inventory.addToResourceAmount('plutonium', $scope.plutoniumRate/100);
      inventory.addToResourceAmount('dilithium', $scope.dilithiumRate/100);
      inventory.addToResourceAmount('knowledge', $scope.knowledgeRate/100);

  }, 10);
}]);
