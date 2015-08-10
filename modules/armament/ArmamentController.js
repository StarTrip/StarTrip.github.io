StarTripApp.controller('ArmamentController', ['$scope', 'inventory', function($scope, inventory){

  //Weapons and shields
  $scope.weaponsLvl = 0;
  $scope.shieldsLvl = 0;

  $scope.weaponsPlutoniumCost = 100;
  $scope.weaponsKnowledgeCost = 20;
  $scope.shieldsPlutoniumCost = 100;
  $scope.shieldsKnowledgeCost = 20;

  $scope.getWeaponsPlutoniumCost = function(){
    return $scope.weaponsPlutoniumCost;
  };

  $scope.getWeaponsKnowledgeCost = function(){
    return $scope.weaponsKnowledgeCost;
  };

  $scope.getShieldsPlutoniumCost = function(){
    return $scope.shieldsPlutoniumCost;
  };

  $scope.getShieldsKnowledgeCost = function(){
    return $scope.shieldsKnowledgeCost;
  };

  $scope.upgradeWeapons = function() {
      inventory.deductFromResourceAmount('plutonium', $scope.weaponsPlutoniumCost);
      inventory.deductFromResourceAmount('knowledge', $scope.weaponshKnowledgeCost);
      $scope.weaponsLvl += 1;
      $scope.weaponsPlutoniumCost = Math.ceil($scope.weaponsPlutoniumCost * 1.1);
      $scope.weaponsKnowledgeCost = Math.ceil($scope.weaponsKnowledgeCost * 1.1);
  };

  $scope.upgradeShields = function() {
      inventory.deductFromResourceAmount('plutonium', $scope.shieldsPlutoniumCost);
      inventory.deductFromResourceAmount('knowledge', $scope.shieldsKnowledgeCost);
      $scope.shieldsLvl += 1;
      $scope.shieldsPlutoniumCost = Math.ceil($scope.shieldsPlutoniumCost * 1.1);
      $scope.shieldsKnowledgeCost = Math.ceil($scope.shieldsKnowledgeCost * 1.1);
  };

  $scope.upgradeWeaponsButtonDisabled = function(){
    return ($scope.weaponsPlutoniumCost > inventory.getResourceAmount('plutonium') || $scope.weaponsResearchKnowledgeCost > inventory.getResourceAmount('knowledge'));
  };

  $scope.upgradeShieldsButtonDisabled = function(){
    return ($scope.weaponsPlutoniumCost > inventory.getResourceAmount('plutonium') || $scope.weaponsResearchKnowledgeCost > inventory.getResourceAmount('knowledge'));
  };
}]);
