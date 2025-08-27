class storeEle{

    column1 =  "h5[class='ui-widget-header']"
    column2 = "div[class='ui-widget-content ui-state-default ui-droppable']";
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

    
}

export default storeEle;