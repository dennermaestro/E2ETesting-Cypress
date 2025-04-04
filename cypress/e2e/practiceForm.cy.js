import PracticeFormPage from '../pages/PracticeFormPage';

describe('Practice Form -> DemoQA', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com');
  });

  it('Preenche o formulário e envia com sucesso', () => {
    PracticeFormPage.navigateToForm();
    PracticeFormPage.fillForm();
    PracticeFormPage.uploadImage('acc.png');
    PracticeFormPage.submitForm();
    PracticeFormPage.verifyPopupSuccess();
    PracticeFormPage.closePopup();
  });
});