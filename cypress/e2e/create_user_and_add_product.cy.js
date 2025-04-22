import signupPage from '../pages/signupPage';
import productPage from '../pages/productPage';
import { faker } from '@faker-js/faker';
import headerPage from '../pages/logoutPage';

describe('Cenário 1 - Criar login e adicionar produto ao carrinho', () => {
  const user = {
    name: faker.person.fullName(),
    email: faker.internet.email(),
    password: faker.internet.password()
  };

  const productName = 'Logitech MX Vertical';

  it('Deve criar usuário, buscar produto, adicionar ao carrinho e validar', () => {
    // Cadastro do usuário
    signupPage.access();
    signupPage.fillForm(user.name, user.email, user.password);
    signupPage.submit(); //redirecionamento automático após criação do usuário

    // 1.Busca pelo produto
    productPage.searchProduct(productName);

    // 2.Adiciona à lista/carrinho
    productPage.addProductToCart(productName);

    // Vai para o carrinho --Devido a exibição de manutenção na aba de carrinhos de compras, finalizaremos o teste retornando para a homePage

    // 3.Encerre voltando a home
    productPage.goHome();
   // 4. Logout
   headerPage.logout();
  });
  });

 