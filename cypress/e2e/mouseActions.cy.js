/// <reference types = "cypress"/>

import storeEle from "./locators";



const moseAction = new storeEle;
describe("", () => {
    beforeEach(() => {
        cy.visit(Cypress.env("mouseActions"))
    })
    it("mouse actions in cypress", () => {
        cy.get("input[title='Enter First Name']").trigger('mouseover')
        cy.get("input[title='Enter First Name']").should('have.attr', 'title');
        cy.get("button[id='dblclick']").dblclick()
        cy.contains("Double Click Action is Performed").should('have.text', 'Double Click Action is Performed')
        cy.get("button[id='rightclick']").rightclick();
        cy.contains("Registration Form Alert Popup Mouse Event").should('contain.text', 'Registration Form')
    });
    
});