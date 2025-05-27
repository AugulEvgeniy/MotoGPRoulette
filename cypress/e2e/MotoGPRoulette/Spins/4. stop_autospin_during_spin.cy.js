describe('Autospin is played without issues', () => {
    it('Should check that spin counter updates correctly, and autospin stops after all spins)', () => {

        cy.visitTestEnvironment();
        cy.interceptStartGame();


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

        cy.wait('@startGame', { timeout: 10000}).its('response.body').then((body) => {
            const stakes = body.game;
            try {
                expect(stakes.stakePence).to.equal(50);
                cy.task("logCatch", {
                message: "✅ Assertion Passed: stakePence is 50",
        });
            } catch (err) {
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }   
        })

        cy.wait(150)
        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.roulette.list[2].list[2].text, 'Spin count is 9').to.equal('9');
                expect(win.game.scene.scenes[1].gameContainer.roulette.list[1].visible, 'Stop auto button is visible').to.be.true;
                win.game.scene.scenes[1].gameContainer.roulette.list[1].emit('pointerdown');
                cy.task("logCatch", {
                message: "✅ Assertion Passed: Spin count is 9",
        });
            } catch (err) {
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }   
        })

        cy.window().then((win) => {
            win.game.scene.scenes[1].gameContainer.roulette.list[2].emit('pointerdown');
        })

        cy.wait(800)
        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.roulette.list[2].visible, 'Stop auto button is visible').to.be.false;
                cy.task("logCatch", {
                message: "✅ Assertion Passed: Stop Auto is visible",
        });
            } catch (err) {
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
                cy.task("logCatch", {
                message: "✅ Assertion Passed: Rebet button is active",
        });
            } catch (err) {
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }   

            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.raceButton.active, 'RaceButton button is active').to.be.true;
                cy.task("logCatch", {
                message: "✅ Assertion Passed: RaceButton is active",
        });
            } catch (err) {
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }   

            win.game.scene.scenes[1].gameContainer.stakeSelector.dozensButtons[1].list[0].emit('pointerdown')

            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.multiplyButton.active, 'Multiply button is active').to.be.true;
                cy.task("logCatch", {
                message: "✅ Assertion Passed: Multiply button is active",
        });
            } catch (err) {
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }   
        })

        cy.wait(5000)
        
        cy.window({ timeout: 20000}).should((win) => {
            const roulette = win.game.scene.scenes[1].gameContainer.roulette.visible;
            expect(roulette, 'Spin is not played').to.be.false;
        })
        })
    }) 

            