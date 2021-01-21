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
// Cypress.Commands.add("login", (email, password) => { ... })
//
Cypress.Commands.add('login', (username, password) => {
  cy.visit('/')
  cy.url().should('include', '/#/login')
  cy.request('post', '/mock/login', { username, password })
    .then(({ body: res }) => {
      if (res.success && res.code === 200) {
        cy.setCookie('token', res.data.token, {
          domain: Cypress.env('baseUrl')
        })
      }
    })
})
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
