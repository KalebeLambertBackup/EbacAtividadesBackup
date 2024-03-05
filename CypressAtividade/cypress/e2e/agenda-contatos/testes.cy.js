/// <reference types="cypress" />

describe('Teste de adição/edição/exclusão de contato', () => {

  it('Deve adicionar um contato novo', () => {
    cy.visit('https://agenda-contatos-react.vercel.app');
  
    cy.get('.contato').then(($contatosAntes) => {
      const numeroDeContatosAntes = $contatosAntes.length;
  
      cy.get('input[type="text"]').type('JORGE');
      cy.get('input[type="email"]').type('JORGESOARES@gmail.com');
      cy.get('input[type="tel"]').type('123456789');
      cy.get('button[type="submit"]').click();
  
      cy.wait(1000);
  
      cy.get('.contato').should('have.length', numeroDeContatosAntes + 1);
    });
  });
  
  it('Deve editar um contato', () => {
    cy.visit('https://agenda-contatos-react.vercel.app');
  
    cy.get('.contato').eq(1).find('.edit').click();
    cy.get('input[type="text"]').clear().type('Editado');
    cy.get('button[type="submit"]').click();
    
    cy.get('.contato').eq(1).find('.sc-eDDNvR li').eq(0).invoke('text').should('equal', 'Editado');

  });

  it('Deve remover um contato', () => {
    cy.visit('https://agenda-contatos-react.vercel.app');

    cy.get('.contato').then(($contatosAntes) => {
      const numeroDeContatos = $contatosAntes.length;

    cy.get('.contato').eq(1).find('.delete').click();
    cy.wait(1000)
    cy.get('.contato').should('have.length', numeroDeContatos - 1)
    }
  )
})})