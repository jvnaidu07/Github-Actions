///<reference types= "cypress"/>

import storeEle from "./locators";
const Winhandle = new storeEle();
describe("", () => {
    it("windows handle", () => {
        cy.visit(Cypress.env("windowsHandle"));
        Winhandle.clickOnWindowsButton().invoke('removeAttr', "target").click()
        
    })
})