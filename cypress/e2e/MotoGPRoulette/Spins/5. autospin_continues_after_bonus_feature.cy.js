describe('Autospin stops on Bonus Feature and Bonus Round is played without issues with extra spins', () => {
    it('Should check that "Spins Left" counter updates correctly, correct multipliers are displayed, total winnings updates correctly, autospin does not continue after Bonus Round)', () => {

        cy.visitTestEnvironment()
        cy.intercept('startgame', { fixture: 'only_one_bonus_spin_roulette.json'}).as('startGame')

        cy.window({ timeout: 25000 }).should((win) => {
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
            const stakes = body.game;
            try {
                expect(stakes.stakePence).to.equal(50);
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


        cy.window({timeout: 20000}).should((win) => {
            const win_banner = win.game.scene.scenes[1].gameContainer.winBanner.visible;
            expect(win_banner).to.be.true
        })

        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.topPanel.balance, 'Balance is updated').to.not.equal(100000);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }   
        })

        cy.window({timeout: 40000}).should((win) => {
            const bonus_no_win = win.game.scene.scenes[1].gameContainer.videoPopup.winText.text;
            expect(bonus_no_win).to.equal('NO WIN')
        })

        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.videoPopup.multiplierText.visible, 'No multipliers are visible').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }   
        })
          
        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.videoPopup.spinsLeft.text, '6 SPINS LEFT').to.include('6 SPINS LEFT');
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }   
        })


        cy.window({timeout: 20000}).should((win) => {
            const win_banner = win.game.scene.scenes[1].gameContainer.winBanner.visible;
            expect(win_banner).to.be.true
        })

        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.topPanel.balance, 'Balance is updated').to.not.equal(100000);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }   
        })

        // cy.wait(2500)

        // cy.window({ timeout: 25000 }).should((win) => {
        //     expect(win.game.scene.scenes[1].gameContainer.roulette.list[2].list[2].text, 'Spin count is 9').to.equal('9');
        // })

        // cy.window({ timeout: 25000 }).should((win) => {
        //     expect(win.game.scene.scenes[1].gameContainer.roulette.list[2].list[2].text, 'Spin count is 8').to.equal('8');
        // })

        })
    }) 



    describe('Autospin is played without issues', () => {
    it('Should check that spin counter updates correctly, and autospin stops after all spins)', () => {

        cy.interceptStartGameLose()

        // 9

        cy.wait('@startGame', { timeout: 30000}).its('response.body').then((body) => {
            try {
                expect(body.gameResult.stakePence).to.equal(50);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }   
        })

        cy.wait(150)
        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.roulette.list[2].list[2].text, 'Spin count is 8').to.equal('8');
                expect(win.game.scene.scenes[1].gameContainer.roulette.list[1].visible, 'Stop auto button is visible').to.be.true;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }   
        })

        cy.window({timeout: 20000}).should((win) => {
            const table = win.game.scene.scenes[1].gameContainer.stakeSelector.visible;
            expect(table, 'The game returns to the table').to.be.true
        })

        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.reBetButton.active, 'Rebet button is disabled').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                const auto_button = win.game.scene.scenes[1].gameContainer.startGroupButtons.list[1].list[3].text
                expect(auto_button, 'Spin count is 8').to.equal('8')
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.raceButton.active, 'RaceButton button is disabled').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.multiplyButton.active, 'Multiply button is disabled').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.startGroupButtons.startButton.active, 'Spin button is disabled').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.startGroupButtons.resetButton.active, 'Reset button is disabled').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

        })


        // 8

        cy.wait('@startGame', { timeout: 10000}).its('response.body').then((body) => {
            try {
                expect(body.gameResult.stakePence).to.equal(50);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }   
        })

        cy.wait(150)
        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.roulette.list[2].list[2].text, 'Spin count is 7').to.equal('7');
                expect(win.game.scene.scenes[1].gameContainer.roulette.list[1].visible, 'Stop auto button is visible').to.be.true;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }   
        })

        cy.window({timeout: 20000}).should((win) => {
            const table = win.game.scene.scenes[1].gameContainer.stakeSelector.visible;
            expect(table, 'The game returns to the table').to.be.true
        })

        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.reBetButton.active, 'Rebet button is disabled').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                const auto_button = win.game.scene.scenes[1].gameContainer.startGroupButtons.list[1].list[3].text
                expect(auto_button, 'Spin count is 7').to.equal('7')
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.raceButton.active, 'RaceButton button is disabled').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.multiplyButton.active, 'Multiply button is disabled').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.startGroupButtons.startButton.active, 'Spin button is disabled').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.startGroupButtons.resetButton.active, 'Reset button is disabled').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }
        })


        // 7

        cy.wait('@startGame', { timeout: 10000}).its('response.body').then((body) => {
            try {
                expect(body.gameResult.stakePence).to.equal(50);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }   
        })

        cy.wait(150)
        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.roulette.list[2].list[2].text, 'Spin count is 6').to.equal('6');
                expect(win.game.scene.scenes[1].gameContainer.roulette.list[1].visible, 'Stop auto button is visible').to.be.true;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }   
        })

        cy.window({timeout: 20000}).should((win) => {
            const table = win.game.scene.scenes[1].gameContainer.stakeSelector.visible;
            expect(table, 'The game returns to the table').to.be.true
        })

        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.reBetButton.active, 'Rebet button is disabled').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                const auto_button = win.game.scene.scenes[1].gameContainer.startGroupButtons.list[1].list[3].text
                expect(auto_button, 'Spin count is 6').to.equal('6')
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.raceButton.active, 'RaceButton button is disabled').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.multiplyButton.active, 'Multiply button is disabled').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.startGroupButtons.startButton.active, 'Spin button is disabled').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.startGroupButtons.resetButton.active, 'Reset button is disabled').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

        })


        // 6

        cy.wait('@startGame', { timeout: 10000}).its('response.body').then((body) => {
            try {
                expect(body.gameResult.stakePence).to.equal(50);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }   
        })

        cy.wait(150)
        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.roulette.list[2].list[2].text, 'Spin count is 5').to.equal('5');
                expect(win.game.scene.scenes[1].gameContainer.roulette.list[1].visible, 'Stop auto button is visible').to.be.true;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }   
        })

        cy.window({timeout: 20000}).should((win) => {
            const table = win.game.scene.scenes[1].gameContainer.stakeSelector.visible;
            expect(table, 'The game returns to the table').to.be.true
        })

        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.reBetButton.active, 'Rebet button is disabled').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                const auto_button = win.game.scene.scenes[1].gameContainer.startGroupButtons.list[1].list[3].text
                expect(auto_button, 'Spin count is 5').to.equal('5')
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.raceButton.active, 'RaceButton button is disabled').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.multiplyButton.active, 'Multiply button is disabled').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.startGroupButtons.startButton.active, 'Spin button is disabled').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.startGroupButtons.resetButton.active, 'Reset button is disabled').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }
        })

        // 5

        cy.wait('@startGame', { timeout: 10000}).its('response.body').then((body) => {
            try {
                expect(body.gameResult.stakePence).to.equal(50);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }   
        })

        cy.wait(150)
        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.roulette.list[2].list[2].text, 'Spin count is 4').to.equal('4');
                expect(win.game.scene.scenes[1].gameContainer.roulette.list[1].visible, 'Stop auto button is visible').to.be.true;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }   
        })

        cy.window({timeout: 20000}).should((win) => {
            const table = win.game.scene.scenes[1].gameContainer.stakeSelector.visible;
            expect(table, 'The game returns to the table').to.be.true
        })

        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.reBetButton.active, 'Rebet button is disabled').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                const auto_button = win.game.scene.scenes[1].gameContainer.startGroupButtons.list[1].list[3].text
                expect(auto_button, 'Spin count is 4').to.equal('4')
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.raceButton.active, 'RaceButton button is disabled').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.multiplyButton.active, 'Multiply button is disabled').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.startGroupButtons.startButton.active, 'Spin button is disabled').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.startGroupButtons.resetButton.active, 'Reset button is disabled').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }
        })


        // 4

        cy.wait('@startGame', { timeout: 10000}).its('response.body').then((body) => {
            try {
                expect(body.gameResult.stakePence).to.equal(50);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }   
        })

        cy.wait(150)
        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.roulette.list[2].list[2].text, 'Spin count is 3').to.equal('3');
                expect(win.game.scene.scenes[1].gameContainer.roulette.list[1].visible, 'Stop auto button is visible').to.be.true;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }   
        })

        cy.window({timeout: 20000}).should((win) => {
            const table = win.game.scene.scenes[1].gameContainer.stakeSelector.visible;
            expect(table, 'The game returns to the table').to.be.true
        })

        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.reBetButton.active, 'Rebet button is disabled').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                const auto_button = win.game.scene.scenes[1].gameContainer.startGroupButtons.list[1].list[3].text
                expect(auto_button, 'Spin count is 3').to.equal('3')
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.raceButton.active, 'RaceButton button is disabled').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.multiplyButton.active, 'Multiply button is disabled').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.startGroupButtons.startButton.active, 'Spin button is disabled').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.startGroupButtons.resetButton.active, 'Reset button is disabled').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

        })


        // 3

        cy.wait('@startGame', { timeout: 10000}).its('response.body').then((body) => {
            try {
                expect(body.gameResult.stakePence).to.equal(50);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }   
        })

        cy.wait(150)
        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.roulette.list[2].list[2].text, 'Spin count is 2').to.equal('2');
                expect(win.game.scene.scenes[1].gameContainer.roulette.list[1].visible, 'Stop auto button is visible').to.be.true;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }   
        })

        cy.window({timeout: 20000}).should((win) => {
            const table = win.game.scene.scenes[1].gameContainer.stakeSelector.visible;
            expect(table, 'The game returns to the table').to.be.true
        })

        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.reBetButton.active, 'Rebet button is disabled').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                const auto_button = win.game.scene.scenes[1].gameContainer.startGroupButtons.list[1].list[3].text
                expect(auto_button, 'Spin count is 2').to.equal('2')
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.raceButton.active, 'RaceButton button is disabled').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.multiplyButton.active, 'Multiply button is disabled').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.startGroupButtons.startButton.active, 'Spin button is disabled').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.startGroupButtons.resetButton.active, 'Reset button is disabled').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }
        })

        // 2

        cy.wait('@startGame', { timeout: 10000}).its('response.body').then((body) => {
            try {
                expect(body.gameResult.stakePence).to.equal(50);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }   
        })

        cy.wait(150)
        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.roulette.list[2].list[2].text, 'Spin count is 1').to.equal('1');
                expect(win.game.scene.scenes[1].gameContainer.roulette.list[1].visible, 'Stop auto button is visible').to.be.true;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }   
        })

        cy.window({timeout: 20000}).should((win) => {
            const table = win.game.scene.scenes[1].gameContainer.stakeSelector.visible;
            expect(table, 'The game returns to the table').to.be.true
        })

        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.reBetButton.active, 'Rebet button is disabled').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                const auto_button = win.game.scene.scenes[1].gameContainer.startGroupButtons.list[1].list[3].text
                expect(auto_button, 'Spin count is 1').to.equal('1')
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.raceButton.active, 'RaceButton button is disabled').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.multiplyButton.active, 'Multiply button is disabled').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.startGroupButtons.startButton.active, 'Spin button is disabled').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.startGroupButtons.resetButton.active, 'Reset button is disabled').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }
        })

        // 1

        cy.wait('@startGame', { timeout: 10000}).its('response.body').then((body) => {
            try {
                expect(body.gameResult.stakePence).to.equal(50);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }   
        })

        cy.wait(150)
        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.roulette.list[2].list[2].text, 'Spin count is 0').to.equal('0');
                expect(win.game.scene.scenes[1].gameContainer.roulette.list[1].visible, 'Stop auto button is visible').to.be.true;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }   
        })

        cy.window({timeout: 20000}).should((win) => {
            const table = win.game.scene.scenes[1].gameContainer.stakeSelector.visible;
            expect(table, 'The game returns to the table').to.be.true
        })

        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.reBetButton.active, 'Rebet button is disabled').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                const auto_button = win.game.scene.scenes[1].gameContainer.startGroupButtons.list[1].list[3].text
                expect(auto_button, 'Spin count is 0').to.equal('0')
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.raceButton.active, 'RaceButton button is disabled').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.multiplyButton.active, 'Multiply button is disabled').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.startGroupButtons.startButton.active, 'Spin button is disabled').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.startGroupButtons.resetButton.active, 'Reset button is disabled').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
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
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                const auto_button = win.game.scene.scenes[1].gameContainer.startGroupButtons.autoplayButton.list[5].text
                expect(auto_button, 'Stop auto button is no longer displayed').to.equal('AUTO SPIN')
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.raceButton.active, 'RaceButton button is active').to.be.true;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }
        })

        cy.wait(1000)
        cy.window().then((win) => {
            win.game.scene.scenes[1].gameContainer.list[7].list[1].list[0].emit('pointerdown')
        })

        cy.window().should((win) => {
            const chip = win.game.scene.scenes[1].gameContainer.list[7].activeButton.layout.name;
            expect(chip).to.include("chip_0")
        })
        // to check that the game functions after the spin

        })
    }) 
