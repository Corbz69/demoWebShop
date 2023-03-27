class CartPageObjects {

  shoppingCartContainer(product) {
    const cartContainer = cy.get(".cart-item-row")
    cartContainer.should('contain', product)
    cartContainer.find('.remove-from-cart > input').click();
  }

  cartUpdateShoppingCartBTN() {
    const updateBtn = cy.get(".update-cart-button")
    updateBtn.click();
  }
}
export default new CartPageObjects();
