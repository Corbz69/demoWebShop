import HomePageObjects from "./page-objects/HomePageObjects.js";
import RegisterUserPageObjects from "./page-objects/RegisterUserPageObjects";
import LoginPageObjects from "./page-objects/LoginPageObjects";
import SearchPageObjects from "./Page-Objects/SearchPageObjects";
import CartPageObjects from "./Page-Objects/CartPageObjects";
import CheckOutPageObjects from "./Page-Objects/CheckOutPageObjects";

Cypress.Commands.add("generateUserData", () => {
    cy.exec(`npm run precypress`), { timeout: 20000 };
});

Cypress.Commands.add("visitDemoWebApp", () => {
    cy.fixture("environmentData.json").then((data) => {
        const appUrl = data.appUrl
        cy.visit(appUrl)
        cy.generateUserData()
    });
});

Cypress.Commands.add("LogInToDemoWebApp", () => {
    cy.fixture("userData.json").then((userData) => {
        const userEmail = userData.data.email;
        const userPassword = userData.data.password;
        cy.generateUserData()
        cy.visitDemoWebApp();
        cy.NavigateToLoginPage()
        // Insert Email
        LoginPageObjects.EmailInputField(userEmail);
        //Insert the password
        LoginPageObjects.PasswordInputField(userPassword);
        // Click on the login button
        LoginPageObjects.ReturningCustomerLoginBtnClick()
    });
});

Cypress.Commands.add("NavigateToLoginPage", () => {
    HomePageObjects.LoginUserBTN()
        .click();
})

Cypress.Commands.add("registerUser", () => {
    // Fetching the fixture data for testing artifacts, using what is returned
    // as variables for our testing scope.
    cy.fixture("userData.json").then((userData) => {
        const userFirstName = userData.data.firstName;
        const userLastName = userData.data.lastName;
        const userEmail = userData.data.email;
        const userPassword = userData.data.password;
        const gender = userData.data.gender;

        //Calling the custom command on line 4 of this file, visiting the Demo App.
        cy.visitDemoWebApp()
        // Navigating to the Register page
        HomePageObjects.RegisterUserBTN()
            .click();
        cy.url().should("include", "/register");

        // Determin if the user is Male or Female
        if (gender === "male") {
            //Male is returned and we click the Male Radio Button
            RegisterUserPageObjects.MaleRadioButtonClick()
        } else {
            // Female is returned and we click the Female Radio Button
            RegisterUserPageObjects.FemaleRadioButtonClick()
        }
        // Insert Users First name
        RegisterUserPageObjects.FirstNameInputField(userFirstName);
        // Insert Users last name
        RegisterUserPageObjects.LastNameInputField(userLastName);
        // Insert Email
        RegisterUserPageObjects.EmailInputField(userEmail);
        //Insert the password
        RegisterUserPageObjects.PasswordInputField(userPassword);
        //Confirm the password
        RegisterUserPageObjects.ConfirmPasswordInputField(userPassword);
        //Click Register
        RegisterUserPageObjects.RegisterButtonClick();
    })
});

Cypress.Commands.add("searchAndValidateProduct", () => {
    cy.fixture("productData.json").then((data) => {
        const product = data.product
        cy.LogInToDemoWebApp();
        LoginPageObjects.ClickOnHomeLogo();
        HomePageObjects.FetchProductUsingSearchInputField(product)
        cy.url().should("include", "/search");
        cy.url().should("include", `${product}`)
        cy.validateSearchedProduct(product)
        SearchPageObjects.SelectAddToCartBTN()
    })
})

Cypress.Commands.add("removeCheckoutItem", () => {
    cy.fixture("productData.json").then((data) => {
        const product = data.product
        CartPageObjects.shoppingCartContainer(product);
        CartPageObjects.cartUpdateShoppingCartBTN()
    })
})

Cypress.Commands.add("purchaseCheckoutItem", () => {
    cy.fixture("productData.json").then((productData) => {
        const product = productData.product
        CartPageObjects.shoppingCartContainer(product);
        CartPageObjects.selectTermsAndConditionsBTN();
        CartPageObjects.selectCheckoutBTN()
        cy.url().should("include", "/onepagecheckout")
        cy.fixture("userData.json").then((userData) => {
            const country = userData.data.country;
            const city = userData.data.city;
            const address1 = userData.data.address1;
            const postal = userData.data.postal;
            const phoneNumber = userData.data.phoneNumber;
            CheckOutPageObjects.fillInCompanyField(country)
            CheckOutPageObjects.fillInCityField(city)
            CheckOutPageObjects.fillInAddress1Field(address1)
            CheckOutPageObjects.fillInPostalField(postal)
            CheckOutPageObjects.fillInPhoneNumberField(phoneNumber)
            CheckOutPageObjects.billingAddressContinueBTN()
            CheckOutPageObjects.shippingAddressContinueBTN()
            CheckOutPageObjects.shippingMethodContinueBTN()
            CheckOutPageObjects.paymentMethodContinueBTN()
            CheckOutPageObjects.paymentInformationContinueBTN()
            CheckOutPageObjects.formConfirmBTN()
            CheckOutPageObjects.confirmCheckoutInfoContainer()
                .should('contain', product)
        })
    })
})

Cypress.Commands.add("validateSearchedProduct", (product) => {
    SearchPageObjects.ValidateProductOnPage(product)
});

Cypress.Commands.add("cypresCleanUp", () => {
    cy.exec(`npm run endcypress`), { timeout: 20000 };
});