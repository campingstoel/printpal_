describe('Can visite homescreen', () => {

  beforeEach(() => {

      cy.visit('http://localhost:19006/');
    })


  it('Check if form is visible', () => {

      cy.get("div[id='root']").should('have.text', 'React Native testing with Cypress');

  });

})