describe('Test Suit', function(){
    it('Tambah-Facilitator', function() {
        cy.visit('https://admin.pkh.dojobox.id/')
            cy.contains('Welcome Back!').should('have.text', 'Welcome Back!')    //Assertions
        cy.get('#input-email').type('e@dojobox.id').should('exist')
        cy.get('#input-password').type('admin{enter}')
            cy.contains('Facilitator').should('exist')      //Assertions
        cy.get('.d-flex > .btn').click()
            cy.contains('Tambah Data Fasilitator').should('exist')
        cy.get('#user_fullname').type('Facilitator-vio')
        cy.get('#user_email').type('vioputri@gmail.com')
        cy.get('#user_password').type('vioputri0807')
        cy.get('#user_province_id').select('JAWA TIMUR').should('have.value', '35')
        cy.get('#user_city_id').select('KAB. MALANG').should('have.value', '3507')
        cy.get('#user_subdistrict_id').select('Turen').should('have.value', '350709')
        cy.get('#user_address').type('jln di turen ')
        cy.get('.custom-control').click()
        cy.get('#add').click()
        cy.get('#generalModal > .modal-dialog > .modal-content > .modal-footer > .btn').click()
        cy.go('back')
    })
})