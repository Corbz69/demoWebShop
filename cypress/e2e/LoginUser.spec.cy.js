
import LoginPageObjects from "../support/page-objects/LoginPageObjects";
describe('Our user can log in to the App', () => {
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
          it('User can login with correct credentials', () => {
            // Monitoring the network requests of the application. Looking for the login request!
            cy.intercept({
              method: "POST",
              url: "https://demowebshop.tricentis.com/login",
            }).as("loginRequest");
            cy.NavigateToLoginPage();
            cy.LogInToDemoWebApp();
            //Testing the response status, double assertion on the login
            cy.wait("@loginRequest").its("response.statusCode").should("equal", 302);
          });
          it.only('User CANT login with incorrect credentials', () => {
            // Monitoring the network requests of the application. Looking for the login request!
            cy.intercept({
              method: "POST",
              url: "https://demowebshop.tricentis.com/login",
            }).as("loginRequest");
            cy.NavigateToLoginPage()
            // Insert Email
            LoginPageObjects.EmailInputField("corbz@demo.io");
            //Insert the password
            LoginPageObjects.PasswordInputField("wrongPassword");
            // Click on the login button
            LoginPageObjects.ReturningCustomerLoginBtnClick()
            //Testing the response status, double assertion on the login
            cy.wait("@loginRequest").its("response.statusCode").should("equal", 200);
            LoginPageObjects.LoginErrorMessageLabel()
              .should('contain', 'Login was unsuccessful. Please correct the errors and try again.');
          });
        });
      });
    });
  });
});