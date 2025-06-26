describe('Autospin is played without issues', () => {
    it('Should check that spin counter updates correctly, and autospin stops after all spins)', () => {

        cy.visitTestEnvironment()
        cy.intercept('startgame').as('startGame')


        cy.window({ timeout: 50000 }).should((win) => {
            const start_button = win.game.scene.scenes[1].gameContainer.startGroupButtons.list[0].visible;
            expect(start_button, 'Game is loaded').to.be.true
        })


        cy.window().should((win) => {
            const chip = win.game.scene.scenes[1].gameContainer.betPanel.activeButton.layout.name;
            expect(chip).to.include("chip_2")
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
            win.game.scene.scenes[1].gameContainer.autoplaySpinsSelect.startSpinsButton.list[0].emit('pointerdown')
        })

        // 10

        cy.wait('@startGame', { timeout: 20000 }).its('response.body').then((body) => {
            try {
                expect(body.gameResult.stakePence).to.equal(100);
                cy.task("logCatch", `stakePence is 100`);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }   
        })

        cy.wait(300)
        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.roulette.list[2].list[2].text, 'Spin count is 9').to.equal('9');
                expect(win.game.scene.scenes[1].gameContainer.roulette.list[2].visible, 'Stop auto button is visible').to.be.true;
                cy.task("logCatch", `Spin count is 9, Stop Auto button is visible`);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }   
        })

        cy.window({timeout: 20000}).should((win) => {
            const table = win.game.scene.scenes[1].gameContainer.stakeSelector.visible;
            expect(table, 'The game returns to the table').to.be.true
        })

        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.reBetButton.active, 'Rebet button is disabled').to.be.false;
                cy.task("logCatch", `Rebet button is disabled`);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }

            try {
                const auto_button = win.game.scene.scenes[1].gameContainer.startGroupButtons.list[1].list[3].text
                expect(auto_button, 'Spin count is 9').to.equal('9')
                cy.task("logCatch", `Spin count is 9`);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.raceButton.active, 'RaceButton button is disabled').to.be.false;
                cy.task("logCatch", `RaceButton is disabled`);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.multiplyButton.active, 'Multiply button is disabled').to.be.false;
                cy.task("logCatch", `Multiply button is disabled`);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.startGroupButtons.startButton.active, 'Spin button is disabled').to.be.false;
                cy.task("logCatch", `Spin button is disabled`);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.startGroupButtons.resetButton.active, 'Reset button is disabled').to.be.false;
                cy.task("logCatch", `Reset button is disabled`);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }
        })


        // 9

        cy.wait('@startGame', { timeout: 20000 }).its('response.body').then((body) => {
            try {
                expect(body.gameResult.stakePence).to.equal(100);
                cy.task("logCatch", `stakePence is 100`);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }   
        })

        cy.wait(150)
        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.roulette.list[2].list[2].text, 'Spin count is 8').to.equal('8');
                expect(win.game.scene.scenes[1].gameContainer.roulette.list[2].visible, 'Stop auto button is visible').to.be.true;
                cy.task("logCatch", `Spin count is 8, Stop Auto button is visible`);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }   
        })

        cy.window({timeout: 20000}).should((win) => {
            const table = win.game.scene.scenes[1].gameContainer.stakeSelector.visible;
            expect(table, 'The game returns to the table').to.be.true
        })

        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.reBetButton.active, 'Rebet button is disabled').to.be.false;
                cy.task("logCatch", `Rebet button is disabled`);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }

            try {
                const auto_button = win.game.scene.scenes[1].gameContainer.startGroupButtons.list[1].list[3].text
                expect(auto_button, 'Spin count is 8').to.equal('8')
                cy.task("logCatch", `Spin count is 8`);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.raceButton.active, 'RaceButton button is disabled').to.be.false;
                cy.task("logCatch", `RaceButton is disabled`);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.multiplyButton.active, 'Multiply button is disabled').to.be.false;
                cy.task("logCatch", `Multiply button is disabled`);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.startGroupButtons.startButton.active, 'Spin button is disabled').to.be.false;
                cy.task("logCatch", `Spin button is disabled`);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.startGroupButtons.resetButton.active, 'Reset button is disabled').to.be.false;
                cy.task("logCatch", `Reset button is disabled`);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }

        })


        // 8

        cy.wait('@startGame', { timeout: 20000 }).its('response.body').then((body) => {
            try {
                expect(body.gameResult.stakePence).to.equal(100);
                cy.task("logCatch", `stakePence is 100`);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }   
        })

        cy.wait(150)
        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.roulette.list[2].list[2].text, 'Spin count is 7').to.equal('7');
                expect(win.game.scene.scenes[1].gameContainer.roulette.list[2].visible, 'Stop auto button is visible').to.be.true;
                cy.task("logCatch", `Spin count is 7, Stop Auto button is visible`);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }   
        })

        cy.window({timeout: 20000}).should((win) => {
            const table = win.game.scene.scenes[1].gameContainer.stakeSelector.visible;
            expect(table, 'The game returns to the table').to.be.true
        })

        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.reBetButton.active, 'Rebet button is disabled').to.be.false;
                cy.task("logCatch", `Rebet button is disabled`);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }

            try {
                const auto_button = win.game.scene.scenes[1].gameContainer.startGroupButtons.list[1].list[3].text
                expect(auto_button, 'Spin count is 7').to.equal('7')
                cy.task("logCatch", `Spin count is 7`);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.raceButton.active, 'RaceButton button is disabled').to.be.false;
                cy.task("logCatch", `RaceButton is disabled`);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.multiplyButton.active, 'Multiply button is disabled').to.be.false;
                cy.task("logCatch", `Multiply button is disabled`);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.startGroupButtons.startButton.active, 'Spin button is disabled').to.be.false;
                cy.task("logCatch", `Spin button is disabled`);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.startGroupButtons.resetButton.active, 'Reset button is disabled').to.be.false;
                cy.task("logCatch", `Reset button is disabled`);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }
        })


        // 7

        cy.wait('@startGame',).its('response.body').then((body) => {
            try {
                expect(body.gameResult.stakePence).to.equal(100);
                cy.task("logCatch", `stakePence is 100`);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }   
        })

        cy.wait(150)
        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.roulette.list[2].list[2].text, 'Spin count is 6').to.equal('6');
                expect(win.game.scene.scenes[1].gameContainer.roulette.list[2].visible, 'Stop auto button is visible').to.be.true;
                cy.task("logCatch", `Spin count is 6, Stop Auto button is visible`);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }   
        })

        cy.window({timeout: 20000}).should((win) => {
            const table = win.game.scene.scenes[1].gameContainer.stakeSelector.visible;
            expect(table, 'The game returns to the table').to.be.true
        })

        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.reBetButton.active, 'Rebet button is disabled').to.be.false;
                cy.task("logCatch", `Rebet button is disabled`);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }

            try {
                const auto_button = win.game.scene.scenes[1].gameContainer.startGroupButtons.list[1].list[3].text
                expect(auto_button, 'Spin count is 6').to.equal('6')
                cy.task("logCatch", `Spin count is 6`);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.raceButton.active, 'RaceButton button is disabled').to.be.false;
                cy.task("logCatch", `RaceButton is disabled`);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.multiplyButton.active, 'Multiply button is disabled').to.be.false;
                cy.task("logCatch", `Multiply button is disabled`);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.startGroupButtons.startButton.active, 'Spin button is disabled').to.be.false;
                cy.task("logCatch", `Spin button is disabled`);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.startGroupButtons.resetButton.active, 'Reset button is disabled').to.be.false;
                cy.task("logCatch", `Reset button is disabled`);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }

        })


        // 6

        cy.wait('@startGame',).its('response.body').then((body) => {
            try {
                expect(body.gameResult.stakePence).to.equal(100);
                cy.task("logCatch", `stakePence is 100`);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }   
        })

        cy.wait(150)
        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.roulette.list[2].list[2].text, 'Spin count is 5').to.equal('5');
                expect(win.game.scene.scenes[1].gameContainer.roulette.list[2].visible, 'Stop auto button is visible').to.be.true;
                cy.task("logCatch", `Spin count is 5, Stop Auto button is visible`);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }   
        })

        cy.window({timeout: 20000}).should((win) => {
            const table = win.game.scene.scenes[1].gameContainer.stakeSelector.visible;
            expect(table, 'The game returns to the table').to.be.true
        })

        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.reBetButton.active, 'Rebet button is disabled').to.be.false;
                cy.task("logCatch", `Rebet button is disabled`);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }

            try {
                const auto_button = win.game.scene.scenes[1].gameContainer.startGroupButtons.list[1].list[3].text
                expect(auto_button, 'Spin count is 5').to.equal('5')
                cy.task("logCatch", `Spin count is 5`);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.raceButton.active, 'RaceButton button is disabled').to.be.false;
                cy.task("logCatch", `RaceButton is disabled`);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.multiplyButton.active, 'Multiply button is disabled').to.be.false;
                cy.task("logCatch", `Multiply button is disabled`);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.startGroupButtons.startButton.active, 'Spin button is disabled').to.be.false;
                cy.task("logCatch", `Spin button is disabled`);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.startGroupButtons.resetButton.active, 'Reset button is disabled').to.be.false;
                cy.task("logCatch", `Reset button is disabled`);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }
        })

        // 5

        cy.wait('@startGame',).its('response.body').then((body) => {
            try {
                expect(body.gameResult.stakePence).to.equal(100);
                cy.task("logCatch", `stakePence is 100`);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }   
        })

        cy.wait(150)
        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.roulette.list[2].list[2].text, 'Spin count is 4').to.equal('4');
                expect(win.game.scene.scenes[1].gameContainer.roulette.list[2].visible, 'Stop auto button is visible').to.be.true;
                cy.task("logCatch", `Spin count is 4, Stop Auto button is visible`);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }   
        })

        cy.window({timeout: 20000}).should((win) => {
            const table = win.game.scene.scenes[1].gameContainer.stakeSelector.visible;
            expect(table, 'The game returns to the table').to.be.true
        })

        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.reBetButton.active, 'Rebet button is disabled').to.be.false;
                cy.task("logCatch", `Rebet button is disabled`);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }

            try {
                const auto_button = win.game.scene.scenes[1].gameContainer.startGroupButtons.list[1].list[3].text
                expect(auto_button, 'Spin count is 4').to.equal('4')
                cy.task("logCatch", `Spin count is 4`);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.raceButton.active, 'RaceButton button is disabled').to.be.false;
                cy.task("logCatch", `RaceButton is disabled`);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.multiplyButton.active, 'Multiply button is disabled').to.be.false;
                cy.task("logCatch", `Multiply button is disabled`);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.startGroupButtons.startButton.active, 'Spin button is disabled').to.be.false;
                cy.task("logCatch", `Spin button is disabled`);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.startGroupButtons.resetButton.active, 'Reset button is disabled').to.be.false;
                cy.task("logCatch", `Reset button is disabled`);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }
        })


        // 4

        cy.wait('@startGame',).its('response.body').then((body) => {
            try {
                expect(body.gameResult.stakePence).to.equal(100);
                cy.task("logCatch", `stakePence is 100`);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }   
        })

        cy.wait(150)
        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.roulette.list[2].list[2].text, 'Spin count is 3').to.equal('3');
                expect(win.game.scene.scenes[1].gameContainer.roulette.list[2].visible, 'Stop auto button is visible').to.be.true;
                cy.task("logCatch", `Spin count is 3, Stop Auto button is visible`);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }   
        })

        cy.window({timeout: 20000}).should((win) => {
            const table = win.game.scene.scenes[1].gameContainer.stakeSelector.visible;
            expect(table, 'The game returns to the table').to.be.true
        })

        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.reBetButton.active, 'Rebet button is disabled').to.be.false;
                cy.task("logCatch", `Rebet button is disabled`);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }

            try {
                const auto_button = win.game.scene.scenes[1].gameContainer.startGroupButtons.list[1].list[3].text
                expect(auto_button, 'Spin count is 3').to.equal('3')
                cy.task("logCatch", `Spin count is 3`);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.raceButton.active, 'RaceButton button is disabled').to.be.false;
                cy.task("logCatch", `RaceButton is disabled`);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.multiplyButton.active, 'Multiply button is disabled').to.be.false;
                cy.task("logCatch", `Multiply button is disabled`);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.startGroupButtons.startButton.active, 'Spin button is disabled').to.be.false;
                cy.task("logCatch", `Spin button is disabled`);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.startGroupButtons.resetButton.active, 'Reset button is disabled').to.be.false;
                cy.task("logCatch", `Reset button is disabled`);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }

        })


        // 3

        cy.wait('@startGame',).its('response.body').then((body) => {
            try {
                expect(body.gameResult.stakePence).to.equal(100);
                cy.task("logCatch", `stakePence is 100`);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }   
        })

        cy.wait(150)
        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.roulette.list[2].list[2].text, 'Spin count is 2').to.equal('2');
                expect(win.game.scene.scenes[1].gameContainer.roulette.list[2].visible, 'Stop auto button is visible').to.be.true;
                cy.task("logCatch", `Spin count is 2, Stop Auto button is visible`);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }   
        })

        cy.window({timeout: 20000}).should((win) => {
            const table = win.game.scene.scenes[1].gameContainer.stakeSelector.visible;
            expect(table, 'The game returns to the table').to.be.true
        })

        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.reBetButton.active, 'Rebet button is disabled').to.be.false;
                cy.task("logCatch", `Rebet button is disabled`);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }

            try {
                const auto_button = win.game.scene.scenes[1].gameContainer.startGroupButtons.list[1].list[3].text
                expect(auto_button, 'Spin count is 2').to.equal('2')
                cy.task("logCatch", `Spin count is 2`);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.raceButton.active, 'RaceButton button is disabled').to.be.false;
                cy.task("logCatch", `RaceButton is disabled`);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.multiplyButton.active, 'Multiply button is disabled').to.be.false;
                cy.task("logCatch", `Multiply button is disabled`);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.startGroupButtons.startButton.active, 'Spin button is disabled').to.be.false;
                cy.task("logCatch", `Spin button is disabled`);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.startGroupButtons.resetButton.active, 'Reset button is disabled').to.be.false;
                cy.task("logCatch", `Reset button is disabled`);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }
        })

        // 2

        cy.wait('@startGame',).its('response.body').then((body) => {
            try {
                expect(body.gameResult.stakePence).to.equal(100);
                cy.task("logCatch", `stakePence is 100`);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }   
        })

        cy.wait(150)
        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.roulette.list[2].list[2].text, 'Spin count is 1').to.equal('1');
                expect(win.game.scene.scenes[1].gameContainer.roulette.list[2].visible, 'Stop auto button is visible').to.be.true;
                cy.task("logCatch", `Spin count is 1, Stop Auto button is visible`);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }   
        })

        cy.window({timeout: 20000}).should((win) => {
            const table = win.game.scene.scenes[1].gameContainer.stakeSelector.visible;
            expect(table, 'The game returns to the table').to.be.true
        })

        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.reBetButton.active, 'Rebet button is disabled').to.be.false;
                cy.task("logCatch", `Rebet button is disabled`);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }

            try {
                const auto_button = win.game.scene.scenes[1].gameContainer.startGroupButtons.list[1].list[3].text
                expect(auto_button, 'Spin count is 1').to.equal('1')
                cy.task("logCatch", `Spin count is 1`);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.raceButton.active, 'RaceButton button is disabled').to.be.false;
                cy.task("logCatch", `RaceButton is disabled`);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.multiplyButton.active, 'Multiply button is disabled').to.be.false;
                cy.task("logCatch", `Multiply button is disabled`);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.startGroupButtons.startButton.active, 'Spin button is disabled').to.be.false;
                cy.task("logCatch", `Spin button is disabled`);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.startGroupButtons.resetButton.active, 'Reset button is disabled').to.be.false;
                cy.task("logCatch", `Reset button is disabled`);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }
        })

        // 1

        cy.wait('@startGame',).its('response.body').then((body) => {
            try {
                expect(body.gameResult.stakePence).to.equal(100);
                cy.task("logCatch", `StakePence is 100`);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }   
        })

        cy.wait(150)
        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.roulette.list[2].list[2].text, 'Spin count is 0').to.equal('0');
                expect(win.game.scene.scenes[1].gameContainer.roulette.list[2].visible, 'Stop auto button is visible').to.be.true;
                cy.task("logCatch", `Spin count is 0, Stop Auto button is visible`);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }   
        })

        cy.window({timeout: 20000}).should((win) => {
            const table = win.game.scene.scenes[1].gameContainer.stakeSelector.visible;
            expect(table, 'The game returns to the table').to.be.true
        })

        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.reBetButton.active, 'Rebet button is active').to.be.true;
                cy.task("logCatch", `Rebet button is disabled`);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }

            try {
                const auto_button = win.game.scene.scenes[1].gameContainer.startGroupButtons.list[1].list[3].text
                expect(auto_button, 'Spin count is 0').to.equal('0')
                cy.task("logCatch", 'Spin count is 0');
            } catch (err) {
                cy.log('Assertion failed:', err.message);
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.raceButton.active, 'RaceButton button is active').to.be.true;
                cy.task("logCatch", `RaceButton is active`);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.multiplyButton.active, 'Multiply button is disabled').to.be.false;
                cy.task("logCatch", `Multiply button is disabled`);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.startGroupButtons.startButton.active, 'Spin button is disabled').to.be.false;
                cy.task("logCatch", `Spin button is disabled`);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.startGroupButtons.resetButton.active, 'Reset button is disabled').to.be.false;
                cy.task("logCatch", `Reset button is disabled`);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }
        })

        // The game works correctly after autospin

        cy.window({timeout: 20000}).should((win) => {
            const table = win.game.scene.scenes[1].gameContainer.stakeSelector.visible;
            expect(table, 'The game returns to the table').to.be.true
        })

        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.reBetButton.active, 'Rebet button is active').to.be.true;
                cy.task("logCatch", `Rebet button is disabled`);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }

            try {
                const auto_button = win.game.scene.scenes[1].gameContainer.startGroupButtons.autoplayButton.list[5].text
                expect(auto_button, 'Stop auto button is no longer displayed').to.equal('AUTO SPIN')
                cy.task("logCatch", `Stop auto button is no longer displayed`);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.raceButton.active, 'RaceButton button is active').to.be.true;
                cy.task("logCatch", `Race Button is active`);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }
        })

        cy.wait(1000)
        cy.window().then((win) => {
            win.game.scene.scenes[1].gameContainer.betPanel.list[1].list[0].emit('pointerdown')
        })

        cy.window().should((win) => {
            const chip = win.game.scene.scenes[1].gameContainer.betPanel.activeButton.layout.name;
            expect(chip).to.include("chip_0")
        })
        // to check that the game functions after the spin

        })
    }) 
