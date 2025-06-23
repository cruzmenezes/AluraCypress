describe('Pagina de Cadastro', () => {
  it('Deve preencher os campos do formularios corretamente para cadastrar um novo usuario', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="register-button"]').click();
    cy.get('[data-test="input-name"]').type('Paulo o apostolo');
    cy.get('[data-test="input-email"]').type('victor@email.com.br');
    cy.get('[data-test="input-password"]').type('Senha123');
    cy.get('[data-test="input-confirm-password"]').type('Senha123');
    cy.get('[data-test="submit-button"]').click();
  })
})