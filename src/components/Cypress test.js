describe('testing personal greeting', () => {
    it('testing tags', () => {
      cy.visit('/'); // Make sure this URL is correct
      cy.get('input#nameInput').type('Shaw');
      cy.get('p').should('contain', 'Hello Shaw!');
    });
  });