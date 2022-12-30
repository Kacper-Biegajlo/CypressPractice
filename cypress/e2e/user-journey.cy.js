describe("User Journey", () => {
    it("a user can find a course on the home page and complete the courses lessons", () => {
        cy.visit('http://localhost:3000/')
        cy.getByData("course-0").find("a").eq(3).click()
        cy.location("pathname").should("eq", "/testing-your-first-application")
        cy.getByData("next-lesson-button").click()
        cy.location("pathname").should(
            "eq",
            "/testing-your-first-application/app-install-and-overview")
        
        cy.getByData("challenge-answer-0").click()
        cy.getByData("next-lesson-button").should("exist").click()
        cy.location("pathname").should(
            "eq",
            "/testing-your-first-application/installing-cypress-and-writing-our-first-test")
        
        cy.getByData("challenge-answer-0").click()
        cy.getByData("next-lesson-button").should("exist").click()
        cy.location("pathname").should(
            "eq",
            "/testing-your-first-application/setting-up-data-before-each-test")
        
            /// Checked false checkbox to verify that "next lesson" button does not show
        cy.getByData("challenge-answer-1").click()
        cy.getByData("next-lesson-button").should("not.be.visible")
        
        cy.getByData("challenge-answer-0").click()
        cy.getByData("next-lesson-button").should("exist").click()
        
        cy.location("pathname").should("eq", "/")
    })
})