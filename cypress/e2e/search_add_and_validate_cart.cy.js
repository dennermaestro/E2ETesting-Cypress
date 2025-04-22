import signupPage from '../pages/signupPage';
import productPage from '../pages/productPage';
import { faker } from '@faker-js/faker';
import headerPage from '../pages/logoutPage';

describe('Cenário 2 - Cadastro, adicionar produto, buscar o produto e validação no carrinho', () => {
  const user = {
    name: faker.person.fullName(),
    email: faker.internet.email(),
    password: faker.internet.password()
  };

  const productName = 'Camera Leica';

  it('Deve buscar produto, adicionar ao carrinho e validar presença', () => {
    // 1. Cadastrar novo usuário
    signupPage.access();
    signupPage.fillForm(user.name, user.email, user.password);
    signupPage.submit(); // redireciona automaticamente para produtos

    // 2. Buscar produto Camera Leica
    productPage.searchProduct(productName);

    // 3. Adicionar produto à lista e depois ao carrinho
    productPage.addProductToCart(productName);

    // 4. Retornar à home
    productPage.goHome();

    // 5. Ir ao carrinho de compras
    productPage.goToCart();

    // 6. Validar se o produto aparece na lista de compras
    cy.contains(productName).should('be.visible');

    // 7. Logout
headerPage.logout();
  });
});
