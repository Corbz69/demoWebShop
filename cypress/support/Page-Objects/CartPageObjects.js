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

  selectTermsAndConditionsBTN() {
    const termsAndConditionsBTN = cy.get('[id="termsofservice"]')
    termsAndConditionsBTN.click();
  }

  selectCheckoutBTN() {
    const checkoutBTN = cy.get('[id="checkout"]')
    checkoutBTN.click();
  }
}
export default new CartPageObjects();
