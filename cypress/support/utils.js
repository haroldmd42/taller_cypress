export function selectBookRandom() {
    cy.get(".rt-tr-group")
      .its("length")
      .then((rowCount) => {
        const randomIndex = Math.floor(Math.random() * rowCount);
        if (randomIndex >= 8) {
          cy.get(".action-buttons")
            .eq(randomIndex - 2)
            .click();
        } else if (randomIndex == 0) {
          cy.get(".action-buttons")
            .eq(randomIndex + 1)
            .click();
        } else {
          cy.get(".action-buttons").eq(randomIndex).click();
        }
      });
  }