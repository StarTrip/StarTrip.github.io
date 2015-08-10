describe('Build Ships', function() {
  var buildNuclearShipButton = element(by.id('nuclear-ship'));
  var buildWarpShipButton = element(by.id('warp-ship'));

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

  //Clicks the build Nuclear Ship button numberOfClicks times
  function buildNuclearShip(numberOfClicks) {
    for (i=0; i<numberOfClicks; i++)
      buildNuclearShipButton.click();
  }
  //Clicks the build warp ship button numberOfClicks times
  function buildWarpShip(numberOfClicks) {
    for (i=0; i<numberOfClicks; i++)
      buildWarpShipButton.click();
  }

  function researchWarpDrive(){
    researchWarpDriveButton.click();
  }

  beforeEach(function() {
    browser.get('http://localhost:8000');
  });

  it('should mine 10 plutonium and build 1 nuclear-powered ship', function() {
    minePlutonium(10);
    buildNuclearShip(1);

    expect(element(by.binding('getNumberOfNuclearShips()')).getText()).
        toEqual('1');
  });

  it('should check the plutonium count after building 1 nuclear ship', function() {
    minePlutonium(10);
    buildNuclearShip(1);

    expect(element(by.id('plutonium-count')).getText()).
        toEqual('0.0');
  });

  it('should build 5 nuclear-powered ships', function() {
    minePlutonium(66);
    buildNuclearShip(5);

    expect(element(by.binding('getNumberOfNuclearShips()')).getText()).
        toEqual('5');
  });

  it('should build 1 nuclear-powered ship, then check the plutonium rate', function() {
    minePlutonium(10);
    buildNuclearShip(1);

    expect(element(by.binding('plutoniumRate')).getText()).
        toEqual('0.1');
  });

  it('should build 1 nuclear-powered ship, then check the knowledge rate', function() {
    minePlutonium(10);
    buildNuclearShip(1);

    expect(element(by.binding('knowledgeRate')).getText()).
        toEqual('0.1');
  });

  it('should check that research Warp Drive button is disabled if not enough knowledge', function() {
    minePlutonium(66);
    buildNuclearShip(5);

    expect(researchWarpDriveButton.isEnabled()).toBeFalsy();
  });

/* TODO: fix this test
  it('should check that research Warp Drive button is enabled if enough knowledge', function() {
    minePlutonium(66);
    buildNuclearShip(5);
    //expect(element(by.id('plutonium-count')).getText()).toEqual('1.0');
    browser.wait(element(by.id('knowledge-count')).getText() == '10.0', 60000);

    expect(researchWarpDriveButton.isEnabled()).toBeTruthy();
  });
*/

  it('should research Warp Drive', function() {
    minePlutonium(66);
    buildNuclearShip(5);

    browser.wait(researchWarpDriveButton.isEnabled, 60000);
    researchWarpDrive();

    expect(buildWarpShipButton.isDisplayed()).toBeTruthy();
  });

  it('should build a warp ship', function() {
    minePlutonium(66);
    buildNuclearShip(5);

    browser.wait(researchWarpDriveButton.isEnabled, 60000);
    researchWarpDrive();
    mineDilithium(10);
    buildWarpShip(1);

    expect(element(by.binding('getNumberOfWarpShips()')).getText()).
        toEqual('1');
  });
  it('should build a warp ship, then check the dilithium rate', function() {
    minePlutonium(66);
    buildNuclearShip(5);

    browser.wait(researchWarpDriveButton.isEnabled, 60000);
    researchWarpDrive();
    mineDilithium(10);
    buildWarpShip(1);

    expect(element(by.binding('dilithiumRate')).getText()).
        toEqual('0.1');
  });



});
