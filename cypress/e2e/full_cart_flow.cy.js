import signupPage from '../pages/signupPage';
import productPage from '../pages/productPage';
import { faker } from '@faker-js/faker';
import headerPage from '../pages/logoutPage';

describe('Cenário 3 - Adicionar produto, limpar a lista e adicionar um novo produto ao carrinho', () => {
  const user = {
    name: faker.person.fullName(),
    email: faker.internet.email(),
    password: faker.internet.password()
  };

  const firstProduct = 'Camera Leica';
  const secondProduct = 'Electronic Ceramic Soap';

  it('Deve limpar carrinho e adicionar novo produto com validação completa', () => {
    // 1. Cadastro
    signupPage.access();
    signupPage.fillForm(user.name, user.email, user.password);
    signupPage.submit(); // login automático

    // 2. Buscar e adicionar primeiro produto
    productPage.searchProduct(firstProduct);
    productPage.addProductToCart(firstProduct);
    productPage.goHome();

    // 3. Ir ao carrinho e limpar lista
    productPage.goToCart();
    cy.contains(firstProduct).should('be.visible');
    productPage.clearCart();

    // 4. Voltar para Home
    productPage.goHome();

    // 5. Buscar e adicionar novo produto
    productPage.searchProduct(secondProduct);
    productPage.addProductToCart(secondProduct);
    productPage.goHome();

    // 6. Validar se o novo produto está no carrinho
    productPage.goToCart();
    cy.contains(secondProduct).should('be.visible');

    // 7. Logout
    headerPage.logout();
  });
});
