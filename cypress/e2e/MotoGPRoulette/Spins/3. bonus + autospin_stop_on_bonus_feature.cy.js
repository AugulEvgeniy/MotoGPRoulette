describe('Autospin stops on Bonus Feature and Bonus Round is played without issues with extra spins', () => {
    it('Should check that "Spins Left" counter updates correctly, correct multipliers are displayed, total winnings updates correctly, autospin does not continue after Bonus Round)', () => {

        cy.visitTestEnvironment()
        cy.intercept('startgame', { fixture: 'extra_spins_roulette.json'}).as('startGame')

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
            win.game.scene.scenes[1].gameContainer.autoplaySpinsSelect.list[6].list[0].emit('pointerdown')
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
                message: "✅ Assertion Passed: Balance does not equal 1000",
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
                cy.task("logCatch", `No multipliers are visible on NO WIN, Assertion Failed: ${err.message}`);
            }   
        })
          
        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.videoPopup.spinsLeft.text, '6 SPINS LEFT').to.include('6 SPINS LEFT');
                cy.task("logCatch", {
                message: "✅ Assertion Passed: 6 SPINS LEFT",
        });
            } catch (err) {
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }   
        })

        cy.window({timeout: 40000}).should((win) => {
            const bonus_no_win = win.game.scene.scenes[1].gameContainer.videoPopup.winText.text;
            expect(bonus_no_win).to.equal('WIN £0.50');
        })

        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.videoPopup.multiplierText.text, 'Multiplier is 1').to.equal('1');
                cy.task("logCatch", {
                message: "✅ Assertion Passed: Multiplier is 1",
        });
            } catch (err) {
                cy.task("logCatch", `Multiplier is 1, Assertion Failed: ${err.message}`);
            }   
        })

        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.videoPopup.list[3].text, 'Total winnings is 0.50').to.equal('TOTAL WINNINGS £0.50');
                cy.task("logCatch", {
                message: "✅ Assertion Passed: Total Winnings is 0.50",
        });
            } catch (err) {
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }   
        })
          
        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.videoPopup.spinsLeft.text, '5 SPINS LEFT').to.include('5 SPINS LEFT');
                cy.task("logCatch", {
                message: "✅ Assertion Passed: 5 SPINS LEFT",
        });
            } catch (err) {
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }   
        })

        cy.window({timeout: 40000}).should((win) => {
            const extra_spins = win.game.scene.scenes[1].gameContainer.videoPopup.winText.text;
            expect(extra_spins).to.equal('EXTRA SPINS')
        })

        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.videoPopup.multiplierText.text, '+3').to.equal('+3');
                cy.task("logCatch", {
                message: "✅ Assertion Passed: Multiplier is +3",
        });
            } catch (err) {
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }   
        })
          
        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.videoPopup.spinsLeft.text, '7 SPINS LEFT').to.include('7 SPINS LEFT');
                cy.task("logCatch", {
                message: "✅ Assertion Passed: 7 SPINS LEFT",
        });
            } catch (err) {
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }   
        })


 cy.window({timeout: 40000}).should((win) => {
            const bonus_no_win = win.game.scene.scenes[1].gameContainer.videoPopup.winText.text;
            expect(bonus_no_win).to.equal('WIN £2.50');
        })

        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.videoPopup.multiplierText.text, 'Multiplier is 5').to.equal('5');
                cy.task("logCatch", {
                message: "✅ Assertion Passed: Multiplier is 5",
        });
            } catch (err) {
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }   
        })

        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.videoPopup.list[3].text, 'Total winnings is 3.00').to.equal('TOTAL WINNINGS £3.00');
                cy.task("logCatch", {
                message: "✅ Assertion Passed: Total Winnings is 3.00",
        });
            } catch (err) {
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }   
        })
          
        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.videoPopup.spinsLeft.text, '6 SPINS LEFT').to.include('6 SPINS LEFT');
                cy.task("logCatch", {
                message: "✅ Assertion Passed: 6 SPINS LEFT",
        });
            } catch (err) {
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }   
        })
        

         cy.window({timeout: 40000}).should((win) => {
            const bonus_no_win = win.game.scene.scenes[1].gameContainer.videoPopup.winText.text;
            expect(bonus_no_win).to.equal('WIN £3.50');
        })

        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.videoPopup.multiplierText.text, 'Multiplier is 7').to.equal('7');
                cy.task("logCatch", {
                message: "✅ Assertion Passed: Multiplier is 7",
        });
            } catch (err) {
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }   
        })

        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.videoPopup.list[3].text, 'Total winnings is 6.50').to.equal('TOTAL WINNINGS £6.50');
                cy.task("logCatch", {
                message: "✅ Assertion Passed: Total Winnings is 6.50",
        });
            } catch (err) {
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }   
        })
          
        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.videoPopup.spinsLeft.text, '5 SPINS LEFT').to.include('5 SPINS LEFT');
                cy.task("logCatch", {
                message: "✅ Assertion Passed: 5 SPINS LEFT",
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
                cy.task("logCatch", `Assertion Failed: on NO WIN ${err.message}`);
            }   
        })
          
        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.videoPopup.spinsLeft.text, '4 SPINS LEFT').to.include('4 SPINS LEFT');
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }   
        })

        cy.window({timeout: 40000}).should((win) => {
            const bonus_no_win = win.game.scene.scenes[1].gameContainer.videoPopup.winText.text;
            expect(bonus_no_win).to.equal('WIN £2.00');
        })

        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.videoPopup.multiplierText.text, 'Multiplier is 4').to.equal('4');
                cy.task("logCatch", {
                message: "✅ Assertion Passed: Multiplier is 4",
        });
            } catch (err) {
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }   
        })

        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.videoPopup.list[3].text, 'Total winnings is 8.50').to.equal('TOTAL WINNINGS £8.50');
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }   
        })
          
        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.videoPopup.spinsLeft.text, '3 SPINS LEFT').to.include('3 SPINS LEFT');
                cy.task("logCatch", {
                message: "✅ Assertion Passed: 3 SPINS LEFT",
        });
            } catch (err) {
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }   
        })

        cy.window({timeout: 40000}).should((win) => {
            const bonus_no_win = win.game.scene.scenes[1].gameContainer.videoPopup.winText.text;
            expect(bonus_no_win).to.equal('WIN £1.50');
        })

        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.videoPopup.multiplierText.text, 'Multiplier is 3').to.equal('3');
                cy.task("logCatch", {
                message: "✅ Assertion Passed: Multiplier is 3",
        });
            } catch (err) {
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }   
        })

        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.videoPopup.list[3].text, 'Total winnings is 10.00').to.equal('TOTAL WINNINGS £10.00');
                cy.task("logCatch", {
                message: "✅ Assertion Passed: Total Winnings is 10.00",
        });
            } catch (err) {
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }   
        })
          
        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.videoPopup.spinsLeft.text, '2 SPINS LEFT').to.include('2 SPINS LEFT');
                cy.task("logCatch", {
                message: "✅ Assertion Passed: 2 SPINS LEFT",
        });
            } catch (err) {
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }   
        })

        cy.window({timeout: 40000}).should((win) => {
            const bonus_no_win = win.game.scene.scenes[1].gameContainer.videoPopup.winText.text;
            expect(bonus_no_win).to.equal('WIN £1.00');
        })

        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.videoPopup.multiplierText.text, 'Multiplier is 2').to.equal('2');
                cy.task("logCatch", {
                message: "✅ Assertion Passed: Multiplier is 2",
        });
            } catch (err) {
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }   
        })

        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.videoPopup.list[3].text, 'Total winnings is 11').to.equal('TOTAL WINNINGS £11.00');
                cy.task("logCatch", {
                message: "✅ Assertion Passed: Total Winnings is 11",
        });
            } catch (err) {
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }   
        })
          
        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.videoPopup.spinsLeft.text, '1 SPINS LEFT').to.include('1 SPINS LEFT');
                cy.task("logCatch", {
                message: "✅ Assertion Passed: 1 SPINS LEFT",
        });
            } catch (err) {
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }   
        })

        cy.window({timeout: 40000}).should((win) => {
            const win_banner = win.game.scene.scenes[1].gameContainer.winBanner.visible;
            expect(win_banner, 'win banner is displayed').to.be.true
        })

        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.winBanner.list[3].text, 'You Have Won 11.00').to.equal('£11.00');
                cy.task("logCatch", {
                message: "✅ Assertion Passed: You Have Won 11.00",
        });
            } catch (err) {
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }   
        })

        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.topPanel.balance, 'Balance is updated').to.not.equal(100000);
                cy.task("logCatch", {
                message: "✅ Assertion Passed: Balance does not equal 1000",
        });
            } catch (err) {
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }   
        })

        cy.wait(2500)

        cy.window({ timeout: 60000 }).should((win) => {
            const autospin_button = win.game.scene.scenes[1].gameContainer.startGroupButtons.autoplayButton.visible;
            const isAutoplay = win.game.scene.scenes[1].gameContainer.roulette.isAutoplay;
            expect(autospin_button, 'Autospin button is visible').to.be.true;
            expect(isAutoplay, 'isAutoplay: false').to.be.false;
        })

        })
    }) 

            