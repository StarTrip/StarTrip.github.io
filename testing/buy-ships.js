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

});
