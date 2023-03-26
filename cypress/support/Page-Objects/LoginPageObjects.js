class LoginPageObjects {

  EmailInputField(userEmail) {
    cy.get('[id="Email"]')
      .click()
      .type(userEmail);;
  }

  PasswordInputField(userPassword) {
    cy.get('[id="Password"]')
      .click()
      .type(userPassword);;
  }

  LoginErrorMessageLabel() {
    return cy.get('.validation-summary-errors');
  }

  ReturningCustomerLoginBtnClick() {
    const container = cy.get('.form-fields')
    const button = container.find('.buttons')
    button.click()
    return;
  }

  ClickOnHomeLogo() {
    return cy.get('.header-logo').click();
  }
}
export default new LoginPageObjects();
