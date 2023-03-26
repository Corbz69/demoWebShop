class HomePageObjects {

  RegisterUserBTN() {
    return cy.get(".ico-register");
  }

  LoginUserBTN() {
    return cy.get(".ico-login");
  }

  FetchProductUsingSearchInputField(product) {
    const searchWindow = cy.get('[id="small-searchterms"]')
    const searchButton = cy.get('form > .button-1')
    searchWindow.click()
      .type(product)
    searchButton.click()
  }
}
export default new HomePageObjects();
