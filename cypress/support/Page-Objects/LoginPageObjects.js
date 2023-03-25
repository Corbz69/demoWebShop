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

  ReturningCustomerLoginBtnClick() {
    const container = cy.get('.form-fields')
    const button = container.find('.buttons')
    button.click()
    return;
  }
}
export default new LoginPageObjects();
