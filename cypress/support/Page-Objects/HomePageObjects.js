class HomePageObjects {

  RegisterUserBTN() {
    return cy.get(".ico-register");
  }

  LoginUserBTN() {
    return cy.get(".ico-login");
  }
}
export default new HomePageObjects();
