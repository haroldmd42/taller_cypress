import { onInputForm } from "../support/objectsPag/inputsForm.js";

describe('Llenar formularios', () => {
    it('Ingresar los diferentes campo', () => {
        Cypress.on("uncaught:exception", () => {
            return false;
          });
        cy.visit('/')
        onInputForm.inputForm()
    });
    it('Check Elements', () => {
        Cypress.on("uncaught:exception", () => {
            return false;
          });
          cy.visit('/')
          onInputForm.checkForm()
    });
    it.only('Completar formularios', () => {
        Cypress.on("uncaught:exception", () => {
            return false;
          });
          cy.visit('/')
          onInputForm.completeForm()
    });
    
    
});
