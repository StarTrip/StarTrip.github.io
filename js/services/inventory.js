StarTripApp.service('inventory', function(){
  //raw resources
  //var resources = {plutonium:0,dilithium:0,knowledge:0};
  var plutonium = 0;
  var dilithium = 0;
  var knowledge = 0;

  this.getPlutonium = function(){
    return plutonium;
  };

  //adds the "amount" to the plutonium (amount can be negative)
  this.addPlutonium = function(amount){
    plutonium += amount;
    //resources.plutonium += amount;
  };

  this.getDilithium = function(){
    return dilithium;
  };

  //adds the "amount" to the dilithium (amount can be negative)
  this.addDilithium = function(amount){
    dilithium += amount;
  };

  this.getKnowledge = function(){
    return knowledge;
  };

  //adds the "amount" to the knowledge (amount can be negative)
  this.addKnowledge = function(amount){
    knowledge += amount;
  };


});
