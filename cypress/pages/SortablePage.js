class SortablePage {
  navigateToSortable() {
    cy.contains('Interactions').click();
    cy.contains('Sortable').click();
  }

  reorderListToAscending() {
    const order = ['One', 'Two', 'Three', 'Four', 'Five', 'Six'];

    order.forEach((label, index) => {
      cy.get('.vertical-list-container .list-group-item')
        .contains(label)
        .then(($el) => {
          cy.get('.vertical-list-container .list-group-item')
            .eq(index)
            .then(($target) => {
              if ($el.text().trim() !== $target.text().trim()) {
                cy.wrap($el).drag($target);
              }
            });
        });
    });
  }

  validateAscendingOrder() {
    const expected = ['One', 'Two', 'Three', 'Four', 'Five', 'Six'];

    cy.get('.vertical-list-container .list-group-item')
      .then(($items) => {
        const actual = [...$items].map((el) => el.innerText.trim());
        expect(actual).to.deep.equal(expected);
      });
  }
}

export default new SortablePage();
