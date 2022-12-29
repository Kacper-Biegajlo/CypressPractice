describe('home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
  
  context("Hero section", () => {
    it('h1 contains the correct text', () => {
      cy.getByData("hero-heading").contains(
        "Testing Next.js Applications with Cypress")
    })
    it("features on the homepage are correct", () => { 
      cy.get("dt").eq(0).contains("4 Courses")
      cy.get("dt").eq(1).contains("25+ Lessons")
      cy.get("dt").eq(2).contains("Free and Open Source")
    })
  })

  context("Courses section", () => {
    it.only("Course: Testing Your First Next.js Application", () => {
      cy.getByData("course-0").find("a").eq(3).click()
      /// location Api used to get pathname which is the url for this pp
      cy.location("pathname").should("eq", "/testing-your-first-application")
    })
    it.only("Course: Testing Foundations", () => {
      cy.getByData("course-1").find("a").eq(3).click()
      /// location Api used to get pathname which is the url for this pp
      cy.location("pathname").should("eq", "/testing-foundations")
    })
    it.only("Course: Cypress Fundamentals", () => {
      cy.getByData("course-2").find("a").eq(3).click()
      /// location Api used to get pathname which is the url for this pp
      cy.location("pathname").should("eq", "/cypress-fundamentals")
    })
  })
})