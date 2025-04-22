class SignupPage {
    access() {
      cy.visit('/cadastrarusuarios');
    }
  
    fillForm(name, email, password, isAdmin = false) {
      cy.get('input[name="nome"]').type(name);
      cy.get('input[name="email"]').type(email);
      cy.get('input[name="password"]').type(password);
      if (isAdmin) {
        cy.get('input[type="checkbox"]').check();
      }
    }
  
    submit() {
      cy.get('button[type="submit"]').click();
    }
  }
  
  export default new SignupPage();
  