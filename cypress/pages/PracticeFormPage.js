class PracticeFormPage {
  navigateToForm() {
    cy.contains('Forms').click();
    cy.contains('Practice Form').click();
  }

  fillForm() {
    cy.get('#firstName').type('Denner');
    cy.get('#lastName').type('Santana');
    cy.get('#userEmail').type('denner.de.araujo@accenture.com');
    cy.get('label[for="gender-radio-1"]').click();
    cy.get('#userNumber').type('11999999999');
    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__year-select').select('1994');
    cy.get('.react-datepicker__month-select').select('February');
    cy.get('.react-datepicker__day--015').click();
    cy.get('#subjectsInput').type('Maths{enter}');
    cy.get('label[for="hobbies-checkbox-1"]').click();
    cy.get('#currentAddress').type('Rua Alexandre Dumas, 521');
    cy.get('#state').click().get('#react-select-3-option-0').click();
    cy.get('#city').click().get('#react-select-4-option-0').click();
  }

  uploadImage(fileName) {
    cy.get('#uploadPicture').attachFile(fileName);
  }

  submitForm() {
    cy.get('#submit').click({ force: true });
  }

  verifyPopupSuccess() {
    cy.get('#example-modal-sizes-title-lg').should('contain', 'Thanks for submitting the form');
  }

  closePopup() {
    cy.get('#closeLargeModal').click({ force: true });
  }
  
  }


export default new PracticeFormPage();