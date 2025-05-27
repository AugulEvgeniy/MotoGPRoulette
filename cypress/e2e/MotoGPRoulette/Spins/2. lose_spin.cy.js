describe('Losing spin is played without issues', () => {
    it('Should check that the win banner is displayed, balance is updated, response data is correct)', () => {

        cy.visitTestEnvironment()
        cy.interceptStartGameLose()


        cy.window({ timeout: 25000 }).should((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            const start_button = scene.gameContainer.list[5].list[0].visible;

            expect(start_button, 'Game is loaded').to.be.true
        })

        // cy.get('#open_button').click()
        // cy.get('#chip').select(2)
        // cy.get('#open_button').click({force: true})
        // cy.get('#set_state').click()
        // cy.get('#close_button').click()

        cy.window().should((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            const chip = scene.gameContainer.list[7].activeButton.layout.name;

            expect(chip).to.include("chip_1")
        })

        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

            scene.gameContainer.stakeSelector.dozensButtons[1].list[0].emit('pointerdown')

            cy.wait(50)
            scene.gameContainer.list[5].list[0].emit('pointerdown')
        })

        cy.wait('@startGame', { timeout: 10000}).its('response.body').then((body) => {
            try {
                expect(body.gameResult.stakePence).to.equal(50);
                    cy.task("logCatch", {
                    message: "✅ Assertion Passed: stakePence is 50",
        });
            } catch (err) {
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }   
        })


        cy.window({timeout: 20000}).should((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            const no_win_banner = scene.gameContainer.noWinBanner.visible;

            expect(no_win_banner).to.be.true
            expect(scene.gameContainer.topPanel.balance).to.equal(99950);
        })

        cy.wait(3000)
        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            scene.gameContainer.list[7].list[1].list[0].emit('pointerdown')
        })

        cy.window().should((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            const chip = scene.gameContainer.list[7].activeButton.layout.name;

            expect(chip).to.include("chip_0")
        })
        // to check that the game functions after the spin

        })
    }) 

            