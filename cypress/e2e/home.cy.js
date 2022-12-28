describe('home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
  it('h1 contains the correct text', () => {
    cy.get("[data-test='hero-heading']").contains(
      "Testing Next.js Applications with Cypress")
  })
  it.only("features on the homepage are correct", () => { // since we are working on this test we use only to run only this one
    cy.get("dt").eq(0).contains("4 Courses")
    cy.get("dt").eq(1).contains("25+ Lessons")
    cy.get("dt").eq(2).contains("Free and Open Source")
  })
})