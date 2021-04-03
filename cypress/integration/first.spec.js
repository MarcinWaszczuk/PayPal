describe('PayPal Tests', () => {
    const fname = 'Name'
    const lname = 'Surname'
    const email ='test@mail.com'
    const psswd = 'Paword123#$'

    it('Go to Sign Up', () => {
        cy.visit('www.sandbox.paypal.com/')
        cy.get('[id$=ctaId]').click()
        cy.get('[id$=radio-personal]').should('be.checked')
        cy.get('.btn').contains('Next').click()
    })

    it('Submit empty form', () => {
        cy.get('.vx_btn').contains('Next').click()
        cy.get('#PageMainForm').should('contain', 'Email is required')
                               .and('contain', 'Legal first name is required')
                               .and('contain', 'Legal last name is required')
                               .and('contain', 'We need a password to create an account for you.')
                               .and('contain', "Your passwords don't match. Please retype your password to confirm it")

    })
    
    it('Fill out the form', () => {
        cy.get('input[name=paypalAccountData_email]').type(email)
        cy.get('input[name=paypalAccountData_firstName]').type(fname)
        cy.get('input[name=paypalAccountData_lastName]').type(lname)
        cy.get('input[name=paypalAccountData_password]').type(psswd)
        cy.get('input[name=paypalAccountData_confirmPassword]').type(psswd)
        cy.get('.vx_btn').contains('Next').click()
        cy.get('.notification').contains('Walked away? Or stuck for some reason? Please start over for your security.')
    })


})