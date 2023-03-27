import HomePageObjects from "../support/page-objects/HomePageObjects";
import RegisterUserPageObjects from "../support/page-objects/RegisterUserPageObjects";
import LoginPageObjects from "../support/page-objects/LoginPageObjects";
import SearchPageObjects from "./Page-Objects/SearchPageObjects";
import CartPageObjects from "./Page-Objects/CartPageObjects";

Cypress.Commands.add("visitDemoWebApp", () => {
    cy.fixture("environmentData.json").then((data) => {
        const appUrl = data.appUrl
        cy.visit(appUrl)
    });
});

Cypress.Commands.add("LogInToDemoWebApp", () => {
    cy.fixture("userData.json").then((data) => {
        const userEmail = data.email;
        const userPassword = data.password;
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
    cy.fixture("userData.json").then((data) => {
        const userFirstName = data.firstName;
        const userLastName = data.lastName;
        const userEmail = data.email;
        const userPassword = data.password;
        const gender = data.gender;

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

Cypress.Commands.add("validateSearchedProduct", (product) => {
    SearchPageObjects.ValidateProductOnPage(product)
});