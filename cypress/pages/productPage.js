class ProductPage {
    searchProduct(name) {
      // Digita no campo de busca
      cy.get('input[placeholder="Pesquisar Produtos"]').clear().type(name);
  
      // Clica no botão de pesquisar
      cy.get('[data-testid="botaoPesquisar"]').click();
  
      // Aguarda o produto aparecer
      cy.contains(name).should('be.visible');
    }
  
    addProductToCart(name) {
      // Encontra o produto na lista e clica no botão "Adicionar à lista"
      cy.get('[data-testid="adicionarNaLista"]').should('be.visible').click();

      //Adicionar ao Carrinho"
      cy.get('[data-testid="adicionar carrinho"]').should('be.visible').click();

    }
  
    goHome() {
      // Clica no botão "Home" para voltar ao menu principal
      cy.get('[data-testid="home"]').click();
    }

    goToCart() { 
    cy.get('[data-testid="lista-de-compras"]').click();
    }
   
   clearCart() {
    //Limpar a lista de produtos
    cy.get('[data-testid="limparLista"]').click();
   }
}
  
  export default new ProductPage();
  