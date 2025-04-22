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

1. Cadastro e adição de produto a Lista de Compras

A. Cadastrar novo usuário

B. Logado automaticamente na UI

C. Pesquisa pelo produto específico

D. Adiciona produto a lista de compras

E. Retorna a Home

F. Finaliza sessão


2. Busca e validação de produto na lista de Compras

-
Cadastrar novo usuário
-
Logado automaticamente na UI
-
Pesquisa pelo produto
-
Adiciona produto a lista de compras
-
Consulta produto na lista de compras
-
Retorna a Home
-
Finaliza sessão


3. Remoção e adição de novo produto

-
Cadastrar novo usuário
-
Logado automaticamente na UI
-
Pesquisa pelo produto
-
Adiciona produto a lista de compras
-
Consulta produto na lista de compras
-
Remova produto na lista de compras
-
Retorna a Home
-
Pesquisa novo produto e adicione um novo
-
Consulta produto na lista de compras
-
Finaliza sessão



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


