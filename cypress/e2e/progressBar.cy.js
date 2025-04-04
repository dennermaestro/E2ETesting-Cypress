import ProgressBarPage from '../pages/ProgressBarPage';

describe('Progress Bar -> DemoQA', () => {
  beforeEach(() => {
    cy.visit('/');
    ProgressBarPage.navigateToProgressBar();
  });

  it('Valida progresso menor ou igual a 25%; depois atinge 100% e faça o reset', () => {
    ProgressBarPage.startProgress();
    ProgressBarPage.stopProgressBefore25();
    ProgressBarPage.validateProgressMax25();
    ProgressBarPage.startProgressAgain();
    ProgressBarPage.waitUntilCompleteAndReset();
  });
});
