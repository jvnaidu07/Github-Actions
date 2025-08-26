class storeEle{

    column1 =  "h5[class='ui-widget-header']"
    column2 = "div[class='ui-widget-content ui-state-default ui-droppable']";
    enterTodayDate() {
        return cy.get("input[type='text']")
    }
    selectCountryfromDropdown() {
        return cy.get("select")
    }
    
}

export default storeEle;