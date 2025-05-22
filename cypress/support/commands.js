Cypress.Commands.add('visitTestEnvironment', () => {
  const testUrl = 'http://highlight.spinberry.com/applepen/HG_MotoGP_Roulette/index.html?go=dev&serverAddress=https://riw-dev.olsworth.com&productId=riwo-extern-1pt&token=123456&currency=GBP&lang=en&testConfig=local&forceDevice=tablet&hideCurrency=false'
  cy.visit(testUrl, { timeout: 10000 })
})