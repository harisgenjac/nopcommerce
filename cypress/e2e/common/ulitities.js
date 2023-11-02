
/**
 * Populate login credentials
 * @param {*} username 
 * @param {*} password 
 */
export const populateLoginFormaAndClick = (email,password) => {
    cy.get('.ico-login').should('be.visible').click()
    cy.get('#Email').should('be.visible').type(email)
    cy.get('#Password').should('be.visible').type(password)
    cy.get('form > .buttons > .button-1').should('be.visible').click()
}
