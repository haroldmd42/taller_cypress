class OnSearchBooks {
    serachBooks(){

        let CONTEN = {
            bookStore: 'Book Store Application',
            userName: 'Harold',
            passwordUser: "5246433Yan#",
            nameBookSearch: 'Don quijote de la mancha'
        }

        let LOCATOR = {
            buttonLogin: '[id="login"',
            inputUserName: '[id="userName"]',
            inputPassword: '[id="password"]',
            buttonSearch: '[id="searchBox"]',
            buttonDelete: '[id="basic-addon2"]'

        }
        cy.contains(CONTEN.bookStore).click();
        cy.get(LOCATOR.buttonLogin).click();
        // Evaluar que el botón de "Login" sea visible
        cy.get(LOCATOR.buttonLogin).should("be.visible");
        // Evaluar que el botón de "Login" contenga el texto "Login"
        cy.get(LOCATOR.buttonLogin).should("contain", "Login");
        cy.get(LOCATOR.inputUserName).type(CONTEN.userName).should("have.value", CONTEN.userName);
        cy.get(LOCATOR.inputPassword)
          .type(CONTEN.passwordUser)
          .should("have.value", CONTEN.passwordUser);
        cy.get(LOCATOR.buttonLogin).click();
        cy.get(LOCATOR.buttonSearch).type(CONTEN.nameBookSearch).should('have.value', CONTEN.nameBookSearch)
        cy.get(LOCATOR.buttonDelete).click()
    }
}

export const onSearchBooks = new OnSearchBooks();