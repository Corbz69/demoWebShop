describe('A new user can Register', () => {

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

          beforeEach("Visit DemoWebApp home page", () => {
            cy.visitDemoWebApp();
          });
          it('I can register a new account', () => {
            // Calling custom function from cypress "commands.js"
            cy.registerUser()
            // Assertion here on the returned success message for the user.
            cy.get('.result').should('contain', 'Your registration completed');
          });

          it('I cant  register a duplicate account', () => {
            // Calling custom function from cypress "commands.js"
            cy.registerUser()
            // Assertion here on the returned error message for the user.
            cy.get('.message-error').should('contain', 'The specified email already exists');
          });
        });
      });
    });
  });
});