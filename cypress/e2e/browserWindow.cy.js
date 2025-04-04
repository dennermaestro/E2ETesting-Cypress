import BrowserWindowPage from '../pages/BrowserWindowPage';

describe('Browser Window - DemoQA', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Valida nova janela e mensagem "This is a sample page"', () => {
    BrowserWindowPage.navigateToBrowserWindows();
    BrowserWindowPage.openNewWindow();
    BrowserWindowPage.validateNewWindowMessage();
  });
});















