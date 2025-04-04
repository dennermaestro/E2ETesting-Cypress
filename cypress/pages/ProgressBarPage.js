class ProgressBarPage {
  navigateToProgressBar() {
    cy.contains('Widgets').click();
    cy.contains('Progress Bar').click();
  }

  startProgress() {
    cy.get('#startStopButton').click();
  }

  stopProgressBefore25() {
    cy.wait(800); // Aguarda para chegar até 1-24%
    cy.get('#startStopButton').click();
    cy.log('⏸️ Progresso pausado');
    cy.get('#startStopButton').should('have.text', 'Start');
    cy.wait(1000); // Espera o pause ficar visível antes de continuar
  }
  
  validateProgressMax25() {
    cy.get('.progress-bar')
      .invoke('text')
      .then((text) => {
        const percent = parseFloat(text.replace('%', ''));
        expect(percent).to.be.lte(25);
      });
  }

  startProgressAgain() {
    cy.get('#startStopButton').click();
  }

  waitUntilCompleteAndReset() {
    cy.get('.progress-bar', { timeout: 20000 }) // Timeout expandido para atingir 100%
      .should('have.text', '100%');

    cy.get('#resetButton').click();
    cy.get('.progress-bar').should('have.text', '0%');
  }
}

export default new ProgressBarPage();
