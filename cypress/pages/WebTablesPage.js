class WebTablesPage {
  navigateToWebTables() {
    cy.contains('Elements').click();
    cy.contains('Web Tables').click();
  }

  createNewRecord() {
    cy.get('#addNewRecordButton').click();
    cy.get('#firstName').type('Denner');
    cy.get('#lastName').type('Santana');
    cy.get('#userEmail').type('denner.de.araujo@accenture.com');
    cy.get('#age').type('31');
    cy.get('#salary').type('10000');
    cy.get('#department').type('QA');
    cy.get('#submit').click();
    cy.contains('Denner').should('exist');
  }

  editRecord() {
    cy.contains('Denner')
      .parents('div[role="row"]')
      .find('[title="Edit"]').click();

    cy.get('#department').clear().type('Quality Assurance');
    cy.get('#submit').click();
    cy.contains('Quality Assurance').should('exist');
  }

  deleteRecord() {
    cy.contains('Denner')
      .parents('div[role="row"]')
      .find('[title="Delete"]').click();

    cy.contains('Denner').should('not.exist');


  }
  
  

}

export default new WebTablesPage();