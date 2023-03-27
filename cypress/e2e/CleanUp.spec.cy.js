describe('Clean Up', () => {
  it('Lets do some clean up', () => {
    // Calling custom function from cypress "commands.js" to search for products
    cy.cypresCleanUp();
  });
});
