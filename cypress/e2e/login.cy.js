describe('Kasir Aja', () => {
    it('Login successfully with valid data', () => {
        cy.visit('https://kasirdemo.belajarqa.com')
        cy.url().should('include', '/login') 
        cy.get('#email').type('gustiramadhan57@gmail.com')
        cy.get('#password').type('123456789')
        cy.get('#root > div > div > div > div.css-1w7v3tn > div > button').click()
        cy.url().should('include', '/dashboard')
        cy.contains('kasirAja')
    })

    it('Failed to login with wrong password', () => {
        cy.visit('https://kasirdemo.belajarqa.com')
        cy.url().should('include', '/login') 
        cy.get('#email').type('gustiramadhan57@gmail.com')
        cy.get('#password').type('987654321')
        cy.get('#root > div > div > div > div.css-1w7v3tn > div > button').click()
        cy.contains('Kredensial yang Anda berikan salah')
    })

    it('Failed to login due to not filling in the password field', () => {
        cy.visit('https://kasirdemo.belajarqa.com')
        cy.url().should('include', '/login') 
        cy.get('#email').type('gustiramadhan57@gmail.com')
        cy.get('#root > div > div > div > div.css-1w7v3tn > div > button').click()
        cy.contains('"password" is not allowed to be empty')
    })
})