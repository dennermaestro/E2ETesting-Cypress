// Ignora erros de popups terceiros do DOM
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  
  // Importa suporte para upload de arquivos no site
  import 'cypress-file-upload';
  
  // Comando customizado para drag-drop
  Cypress.Commands.add('drag', { prevSubject: 'element' }, (subject, targetEl) => {
    const dataTransfer = new DataTransfer();
  
    cy.wrap(subject)
      .trigger('dragstart', { dataTransfer });
  
    cy.get(targetEl)
      .trigger('drop', { dataTransfer })
      .trigger('dragend');
  });
  