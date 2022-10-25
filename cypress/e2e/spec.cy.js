describe('home page ', () => {

  it('You must visit the site ', function () {
    cy.visit('https://curriculoregina.web.app/')

  })
  it('Visit the website and click on the menu options', function () {
    cy.visit('https://curriculoregina.web.app/')
    cy.get('[id^=about]').click()
    cy.get('[id^=experience]').click()
    cy.get('[id^=education]').click()
    cy.get('[id^=awards]').click()
    cy.get('[id^=skills]').click()
    cy.get('[id^=language]').click()
    cy.get('[id^=interests]').click()
    cy.get('[id^=about]').click()
  })
})
