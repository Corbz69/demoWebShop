class CheckOutPageObjects {

  fillInCompanyField(country) {
    const billingAddressContainer = cy.get('[id="BillingNewAddress_CountryId"]')
    billingAddressContainer.select(country)
  }

  fillInCityField(city) {
    const billingAddressContainer = cy.get('[id="checkout-step-billing"]')
    billingAddressContainer.find('[id="BillingNewAddress_City"]')
      .click()
      .type(city);
  }

  fillInAddress1Field(address1) {
    const billingAddressContainer = cy.get('[id="checkout-step-billing"]')
    billingAddressContainer.find('[id="BillingNewAddress_Address1"]')
      .click()
      .type(address1);
  }

  fillInPostalField(postal) {
    const billingAddressContainer = cy.get('[id="checkout-step-billing"]')
    billingAddressContainer.find('[id="BillingNewAddress_ZipPostalCode"]')
      .click()
      .type(postal);
  }

  fillInPhoneNumberField(phoneNumber) {
    const billingAddressContainer = cy.get('[id="checkout-step-billing"]')
    billingAddressContainer.find('[id="BillingNewAddress_PhoneNumber"]')
      .click()
      .type(phoneNumber);
  }

  fillInPhoneNumberField(phoneNumber) {
    const billingAddressContainer = cy.get('[id="checkout-step-billing"]')
    billingAddressContainer.find('[id="BillingNewAddress_PhoneNumber"]')
      .click()
      .type(phoneNumber);
  }

  billingAddressContinueBTN() {
    const button = cy.get('#billing-buttons-container input[type="button"]')
    button.click()
  }

  shippingAddressContinueBTN() {
    const button = cy.get('#shipping-buttons-container input[type="button"]')
    button.click()
  }

  shippingMethodContinueBTN() {
    const button = cy.get('#shipping-method-buttons-container input[type="button"]')
    button.click()
  }

  paymentMethodContinueBTN() {
    const button = cy.get('#payment-method-buttons-container input[type="button"]')
    button.click()
  }

  paymentInformationContinueBTN() {
    const button = cy.get('#payment-info-buttons-container input[type="button"]')
    button.click()
  }

  formConfirmBTN() {
    const button = cy.get('#confirm-order-buttons-container input[type="button"]')
    button.click()
  }

  confirmCheckoutInfoContainer() {
    return cy.get('[id="checkout-step-confirm-order"]')
  }
}
export default new CheckOutPageObjects();
