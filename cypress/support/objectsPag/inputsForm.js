class OnInputForm {
  inputForm() {
    let CONTAIN = {
      buttonFOrm: "Elements",
      buttonTextBox: "Text Box",
      textUserName: "Yan Harold Muñoz Dominguez",
      textEmail: "yanharold@prueba.com",
      textCurrent: "Calle 10 No. 9 - 78  Centro",
      textPermanent: "Calle 10 No. 9 - 78  Centro, Bogota Colombia",
      buttonSubmit: "Submit",
    };

    let LOCATOR = {
      inputUserName: '[id="userName"]',
      inputEmail: '[id="userEmail"]',
      inputCurrent: '[id="currentAddress"]',
      inputPermanent: '[id="permanentAddress"]',
    };

    cy.contains(CONTAIN.buttonFOrm).click();
    cy.contains(CONTAIN.buttonTextBox).click();
    cy.get(LOCATOR.inputUserName)
      .type(CONTAIN.textUserName)
      .should("have.value", CONTAIN.textUserName);
    cy.get(LOCATOR.inputEmail)
      .type(CONTAIN.textEmail)
      .should("have.value", CONTAIN.textEmail);
    cy.get(LOCATOR.inputCurrent)
      .type(CONTAIN.textCurrent)
      .should("have.value", CONTAIN.textCurrent);
    cy.get(LOCATOR.inputPermanent)
      .type(CONTAIN.textPermanent)
      .should("have.value", CONTAIN.textPermanent);
    cy.contains(CONTAIN.buttonSubmit).click();
  }

  checkForm() {
    let CONTAINCHECK = {
      buttonForm: "Elements",
      buttonCheck: "Check Box",
    };

    let LOCATORCHECK ={
        expandIcon: 'svg.rct-icon.rct-icon-expand-all',
        checkForm: 'span.rct-title',
        checkFormComplete: 'rct-icon rct-icon-uncheck'
    }
    cy.contains(CONTAINCHECK.buttonForm).click();
    cy.contains(CONTAINCHECK.buttonCheck).click();
    cy.get(LOCATORCHECK.expandIcon).click()
    cy.get(LOCATORCHECK.checkForm).contains('Commands').click()
    cy.get(LOCATORCHECK.checkForm).contains('Documents').click()
    cy.wait(2000)
    cy.get(LOCATORCHECK.checkForm).contains('Commands').click()
  }

  completeForm(){
    let CONTAINFORM = {
      buttonForm: "Elements",
      buttonForms: "Forms",
      buttonPractice: "Practice Form",
      firstName: 'Harold',
      lastName: 'Muñoz',
      emailUser: 'fakemail@gmail.com',
      genderRadio: 'Male'
    };
    let LOCATORFORM = {
      inputFirstName: '[id="firstName"]',
      inputLastName: '[id="lastName"]',
      inputUserEmail: '[id="userEmail"]',
      
    }

    cy.contains(CONTAINFORM.buttonForm).click()
    cy.contains(CONTAINFORM.buttonForms).click()
    cy.contains(CONTAINFORM.buttonPractice).click()
    cy.get(LOCATORFORM.inputFirstName).type(CONTAINFORM.firstName).should('have.value', CONTAINFORM.firstName)
    cy.get(LOCATORFORM.inputLastName).type(CONTAINFORM.lastName).should('have.value', CONTAINFORM.lastName)
    cy.get(LOCATORFORM.inputUserEmail).type(CONTAINFORM.emailUser).should('have.value', CONTAINFORM.emailUser)
    cy.contains(CONTAINFORM.genderRadio).click()
    


  }
}

export const onInputForm = new OnInputForm();
