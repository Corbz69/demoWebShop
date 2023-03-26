class SearchPageObjects {

  ValidateProductOnPage(product) {
    const productContainer = cy.get(".search-results")
    productContainer.should('contain', product)
  }

  SelectAddToCartBTN() {
    const productContainer = cy.get(".search-results")
    productContainer.find('.button-2').click()
  }
}
export default new SearchPageObjects();
