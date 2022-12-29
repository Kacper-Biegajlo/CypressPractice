describe("Newsletter Subscribe Form", () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })
    it("allows users to subscribe to email list", () => {
        cy.getByData("email-input").type("KacperTheTester@gmail.com")
        cy.getByData("submit-button").click()
        cy.getByData("success-message").should("exist").contains(
            "KacperTheTester@gmail.com")
    })
    it("does not allow an invalid email adress", () => {
        cy.getByData("email-input").type("SusKacper")
        cy.getByData("submit-button").click()
        cy.getByData("success-message").should("not.exist")
    })
    it("does not allow already registered email adress", () => {
        cy.getByData("email-input").type("john@example.com")
        cy.getByData("submit-button").click()
        cy.getByData("server-error-message").should("exist").contains(
            "Please use a different email address.")
    })

})