describe('Buy Ships', function() {
  var buyNuclearShipButton = element(by.id('nuclear-ship'));
  var buyWarpShipButton = element(by.id('warp-ship'));

  var minePlutoniumButton = element(by.id('mine-plutonium'));
  var mineDilithiumButton = element(by.id('mine-dilithium'));

  //Clicks the Mine plutonium button numberOfClicks times
  function minePlutonium(numberOfClicks) {
    for (i=0; i<numberOfClicks; i++)
      minePlutoniumButton.click();
  }
  //Clicks the Mine Dilithium button numberOfClicks times
  function mineDilithium(numberOfClicks) {
    for (i=0; i<numberOfClicks; i++)
      mineDilithiumButton.click();
  }

  //Clicks the buy Nuclear Ship button numberOfClicks times
  function buyNuclearShip(numberOfClicks) {
    for (i=0; i<numberOfClicks; i++)
      buyNuclearShipButton.click();
  }

  //Clicks the buy warp ship button numberOfClicks times
  function buyWarpShip(numberOfClicks) {
    for (i=0; i<numberOfClicks; i++)
      buyWarpShipButton.click();
  }

  beforeEach(function() {
    browser.get('http://localhost:8000');
  });

  it('should mine 10 plutonium and buy 1 nuclear-powered ship', function() {
    minePlutonium(10);
    buyNuclearShip(1);

    expect(element(by.binding('numNuclearShips')).getText()).
        toEqual('1');
  });

  it('should mine 66 plutonium and buy 5 nuclear-powered ship', function() {
    minePlutonium(66);
    buyNuclearShip(5);

    expect(element(by.binding('numNuclearShips')).getText()).
        toEqual('5');
  });

  //Resource Rates
  it('should check the plutonium rate when the site first loads', function() {
    expect(element(by.binding('plutoniumRate')).getText()).
        toEqual('0.0');
  });

/*
  it('should check the dilithium rate when the site first loads', function() {
    expect(element(by.binding('dilithiumRate')).getText()).
        toEqual('0.0');
  });

  it('should check the knowledge rate when the site first loads', function() {
    expect(element(by.binding('knowledgeRate')).getText()).
        toEqual('0.0');
  });
*/

  it('should mine 10 plutonium, buy 1 nuclear-powered ship, then check the plutonium rate', function() {
    minePlutonium(10);
    buyNuclearShip(1);

    expect(element(by.binding('plutoniumRate')).getText()).
        toEqual('0.1');
  });

/*
  it('should mine 10 plutonium, buy 1 nuclear-powered ship, then check the dilithium rate', function() {
    minePlutonium(10);
    buyNuclearShip(1);

    expect(element(by.binding('dilithiumRate')).getText()).
        toEqual('0.0');
  });
*/

  it('should mine 10 plutonium, buy 1 nuclear-powered ship, then check the knowledge rate', function() {
    minePlutonium(10);
    buyNuclearShip(1);

    expect(element(by.binding('knowledgeRate')).getText()).
        toEqual('0.1');
  });

  //Check items that are displayed/not displayed
  it('should check if the dilithium count is displayed when the site loads', function() {
    expect(element(by.id('dilithium-count')).isDisplayed()).toBeFalsy();
  });
  it('should check if the knowledge count is displayed when the site loads', function() {
    expect(element(by.id('knowledge-count')).isDisplayed()).toBeFalsy();
  });
  it('should check if the Mine Dilithium button is displayed when the site loads', function() {
    expect(element(by.id('mine-dilithium')).isDisplayed()).toBeFalsy();
  });
  it('should check if the knowledge count is displayed when a nuclear ship is bought', function() {
    minePlutonium(10);
    buyNuclearShip(1);
    expect(element(by.id('knowledge-count')).isDisplayed()).toBeTruthy();
  });

});
