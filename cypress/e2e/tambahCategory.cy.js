describe('Kasir Aja', () => {

    it('Successfully added a category by filling in all the fields', () => {
        //login
        cy.visit('https://kasirdemo.belajarqa.com')
        cy.url().should('include', '/login') 
        cy.get('#email').type('gustiramadhan57@gmail.com')
        cy.get('#password').type('123456789')
        cy.get('#root > div > div > div > div.css-1w7v3tn > div > button').click()
        cy.url().should('include', '/dashboard')
        cy.contains('kasirAja')
        
        //add category
        cy.get('#root > div > div > div.css-tnxwfz > div > a:nth-child(6)').click()
        cy.url().should('include','/categories')
        cy.get('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > a').click()
        cy.url().should('include','/create')
        cy.get('#nama').type('minuman aja')
        cy.get('#deskripsi').type('minuman aja enak, apalagi ...')
        cy.get('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > button').click()
        cy.url().should('include', '/categories')
    })

    it('Failed to add if not fill in all fields', () => {            
            //add category
            cy.get('#root > div > div > div.css-tnxwfz > div > a:nth-child(6)').click()
            cy.url().should('include','/categories')
            cy.get('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > a').click()
            cy.url().should('include','/create')
            cy.get('#deskripsi').type('minuman aja enak, apalagi ...')
            cy.get('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > button').click()
            cy.contains('"name" is not allowed to be empty')
        })

})