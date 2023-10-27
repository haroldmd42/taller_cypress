import * as utils from "../utils.js";

class OnBooks{
    registerUser (){

let COMANDS = {
    nameUser: 'Harold',
    passwordUser: '5246433Yan#',
    buttonCollection: 'Add To Your Collection'
}

        cy.contains("Book Store Application").click();
        cy.get('[id="login"').click();
        // Evaluar que el botón de "Login" sea visible
        cy.get('[id="login"]').should("be.visible");
        // Evaluar que el botón de "Login" contenga el texto "Login"
        cy.get('[id="login"]').should("contain", "Login");
        cy.get('[id="userName"]').type(COMANDS.nameUser).should("have.value", COMANDS.nameUser);
        cy.get('[id="password"]')
          .type(COMANDS.passwordUser)
          .should("have.value", COMANDS.passwordUser);
        cy.get('[id="login"').click();
    
        // Función para seleccionar un elemento al azar de la lista de libros
    
       
        utils.selectBookRandom();
        // Evaluar que el botón de "Login" sea visible
        cy.contains(COMANDS.buttonCollection).click().should("be.visible");
        cy.contains(COMANDS.buttonCollection).should(
          "contain",
          COMANDS.buttonCollection
        );
        
        cy.contains("Profile").click();
        cy.get('[id="delete-record-undefined"]').click();
        cy.get('[id="closeSmallModal-ok"]').click();
    }
}

export const onBooks = new OnBooks();