StarTripApp.service('research', function(){

  var warpDriveResearched = false;
  //research costs
  var warpDriveResearchCost = 10;

  this.displayResearchWarpDriveButton = function(numNuclearShips){
    return (numNuclearShips >= 5 && !warpDriveResearched);
  };


  this.researchWarpDriveButtonDisabled = function(knowledgeCount){
    return (warpDriveResearchCost >= knowledgeCount);
  };

});
