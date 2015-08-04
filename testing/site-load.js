describe('On Site Load', function() {

  var buyNuclearShipButton = element(by.id('nuclear-ship'));
  var buyWarpShipButton = element(by.id('warp-ship'));

  var minePlutoniumButton = element(by.id('mine-plutonium'));
  var mineDilithiumButton = element(by.id('mine-dilithium'));

  var researchWarpDriveButton = element(by.id('warp-drive'));

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

  //Check items that are displayed/not displayed
  it('should check that the plutonium count is displayed when the site loads', function() {
    expect(element(by.id('plutonium-count')).isDisplayed()).toBeTruthy();
  });
  it('should check that the dilithium count is not displayed when the site loads', function() {
    expect(element(by.id('dilithium-count')).isDisplayed()).toBeFalsy();
  });
  it('should check that the knowledge count is not displayed when the site loads', function() {
    expect(element(by.id('knowledge-count')).isDisplayed()).toBeFalsy();
  });
  it('should check that the Mine Dilithium button is not displayed when the site loads', function() {
    expect(mineDilithiumButton.isDisplayed()).toBeFalsy();
  });
  it('should check that the reseach warp drive button is not displayed when the site loads', function() {
    expect(researchWarpDriveButton.isDisplayed()).toBeFalsy();
  });
  it('should check that the build nuclear ship button is displayed when the site loads', function() {
    expect(element(by.id('nuclear-ship')).isDisplayed()).toBeTruthy();
  });
  it('should check that the build warp ship button is not displayed when the site loads', function() {
    expect(element(by.id('warp-ship')).isDisplayed()).toBeFalsy();
  });
  it('should check that the knowledge count is displayed when a nuclear ship is bought', function() {
    minePlutonium(10);
    buyNuclearShip(1);
    expect(element(by.id('knowledge-count')).isDisplayed()).toBeTruthy();
  });
  it('should mine 66 plutonium, buy 5 nuclear ships, then check that the research warp drive button is displayed', function() {
    minePlutonium(66);
    buyNuclearShip(5);

    expect(researchWarpDriveButton.isDisplayed()).toBeTruthy();
  });

  //Check buttons that are enabled/disabled
  it('should check that the mine plutonium button is enabled when the site loads', function() {
    expect(minePlutoniumButton.isEnabled()).toBeTruthy();
  });
  it('should check that the build nuclear ship button is disabled when the site loads', function() {
    expect(element(by.id('nuclear-ship')).isEnabled()).toBeFalsy();
  });
  it('should check that the research weapons button is disabled when the site loads', function() {
    expect(element(by.id('weapons')).isEnabled()).toBeFalsy();
  });
  it('should check that the research shields button is disabled when the site loads', function() {
    expect(element(by.id('shields')).isEnabled()).toBeFalsy();
  });
  it('should mine 10 plutonium, then check that the build nuclear ship button is enabled', function() {
    minePlutonium(10);
    expect(element(by.id('nuclear-ship')).isEnabled()).toBeTruthy();
  });


  //Resource Rates
  it('should check the plutonium rate when the site first loads', function() {
    expect(element(by.binding('plutoniumRate')).getText()).
        toEqual('0.0');
  });
});
