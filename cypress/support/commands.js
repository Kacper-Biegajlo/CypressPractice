/// <reference types="cypress" />

/// Custom Cypress comamand to "get" by data-test attribute
Cypress.Commands.add("getByData", (selector) => {
    return cy.get(`[data-test=${selector}]`)
})

