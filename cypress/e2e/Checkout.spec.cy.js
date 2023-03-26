describe('Users can search then add items into the checkout basket', () => {

  //Store the amount of Browsers we want to be in the forEach loop.
  const browserList = [
    { browserName: 'chrome', version: 'latest' },
    // { browserName: 'firefox', version: 'latest' },
    // { browserName: 'edge', version: 'latest' },
    // { browserName: 'safari', version: 'latest' }
  ];

  //Store the amount of devices we want to be in the forEach loop.
  const devices = [
    'macbook-15',
    // 'ipad-2',
    // 'iphone-x',
    // 'samsung-s10'
  ];
  devices.forEach(device => {
    context(`Device: ${device} `, () => {
      browserList.forEach(({ browserName, version }) => {
        context(`Browser: ${browserName} - Version: ${version}`, () => {
          before(() => {
            // Set up the browser configuration
            Cypress.config('browser', { name: browserName, version: version });
            // Set up the viewport size for the browser
          });
          it('I can search for a product and add to checkout', () => {
            // Calling custom function from cypress "commands.js" to search for products
            cy.searchAndValidateProduct()

          });
        });
      });
    });
  });
});