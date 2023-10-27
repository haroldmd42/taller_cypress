import { onBooks } from "../support/objectsPag/books.js";

describe("Añadir y eliminar un libro", () => {
  it("Registrar un nuevo usuario", () => {
    Cypress.on("uncaught:exception", () => {
      return false;
    });
    cy.visit('/')
    onBooks.registerUser()
  });
});
