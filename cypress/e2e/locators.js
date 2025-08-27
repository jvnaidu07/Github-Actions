class storeEle {

    column1 = "h5[class='ui-widget-header']"
    column2 = "div[class='ui-widget-content ui-state-default ui-droppable']";
    AllAccordions = "span[class='ui-accordion-header-icon ui-icon ui-icon-triangle-1-e']"
    FirstAcco = this.AllAccordions;
    accordions1(Index) {
        return cy.get(this.AllAccordions, { timeout: 60000 }).eq(Index)
    }

    thirdAccordion() {
        return this.accordions1(2)   // index starts at 0 → 0=1st, 1=2nd, 2=3rd
    }

    enterTodayDate() {
        return cy.get("input[type='text']")
    }
    selectCountryfromDropdown() {
        return cy.get("select")
    }
    fiveElelments(Index) {
        return cy.get("div[class='resp-tabs-container'] div a").eq(Index)
    }
    clickOnWindowsButton() {
        return this.fiveElelments(1)
    }
    accordions(Index) {
        return cy.get("span[class='ui-accordion-header-icon ui-icon ui-icon-triangle-1-e']", { timeout: 60000 }).eq(Index)
    }
    firstAccordion() {
        return this.accordions(0)
    }

}

export default storeEle;
