describe('Test Suit', function(){
    it('Lihat-Facilitator', function() {
        cy.visit('https://admin.pkh.dojobox.id/')
            cy.contains('Welcome Back!').should('have.text', 'Welcome Back!')    //Assertions
        cy.get('#input-email').type('e@dojobox.id').should('exist')
        cy.get('#input-password').type('admin{enter}')
            cy.contains('Facilitator').should('exist')      //Assertions
        cy.get('#dataTable_filter > label > .form-control').type('facilitator-vio')
        cy.wait(1350)
        cy.get('tbody > :nth-child(1) > .dt-center').click();
        cy.get('[href="facilitator/detail/336"]').contains('Lihat').click();
        cy.get('.justify-content-end > .btn-primary').click()
    })
})