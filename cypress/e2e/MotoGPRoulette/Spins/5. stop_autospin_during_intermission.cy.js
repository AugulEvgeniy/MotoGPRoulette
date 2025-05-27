describe('Autospin is played without issues', () => {
    it('Should check that spin counter updates correctly, and autospin stops after all spins)', () => {

        cy.visitTestEnvironment()
        cy.interceptStartGame()


        cy.window({ timeout: 25000 }).should((win) => {
            const start_button = win.game.scene.scenes[1].gameContainer.list[5].list[0].visible;
            expect(start_button, 'Game is loaded').to.be.true
        })


        cy.window().should((win) => {
            const chip = win.game.scene.scenes[1].gameContainer.list[7].activeButton.layout.name;
            expect(chip).to.include("chip_1")
        })

        cy.window().then((win) => {
            win.game.scene.scenes[1].gameContainer.stakeSelector.dozensButtons[1].list[0].emit('pointerdown')
            cy.wait(50)
            win.game.scene.scenes[1].gameContainer.startGroupButtons.autoplayButton.emit('pointerdown')
        })

        cy.wait(500)

        cy.window().then((win) => {
            win.game.scene.scenes[1].gameContainer.autoplaySpinsSelect.list[2].list[0].emit('pointerdown')
        })

        cy.window().then((win) => {
            win.game.scene.scenes[1].gameContainer.autoplaySpinsSelect.list[7].list[0].emit('pointerdown')
        })

        // 10

        cy.wait('@startGame', { timeout: 25000}).its('response.body').then((body) => {
            const stakes = body;
            try {
                expect(stakes.gameResult.stakePence).to.equal(50);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }   
        })

        cy.wait(150)
        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.roulette.list[2].list[2].text, 'Spin count is 9').to.equal('9');
                expect(win.game.scene.scenes[1].gameContainer.roulette.list[1].visible, 'Stop auto button is visible').to.be.true;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }   
        })

        cy.wait(700)
        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.roulette.list[2].visible, 'Stop auto button is visible').to.be.true;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }   
        })

        cy.window({timeout: 20000}).should((win) => {
            const table = win.game.scene.scenes[1].gameContainer.stakeSelector.visible;
            expect(table, 'The game returns to the table').to.be.true
        })

        cy.window().then((win) => {
            win.game.scene.scenes[1].gameContainer.startGroupButtons.list[1].emit('pointerdown');
            win.game.scene.scenes[1].gameContainer.stakeSelector.dozensButtons[1].list[0].emit('pointerdown')
        })

        cy.wait(5000)
        
        cy.window({ timeout: 0}).should((win) => {
            const roulette = win.game.scene.scenes[1].gameContainer.roulette.visible;
            expect(roulette, 'Spin is not played').to.be.false;

            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.reBetButton.active, 'Rebet button is active').to.be.true;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.raceButton.active, 'RaceButton button is active').to.be.true;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.multiplyButton.active, 'Multiply button is active').to.be.true;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }
            
            try {
                expect(win.game.scene.scenes[1].gameContainer.startGroupButtons.autoplayButton.list[5].text, 'Auto spin button is displayed instead of Stop Auto').to.equal('AUTO SPIN');
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }   
        })
        })
    }) 

            