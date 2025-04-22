 💻  - Automação Frontend com Cypress

Este projeto tem como objetivo validar cenários de ponta a ponta (E2E) em uma aplicação web de e-commerce, utilizando o framework Cypress com JavaScript puro.

Foram implementados 3 cenários automatizados, cobrindo cadastro de usuários, busca de produtos, manipulação de carrinho de compras e logout, utilizando boas práticas de organização de testes e Page Object Model.

[UI](https://front.serverest.dev//).



 Tecnologias Utilizadas

- Cypress
- JavaScript
- Page Object

---

#Walkthrough

Setup

1. Instale as dependências 

npm install

2. Execute a interface do Cypress

npx cypress open

3. Execute em modo headless (OPCIONAL)

npx cypress run


* É possível que haja falhas nas primeiras execuções. Certifique de ter configurado corretamente, e rode-o novamente



Setup para Git

1. Clone o repositório:
   ```bash
   git clone https://github.com/dennermaestro/E2ETesting-Cypress
  
2. Execute o projeto no todo utilizando npx cypress open - Listando item a item


#Estrutura do Projeto

```
cypress/
├── e2e/                  # Testes automatizados
├── pages/                # Page Objects organizados
├── support/              # Comandos customizados e handlers
cypress.config.js         # Configuração do Cypress
```

---

 ✅ Cenários Automatizados

-> Cadastro e adição de produto a Lista de Compras
-
 create_user_and_add_product.cy.js
 
1. Cadastrar novo usuário
2. Logado automaticamente na UI
3. Pesquisa pelo produto específico
4. Adiciona produto a lista de compras
5. Retorna a Home
6. Finaliza sessão


-> Busca e validação de produto na lista de Compras
-
search_add_and_validate_cart.cy.js

1. Cadastrar novo usuário
2. Logado automaticamente na UI
3. Pesquisa pelo produto
4. Adiciona produto a lista de compras
5. Consulta produto na lista de compras
6. Retorna a Home
7. Finaliza sessão


 -> Remoção e adição de novo produto
-
full_cart_flow.cy.js
1. Cadastrar novo usuário
2. Logado automaticamente na UI
3. Pesquisa pelo produto
4. Adiciona produto a lista de compras
5. Consulta produto na lista de compras
6. Remova produto na lista de compras
7. Retorna a Home
8. Pesquisa novo produto e adicione um novo
9. Consulta produto na lista de compras
10. Finaliza sessão



------
 Tecnologias Utilizadas
Cypress 12+

JavaScript

Faker.js para geração de dados dinâmicos

Page Object Model (POM)

---
📌 Observações

- Projeto 100% funcional com Cypress v14.2.1
- Não utilizado Cucumber, apenas JavaScript puro com boas práticas
- Compatível com Node.js v18

Desenvolvido por Denner Santana


