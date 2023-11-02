import {populateLoginFormaAndClick} from '../../common/utilities';
let email
let pasword
describe('example nopcommerce', () => {
    beforeEach(() => {
        cy.visit('https://demo.nopcommerce.com/')
        cy.fixture('example.json').then((Data) => {
            email = Data.email
            pasword = Data.pasword
        })
    })

    it("Registrate", () => {
        cy.get('.ico-register').click()
        cy.get('#gender-male').click()
        cy.get('#FirstName').type("Bakir")
        cy.get('#LastName').type("Dodik")
        cy.get('[name="DateOfBirthDay"]').select("2")
        cy.get('[name="DateOfBirthMonth"]').select("October")
        cy.get('[name="DateOfBirthYear"]').select("1992")
        cy.get('#Email').type("bakirvolidodika@mnogo.com")
        cy.get('#Company').type("Basketball Club B.I.G.")
        cy.get('#Password').type("123456789")
        cy.get('#ConfirmPassword').type("123456789")
        cy.get('#register-button').click()
    })
    it("Login", () => {
        populateLoginFormaAndClick(email, pasword)
    })





})