import { onSearchBooks } from "../support/objectsPag/searchBooks.js";

describe('Busqueda de libros', () => { 
it('Buscar un nuevo libro', () => {
    Cypress.on("uncaught:exception", () => {
        return false;
      });
      cy.visit("/");
      onSearchBooks.serachBooks()
    
});

 })