Cypress.Commands.add('visitTestEnvironment', () => {
  const testUrl = 'http://highlight.spinberry.com/applepen/HG_MotoGP_Roulette/index.html?go=dev&serverAddress=https://riw-dev.olsworth.com&productId=riwo-extern-1pt&token=123456&currency=GBP&lang=en&testConfig=local&forceDevice=tablet&hideCurrency=false'
  cy.visit(testUrl, { timeout: 50000 })
})

Cypress.Commands.add('interceptStartGame', () => {
  cy.intercept('startgame').as('startGame')
})

Cypress.Commands.add('interceptStartGameRebet', () => {
  cy.intercept('startgame', { fixture: "request_for_rebet_roulette.json" }).as('startGame')
})

Cypress.Commands.add('interceptStartGameRebetRace', () => {
  cy.intercept('startgame', { fixture: "request_for_rebet_race_roulette.json" }).as('startGame')
})

Cypress.Commands.add('interceptStartGameRebetRace_2nd', () => {
  cy.intercept('startgame', { fixture: "request_for_rebet_race_roulette_2ndSpin.json" }).as('startGame')
})

Cypress.Commands.add('interceptStartGameLose', () => {
  cy.intercept('startgame', { fixture: "request_for_lose_spin_roulette.json" }).as('startGame')
})
