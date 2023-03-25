class RegisterUserPageObjects {

  MaleRadioButtonClick() {
    cy.get('.gender')
      .find('[id="gender-male"]')
      .click();
  }

  FemaleRadioButtonClick() {
    cy.get('.gender')
      .find('[id="gender-female"]')
      .click();
  }

  FirstNameInputField(userFirstName) {
    cy.get('[id="FirstName"]')
      .click()
      .type(userFirstName);;
  }

  LastNameInputField(userLastName) {
    cy.get('[id="LastName"]')
      .click()
      .type(userLastName);;
  }

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

  ConfirmPasswordInputField(userPassword) {
    cy.get('[id="ConfirmPassword"]')
      .click()
      .type(userPassword);;
  }

  RegisterButtonClick() {
    cy.get('[id="register-button"]')
      .click();
  }
}

export default new RegisterUserPageObjects();
