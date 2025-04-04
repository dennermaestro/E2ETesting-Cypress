class BrowserWindowPage {
    navigateToBrowserWindows() {
    cy.contains('Alerts, Frame & Windows').click();
    cy.contains('Browser Windows').click();
  }

    openNewWindow() {
    cy.window().then((win) => {
      cy.stub(win, 'open').callsFake((url) => {
        win.location.href = url;
      });
    });
    cy.get('#windowButton').click();
  }



//Cypress não consegue trabalhar com acessos múltiplos, logo não fechará a nova janela
  
    validateNewWindowMessage() {
    cy.url().should('include', '/sample');
    cy.get('h1').should('have.text', 'This is a sample page');
  }
}

export default new BrowserWindowPage();