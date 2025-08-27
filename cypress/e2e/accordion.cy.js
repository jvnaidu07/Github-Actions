/// <reference types="cypress"/>

import storeEle from "./locators"


const accordionTabs = new storeEle;
describe("", () => {
    it("accordion practice",() => {
        cy.visit(Cypress.env("accordion"));

        cy.get("iframe.demo-frame").then($iframe => {
            const body = $iframe.contents().find("body");
            cy.wrap(body).as("iframe")
        })
        cy.get("@iframe").find(accordionTabs.AllAccordions).first().click();
    })
})
