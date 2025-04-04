import SortablePage from '../pages/SortablePage';

describe('Sortable List -> DemoQA', () => {
  beforeEach(() => {
    cy.visit('/');
    SortablePage.navigateToSortable();
  });

  it('Reordena os itens da lista para ordem crescente', () => {
    SortablePage.reorderListToAscending();
    SortablePage.validateAscendingOrder();
  });
});
