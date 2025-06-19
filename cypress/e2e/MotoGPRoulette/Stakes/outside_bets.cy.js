describe('All stake objects are sent and validated. Total Bet value and Balance updates correctly in UI', () => {
    it('"type": "dozen", 15 stake objects with every stake value', () =>{

        // cy.visitTestEnvironment()
        cy.interceptStartGame()
        const assertionErrors = []; // Array to collect stake validation errors
        const testUrl = 'http://localhost:8000/?productId=riwo-extern-1pt&lang=EN&currency=GBP&go=staging&serverAddress=https%3A%2F%2Friw-dev.olsworth.com&home=https://google.com'
        cy.visit(testUrl, { timeout: 100000 })

        cy.window({ timeout: 50000 }).should((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            const start_button = scene.gameContainer.startGroupButtons.list[0].visible;

            expect(start_button, 'Game is loaded').to.be.true
        })
        
        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            scene.gameContainer.betPanel.list[1].list[0].emit('pointerdown')
        })

        cy.window().should((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            const chip = scene.gameContainer.betPanel.activeButton.layout.name;

            expect(chip).to.include("chip_0")
        })

        cy.wait(500)
        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

            scene.gameContainer.stakeSelector.dozensButtons[0].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.dozensButtons[1].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.dozensButtons[2].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.highOrLowButtons[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.highOrLowButtons[1].emit('pointerdown')
            scene.gameContainer.stakeSelector.evenOrOddButtons[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.evenOrOddButtons[1].emit('pointerdown')
            scene.gameContainer.stakeSelector.redOrBlackButtons[0].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.redOrBlackButtons[1].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.columnButtons[0].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.columnButtons[1].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.columnButtons[2].list[0].emit('pointerdown')
        })


        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

        try {
            expect(scene.gameContainer.betPanel.list[9].text).to.include(1.2);
        } catch (err) {
            cy.log('Assertion failed:', err.message);
            cy.task("logCatch", `Assertion Failed: ${err.message}`);
        }

        // This assertion checks total bet value

            scene.gameContainer.betPanel.list[2].list[0].emit('pointerdown')
        })

        cy.window().should((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            const chip = scene.gameContainer.betPanel.activeButton.layout.name;

            expect(chip).to.include("chip_1")
        })

        cy.wait(1000)
        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

            scene.gameContainer.stakeSelector.dozensButtons[0].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.dozensButtons[1].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.dozensButtons[2].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.highOrLowButtons[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.highOrLowButtons[1].emit('pointerdown')
            scene.gameContainer.stakeSelector.evenOrOddButtons[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.evenOrOddButtons[1].emit('pointerdown')
            scene.gameContainer.stakeSelector.redOrBlackButtons[0].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.redOrBlackButtons[1].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.columnButtons[0].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.columnButtons[1].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.columnButtons[2].list[0].emit('pointerdown')
        })

        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

        try {
            expect(scene.gameContainer.betPanel.list[9].text).to.include(7.2);
        } catch (err) {
            cy.log('Assertion failed:', err.message);
            cy.task("logCatch", `Assertion Failed: ${err.message}`);
        }

            scene.gameContainer.betPanel.list[3].list[0].emit('pointerdown')
        })

        cy.window().should((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            const chip = scene.gameContainer.betPanel.activeButton.layout.name;

            expect(chip).to.include("chip_2")
        })

        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

            scene.gameContainer.stakeSelector.dozensButtons[0].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.dozensButtons[1].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.dozensButtons[2].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.highOrLowButtons[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.highOrLowButtons[1].emit('pointerdown')
            scene.gameContainer.stakeSelector.evenOrOddButtons[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.evenOrOddButtons[1].emit('pointerdown')
            scene.gameContainer.stakeSelector.redOrBlackButtons[0].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.redOrBlackButtons[1].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.columnButtons[0].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.columnButtons[1].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.columnButtons[2].list[0].emit('pointerdown')
        })


        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

        try {
            expect(scene.gameContainer.betPanel.list[9].text).to.include(19.2);
        } catch (err) {
            cy.log('Assertion failed:', err.message);
            cy.task("logCatch", `Assertion Failed: ${err.message}`);
        }

        // This assertion checks total bet value

            scene.gameContainer.betPanel.list[4].list[0].emit('pointerdown')
        })

        cy.window().should((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            const chip = scene.gameContainer.betPanel.activeButton.layout.name;

            expect(chip).to.include("chip_3")
        })

        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

            scene.gameContainer.stakeSelector.dozensButtons[0].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.dozensButtons[1].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.dozensButtons[2].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.highOrLowButtons[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.highOrLowButtons[1].emit('pointerdown')
            scene.gameContainer.stakeSelector.evenOrOddButtons[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.evenOrOddButtons[1].emit('pointerdown')
            scene.gameContainer.stakeSelector.redOrBlackButtons[0].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.redOrBlackButtons[1].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.columnButtons[0].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.columnButtons[1].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.columnButtons[2].list[0].emit('pointerdown')
        })


        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

        try {
            expect(scene.gameContainer.betPanel.list[9].text).to.include(79.2);
        } catch (err) {
            cy.log('Assertion failed:', err.message);
            cy.task("logCatch", `Assertion Failed: ${err.message}`);
        }

            scene.gameContainer.betPanel.list[5].list[0].emit('pointerdown')
        })

        cy.window().should((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            const chip = scene.gameContainer.betPanel.activeButton.layout.name;

            expect(chip).to.include("chip_4")
        })

        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

            scene.gameContainer.stakeSelector.dozensButtons[0].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.dozensButtons[1].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.dozensButtons[2].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.highOrLowButtons[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.highOrLowButtons[1].emit('pointerdown')
            scene.gameContainer.stakeSelector.evenOrOddButtons[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.evenOrOddButtons[1].emit('pointerdown')
            scene.gameContainer.stakeSelector.redOrBlackButtons[0].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.redOrBlackButtons[1].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.columnButtons[0].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.columnButtons[1].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.columnButtons[2].list[0].emit('pointerdown')
  
            cy.wait(300)
            scene.gameContainer.startGroupButtons.list[0].emit('pointerdown')
        })


        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

        try {
            expect(scene.gameContainer.betPanel.list[9].text).to.include(199.2);
        } catch (err) {
            assertionErrors.push(err.message);
        }   
        })


     cy.wait('@startGame', { timeout: 25000 })
  .its('response.body')
  .then((apiResponse) => {

    if (apiResponse.state === "INVALID") {
      throw new Error(`Invalid API state: ${JSON.stringify(apiResponse)}`);
    }

    cy.fixture('outside_bets.json').then((fixture) => {

      if (!apiResponse?.gameResult?.integrationResultData?.stakes) {
        throw new Error('API response missing stakes data');
      }
      if (!fixture?.gameResult?.integrationResultData?.stakes) {
        throw new Error('Fixture missing stakes data');
      }

      const apiStakes = apiResponse.gameResult.integrationResultData.stakes;
      const fixtureStakes = fixture.gameResult.integrationResultData.stakes;

      if (apiStakes.length !== fixtureStakes.length) {
        throw new Error(`Stakes count mismatch: API has ${apiStakes.length}, fixture expects ${fixtureStakes.length}`);
      }

      apiStakes.forEach((apiStake, index) => {
        const fixtureStake = fixtureStakes[index];
        expect(JSON.stringify(apiStake), `Stake at index ${index}`).to.deep.equal(JSON.stringify(fixtureStake));

      });

      cy.log('✅ All stakes match exactly:', apiStakes);
    });
})
})
})
            
describe('Bonus Game cells are not highlighted', () => {
    it('Dozen bets should not activate Bonus Game', () =>{
        cy.window().should((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            const bonus = scene.gameContainer.isShowBonusSectors.show;

            expect(bonus).to.be.false;
        })
    })
})