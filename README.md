 💻 Desafio Técnico - Automação Frontend com Cypress

Este projeto foi desenvolvido para apresentar os 5 desafios propostos para o FrontEnd
[DemoQA](https://demoqa.com/).

//////

 Tecnologias Utilizadas

- Cypress
- JavaScript
- Page Object
- Comandos customizados (drag & drop)
- Cypress File Upload

---

#Walkthrough

1. Clone o repositório:
   ```bash
   git clone https://github.com/dennermaestro/desafiotecnicoQA
  


2. Instale as dependências:
   ```bash
   npm install
   ```

3. Execute o Cypress em modo interativo:
   ```bash
   npx cypress open
   ```

4. Ou execute todos os testes em modo headless:
   ```bash
   npx cypress run
   ```
5. Execute no terminal npx cypress open para ter visualização UI e suas dependências


6. Execute o projeto no todo utilizando npx cypress open - Listando item a item


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

1. Practice Form
   - Preenche formulário completo com upload de imagem  
   - Valida popup de sucesso

2. Browser Windows 
   - Clica no botão "New Window"  
   - Valida o conteúdo da nova página aberta

3. Web Tables
   - Cria, edita e deleta um registro na tabela

4. Progress Bar 
   - Inicia e para antes dos 25%  
   - Reinicia e reseta ao chegar nos 100%

5. Sortable List**  
   - Reorganiza os itens da lista via drag and drop para ordem crescente



---


Desenvolvido por Denner Santana

---

📌 Observações

- Projeto 100% funcional com Cypress v14.2.1
- Não utilizado Cucumber, apenas JavaScript puro com boas práticas
- Compatível com Node.js v18