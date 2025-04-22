class LogoutPage {
    logout() {
      cy.get('[data-testid="logout"]').click();
      cy.url().should('include', '/login');
    }
  }
  
  export default new LogoutPage();
  