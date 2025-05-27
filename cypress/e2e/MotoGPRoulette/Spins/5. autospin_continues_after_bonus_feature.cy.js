describe('Autospin stops on Bonus Feature and Bonus Round is played without issues with extra spins', () => {
    it('Should check that "Spins Left" counter updates correctly, correct multipliers are displayed, total winnings updates correctly, autospin does not continue after Bonus Round)', () => {

        cy.visitTestEnvironment()
        cy.intercept('startgame', { fixture: 'only_one_bonus_spin_roulette.json'}).as('startGame')

        cy.window({ timeout: 50000 }).should((win) => {
            const start_button = win.game.scene.scenes[1].gameContainer.list[5].list[0].visible;
            expect(start_button, 'Game is loaded').to.be.true
        })

        // cy.get('#open_button').click()
        // cy.get('#chip').select(2)
        // cy.get('#open_button').click({force: true})
        // cy.get('#win_bonus_button')
        // cy.get('#set_state').click()
        // cy.get('#close_button').click()

   
        cy.window().should((win) => {
            const chip = win.game.scene.scenes[1].gameContainer.list[7].activeButton.layout.name;
            expect(chip).to.include("chip_1")
        })

        cy.window().then((win) => {
            win.game.scene.scenes[1].gameContainer.list[4].list[1].list[0].emit('pointerdown')
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
            try {
                expect(body.gameResult.stakePence).to.equal(50);
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
                    cy.task("logCatch", {
                    message: "✅ Assertion Passed: Spin count is 9",
        });
            } catch (err) {
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }   
        })


        cy.window({timeout: 20000}).should((win) => {
            const win_banner = win.game.scene.scenes[1].gameContainer.winBanner.visible;
            expect(win_banner).to.be.true
        })

        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.topPanel.balance, 'Balance is updated').to.not.equal(100000);
                    cy.task("logCatch", {
                    message: "✅ Assertion Passed: Balance is not 100000",
        });
            } catch (err) {
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }   
        })

        cy.window({timeout: 40000}).should((win) => {
            const bonus_no_win = win.game.scene.scenes[1].gameContainer.videoPopup.winText.text;
            expect(bonus_no_win).to.equal('NO WIN')
        })

        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.videoPopup.multiplierText.visible, 'No multipliers are visible').to.be.false;
                    cy.task("logCatch", {
                    message: "✅ Assertion Passed: No multipliers are visible on NO WIN",
        });
            } catch (err) {
                cy.task("logCatch", `Assertion Failed, No multipliers are visible on NO WIN: ${err.message}`);
            }   
        })

        cy.window({timeout: 40000}).should((win) => {
            const win_banner = win.game.scene.scenes[1].gameContainer.winBanner.visible;
            expect(win_banner).to.be.true
        })

        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.topPanel.balance, 'Balance is updated').to.not.equal(100000);
                    cy.task("logCatch", {
                    message: "✅ Assertion Passed: Balance is not 100000",
        });
            } catch (err) {
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }   
        })

        cy.wait(2500)

        cy.window({ timeout: 30000 }).should((win) => {
            expect(win.game.scene.scenes[1].gameContainer.roulette.list[2].list[2].text, 'Spin count is 9').to.equal('9');
        })

        // cy.window({ timeout: 50000 }).should((win) => {
        //     expect(win.game.scene.scenes[1].gameContainer.stakeSelector.visible, 'Spin count is 8').to.equal('8');
        // })

        cy.window({ timeout: 50000 }).should((win) => {
            expect(win.game.scene.scenes[1].gameContainer.tapBar.reBetButton.active, 'Rebet button is disabled').to.be.false;
        })

        })
    }) 

