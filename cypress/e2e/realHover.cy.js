/// <reference types = "cypress"/>

import storeEle from "./locators";



const moseAction = new storeEle;
describe("", () => {

    it("mouse hover", () => {
        cy.visit("https://vinothqaacademy.com/mouse-event/")
        moseAction.mouseHover().last().realHover()

    })
})