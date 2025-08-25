/// <reference types = "cypress"/>

import storeEle from "./locators";



const dateDetails = new storeEle;
describe("", () => {
  const dataTransfer = new DataTransfer();
  it("Navihate to date picker", () => {
    cy.visit(Cypress.env("baseUrl"));
    dateDetails.enterTodayDate().type(Date.now() + '{enter}')
  })


  it("drag and drop practice", () => {

    cy.visit(Cypress.env("dragAndDrop"));
    cy.get("iframe.demo-frame").then($iframe => {
      const body = $iframe.contents().find("body")
      cy.wrap(body).find("h5[class='ui-widget-header']").as("dragFirst")
      cy.wrap(body).find("div[class='ui-widget-content ui-state-default ui-droppable']").as("dropArea")
    });
    cy.get("@dragFirst").first().trigger("dragstart", { dataTransfer })
    cy.get("@dropArea").trigger('drop', { dataTransfer })
  });

  it("use custom commands for drana and drop", () => {
    cy.visit(Cypress.env("dragAndDrop"));
    cy.drangAndDropp("h5[class='ui-widget-header']", "div[class='ui-widget-content ui-state-default ui-droppable']")
  });
  
   it.only("use custom commands for drana and drop123", () => {
    cy.visit(Cypress.env("dragAndDrop"));
    cy.drangAndDropp(dateDetails.column1, dateDetails.column2)
  })
})

/*
format:

 const dt = dataTransfer()

    cy.get('#column-a')
      .trigger('dragstart', { dataTransfer: dt })

    cy.get('#column-b')
      .trigger('drop', { dataTransfer: dt })

    cy.get('#column-a')
      .trigger('dragend')

      */