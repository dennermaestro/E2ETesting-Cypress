import WebTablesPage from '../pages/WebTablesPage';

describe('Web Tables -> DemoQA', () => {
  beforeEach(() => {
    cy.visit('/');
    WebTablesPage.navigateToWebTables();
  });

  it('Cria, edita e deleta um registro com sucesso', () => {
    WebTablesPage.createNewRecord();
    WebTablesPage.editRecord();
    WebTablesPage.deleteRecord();
  });
});