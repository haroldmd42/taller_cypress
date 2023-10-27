class OnSearchBooks {
    serachBooks(){

        let CONTEN = {
            bookStore: 'Book Store Application',
            userName: 'Harold',
            passwordUser: "5246433Yan#",
            nameBookSearch: 'Don quijote de la mancha'
        }
        cy.contains(CONTEN.bookStore).click();
        cy.get('[id="login"').click();
        // Evaluar que el botón de "Login" sea visible
        cy.get('[id="login"]').should("be.visible");
        // Evaluar que el botón de "Login" contenga el texto "Login"
        cy.get('[id="login"]').should("contain", "Login");
        cy.get('[id="userName"]').type(CONTEN.userName).should("have.value", CONTEN.userName);
        cy.get('[id="password"]')
          .type(CONTEN.passwordUser)
          .should("have.value", CONTEN.passwordUser);
        cy.get('[id="login"').click();
        cy.get('[id="searchBox"]').type(CONTEN.nameBookSearch).should('have.value', CONTEN.nameBookSearch)
        cy.get('[id="basic-addon2"]').click()
    }
}

export const onSearchBooks = new OnSearchBooks();