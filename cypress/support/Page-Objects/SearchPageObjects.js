class SearchPageObjects {

  ValidateProductOnPage(product) {
    const productContainer = cy.get(".search-results")
    productContainer.should('contain', product)
  }

  SelectAddToCartBTN() {
    const productContainer = cy.get(".search-results")
    productContainer.find('.button-2').click()
  }

  numberOfCheckedOutItems() {
    return cy.get(".cart-qty")
  }

  selectCheckoutNavBTN() {
    return cy.get('.ico-cart > .cart-label')
      .click()
  }
}
export default new SearchPageObjects();
