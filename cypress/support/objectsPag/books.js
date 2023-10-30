import * as utils from "../utils.js";

class OnBooks{
    registerUser (){

let CONTEN = {
    nameUser: 'Harold',
    passwordUser: '5246433Yan#',
    buttonCollection: 'Add To Your Collection'
}
let LOCATOR  = {
  buttonLogin: '[id="login"',
  inputUserName: '[id="userName"]',
  inputPassword: '[id="password"]',
  buttonDelete: '[id="delete-record-undefined"]',
  buttonWindowDelete: '[id="closeSmallModal-ok"]'

}

        cy.contains("Book Store Application").click();
        cy.get(LOCATOR.buttonLogin).click();
        // Evaluar que el botón de "Login" sea visible
        cy.get(LOCATOR.buttonLogin).should("be.visible");
        // Evaluar que el botón de "Login" contenga el texto "Login"
        cy.get(LOCATOR.buttonLogin).should("contain", "Login");
        cy.get(LOCATOR.inputUserName).type(CONTEN.nameUser).should("have.value", CONTEN.nameUser);
        cy.get(LOCATOR.inputPassword)
          .type(CONTEN.passwordUser)
          .should("have.value", CONTEN.passwordUser);
        cy.get(LOCATOR.buttonLogin).click();
    
        // Función para seleccionar un elemento al azar de la lista de libros
    
       
        utils.selectBookRandom();
        // Evaluar que el botón de "Login" sea visible
        cy.contains(CONTEN.buttonCollection).click().should("be.visible");
        cy.contains(CONTEN.buttonCollection).should(
          "contain",
          CONTEN.buttonCollection
        );
        
        cy.contains("Profile").click();
        cy.get(LOCATOR.buttonDelete).click();
        cy.get(LOCATOR.buttonWindowDelete).click();
    }
}

export const onBooks = new OnBooks();