// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("drangAndDropp", (dragFirstEle, dragSecondEle) => {
  const dataTransfer = new DataTransfer();
  cy.get("iframe.demo-frame").then($iframe => {
    const body = $iframe.contents().find("body")
    cy.wrap(body).as("iframe")
  });
  cy.get("@iframe").find(dragFirstEle).first().trigger("dragstart", { dataTransfer })
  cy.get("@iframe").find(dragSecondEle).trigger("drop", { dataTransfer })

});