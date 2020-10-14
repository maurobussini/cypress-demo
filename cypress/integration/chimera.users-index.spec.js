/// <reference types="cypress" />

describe("chimera.sign-in", () => {

    beforeEach(()=> {
        cy.visit('/sign-in');
        cy.get('#userName').clear().type('mauro');
        cy.get('#password').clear().type('password');
        cy.get('button.btn.btn-block.btn-primary').click();        
        cy.wait(3000);
        cy.visit('/users');        
    });

    it('should navigate to users index', () => {
        cy.get(':nth-child(3) > .nav-link').click();
        cy.location('pathname').should('eq', '/users');
    });

    it('should find at least one element on table', () => {
        // cy.get('table.table.table-bordered.table-striped')
        //     .find('tbody>tr')
        //     .first()
        //     .find('td')
        //     .first()
        //     .next()
        //     .find('span').as('userId');

        // cy.get('@userId')
        //     .should('contain', 'Administrator')
        cy.get(':nth-child(1) > :nth-child(2) > [data-cy=userName]').should('contain', 'Administrator');
    });


    
});