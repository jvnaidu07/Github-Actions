/// <reference types = "cypress"/>

import storeEle from "./locators";


const dialogBoxPage = new storeEle;
describe("", () => {
  it("dialog box", () => {
    cy.visit(Cypress.env("dialogBox"));
    cy.fixture("example").then(Profile => {
      const values = [Profile.name, Profile.email, Profile.body]
      cy.get("iframe.demo-frame").then($iframe => {
        const body = $iframe.contents().find("body")
        cy.wrap(body).as("Iframe")
      })
      cy.get("@Iframe").find(dialogBoxPage.abcd).first().should('have.text', 'Create new user').click()
      //cy.get("@Iframe").find(dialogBoxPage.abcd).first().click();
      cy.get("@Iframe").find(dialogBoxPage.clearAllFileds).each(($el, index) => {
        cy.wrap($el).clear().type(values[index]);
      })
    })
  })
});
