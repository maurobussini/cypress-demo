/// <reference types="cypress" />

describe("chimera.sign-in", () => {

    it('should navigate to login form', () => {
        cy.visit('/sign-in');
    });

    it('should have header', () => {
        cy.visit('/sign-in');
        cy.get('h3.card-title').contains("Authentication");
    });

    it('should have inputs and button', () => {
        cy.visit('/sign-in');
        cy.get('#userName').should("exist");
        cy.get('#password').should("exist");
        cy.get('button.btn.btn-block.btn-primary').should("exist");
    });

    it('should show warning message with invalid credentials', () => {
        cy.visit('/sign-in');
        cy.get('#userName').clear().type('mauro');
        cy.get('#password').clear().type('wrongpassword');
        cy.get('button.btn.btn-block.btn-primary').click();
        cy.get('.toast.toast-warning').first().contains('invalid');
    });

    it('should show confirm message with valid credentials', () => {
        cy.visit('/sign-in');
        cy.get('#userName').clear().type('mauro');
        cy.get('#password').clear().type('password');
        cy.get('button.btn.btn-block.btn-primary').click();
        cy.get('.toast.toast-success').first().contains('Welcome');
    });

    it('should navigate to home page on success', () => {
        cy.visit('/sign-in');
        cy.get('#userName').clear().type('mauro');
        cy.get('#password').clear().type('password');
        cy.get('button.btn.btn-block.btn-primary').click();
        cy.location('pathname').should('eq', '/');
    });

});