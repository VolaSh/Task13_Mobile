describe('basic test', () => {
  
  it('should open Homepage', async () => {
    await browser.get('https://www.eurosport.com/');
    let title = await browser.getTitle();

    expect(title).toEqual('Sport news, live streaming & results - Eurosport');
  });

  it('should click on the "SUBSCRIBE NOW" button', function () {
    element(by.xpath('//a[text()="Subscribe now"]')).click();
    browser.sleep(10000);
    const expectedUrl = 'https://auth.eurosport.com/product?int_campaign=WW-EU-E1-EU-C7-EU-BAU-DR-W-AllSports-Undefined-210101-NA&int_content=home-top-banner-subscribe';
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.urlIs(expectedUrl), 5000);

    expect(browser.getCurrentUrl()).toEqual(expectedUrl);       
  });

    it('should enter a value to the search field', function () {
      browser.get('https://www.eurosport.com/');
      const searchField = element(by.css('a[data-testid="nav-link-search"]'));
      searchField.click();
      element(by.css('input[id="search-input"]')).sendKeys("Olympics", protractor.Key.CONTROL);
      browser.sleep(1000);
    });

})