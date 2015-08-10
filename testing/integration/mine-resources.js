describe('Mine Resources', function() {
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

  beforeEach(function() {
    browser.get('http://localhost:8000');
  });

  it('should click the Mine plutonium button and add 1 plutonium to our resources', function() {
    minePlutonium(1);

    expect(element(by.id('plutonium-count')).getText()).
        toEqual('1.0');
  });

  it('should click the Mine plutonium button 10 times, and add 10 plutonium to our resources', function() {
    minePlutonium(10);

    expect(element(by.id('plutonium-count')).getText()).
        toEqual('10.0');
  });
});
