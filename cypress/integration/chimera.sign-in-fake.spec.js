/// <reference types="cypress" />

describe("chimera.sign-in", () => {

    beforeEach(() => {
        cy.server();
        cy.route(
            "POST", 
            "https://chimera-authentication-api.azurewebsites.net/api/Authentication/SignIn", 
            {
                email: "pippo@zenprogramming.it",
                firstName: "Pippo",
                lastAccessDate: "2020-10-14T19:59:03.3356714Z",
                lastName: "Pluto",
                userId: "User-XXXX",
                userName: "pippo"
            }
        );
    });

    it('should navigate to login form', () => {
        cy.visit('/sign-in');
    });    

    it('should navigate to home page on success', () => {
        cy.visit('/sign-in');
        cy.get('#userName').clear().type('mauro');
        cy.get('#password').clear().type('password');
        cy.get('button.btn.btn-block.btn-primary').click();
        cy.location('pathname').should('eq', '/');
    });

});