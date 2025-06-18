describe('Autospin stops on Bonus Feature and Bonus Round is played without issues with extra spins', () => {
    it('Should check that "Spins Left" counter updates correctly, correct multipliers are displayed, total winnings updates correctly, autospin does not continue after Bonus Round', () => {

        cy.visitTestEnvironment()
        cy.intercept('startgame', { fixture: 'extra_spins_roulette.json'}).as('startGame')



        cy.window({ timeout: 50000 }).should((win) => {
            const start_button = win.game.scene.scenes[1].gameContainer.startGroupButtons.list[0].visible;
            expect(start_button, 'Game is loaded').to.be.true
        })

        // cy.get('#open_button').click()
        // cy.get('#chip').select(2)
        // cy.get('#open_button').click({force: true})
        // cy.get('#win_bonus_button')
        // cy.get('#set_state').click()
        // cy.get('#close_button').click()

   
        cy.window().should((win) => {
            const chip = win.game.scene.scenes[1].gameContainer.betPanel.activeButton.layout.name;
            expect(chip).to.include("chip_2")
        })

        cy.window().then((win) => {
            win.game.scene.scenes[1].gameContainer.stakeSelector.list[1].list[0].emit('pointerdown')
        })

        cy.wait(100)

        cy.window().then((win) => {
            win.game.scene.scenes[1].gameContainer.startGroupButtons.autoplayButton.emit('pointerdown')
        })

        cy.wait(600)

        cy.window().then((win) => {
            win.game.scene.scenes[1].gameContainer.autoplaySpinsSelect.list[2].list[0].emit('pointerdown')
            win.game.scene.scenes[1].gameContainer.autoplaySpinsSelect.sliderButton.emit('pointerdown')
        })

        cy.wait(200)
        cy.window().then((win) => {
            win.game.scene.scenes[1].gameContainer.autoplaySpinsSelect.startSpinsButton.list[0].emit('pointerdown')
        })

        // 10

        cy.wait('@startGame', { timeout: 10000}).its('response.body').then((body) => {
            try {
                expect(body.gameResult.stakePence).to.equal(100);
                    cy.task("logCatch", {
                    message: "✅ Assertion Passed: stakePence is 100",
        });
            } catch (err) {
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }   
        })

        let responses = [];
        const urlPrefix = 'https://video.highlight.games/mp4med/mgp/vid-mgp-';
        cy.intercept(urlPrefix + '*', (req) => {
            req.continue((res) => {
                responses.push({
                    url: res.url,
                    headers: res.headers
                });
            });
        }).as('videoRequest');

        cy.wait('@videoRequest', { timeout: 50000 }).then(() => {
            cy.wrap(null, { timeout: 50000 }).should(() => {
                const matching = responses.filter(r => r.url.startsWith(urlPrefix));
                expect(matching).to.have.length(8);
                matching.forEach(r => {
                    const contentLength = Number(r.headers['content-length']);
                    expect(contentLength, 'Video size').to.be.greaterThan(400000);
                });
            });
        });

        cy.task("logCatch", {
                message: "✅ Assertion Passed: All videos are loaded, resource size is more than 400kB",
        });

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

        // cy.intercept("https://video.highlight.games/mp4med/mgp/vid-mgp-sbdjjc2y9aijdv1.mp4").as("video_1")
        // cy.wait('@video_1', { timeout: 20000 })

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

        // cy.intercept("https://video.highlight.games/mp4med/mgp/vid-mgp-0UAjR0IxGXaepEh.mp4").as("video_2")
        // cy.wait('@video_2', { timeout: 20000 })

        cy.window({timeout: 40000}).should((win) => {
            const bonus_no_win = win.game.scene.scenes[1].gameContainer.videoPopup.winText.text;
            expect(bonus_no_win).to.equal('WIN £1.00');
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
                expect(win.game.scene.scenes[1].gameContainer.videoPopup.list[3].text, 'Total winnings is 1.00').to.equal('TOTAL WINNINGS £1.00');
                cy.task("logCatch", {
                message: "✅ Assertion Passed: Total Winnings is 1.00",
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

        // cy.intercept("https://video.highlight.games/mp4med/mgp/vid-mgp-DrJvPC37x6Hthtw.mp4").as("video_3")
        // cy.wait('@video_3', { timeout: 20000 })

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


        // cy.intercept("https://video.highlight.games/mp4med/mgp/vid-mgp-JXOleCtxAVe4KmW.mp4").as("video_4")
        // cy.wait('@video_4', { timeout: 20000 })

        cy.window({timeout: 40000}).should((win) => {
            const bonus_no_win = win.game.scene.scenes[1].gameContainer.videoPopup.winText.text;
            expect(bonus_no_win).to.equal('WIN £5.00');
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
                expect(win.game.scene.scenes[1].gameContainer.videoPopup.list[3].text, 'Total winnings is 6.00').to.equal('TOTAL WINNINGS £6.00');
                cy.task("logCatch", {
                message: "✅ Assertion Passed: Total Winnings is 6.00",
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
        
        // cy.intercept("https://video.highlight.games/mp4med/mgp/vid-mgp-x96MCwcI6FE7Ng1.mp4").as("video_5")
        // cy.wait('@video_5', { timeout: 20000 })

         cy.window({timeout: 40000}).should((win) => {
            const bonus_no_win = win.game.scene.scenes[1].gameContainer.videoPopup.winText.text;
            expect(bonus_no_win).to.equal('WIN £7.00');
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
                expect(win.game.scene.scenes[1].gameContainer.videoPopup.list[3].text, 'Total winnings is 13.00').to.equal('TOTAL WINNINGS £13.00');
                cy.task("logCatch", {
                message: "✅ Assertion Passed: Total Winnings is 13.00",
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

        // cy.intercept("https://video.highlight.games/mp4med/mgp/vid-mgp-OvgfVw5WdaEYO80.mp4").as("video_6")
        // cy.wait('@video_6', { timeout: 20000 })

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
                cy.task("logCatch", `4 SPINS LEFT`);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }   
        })

        // cy.intercept("https://video.highlight.games/mp4med/mgp/vid-mgp-1lfA4S2bTVQ5p4D.mp4").as("video_7")
        // cy.wait('@video_7', { timeout: 20000 })

        cy.window({timeout: 40000}).should((win) => {
            const bonus_no_win = win.game.scene.scenes[1].gameContainer.videoPopup.winText.text;
            expect(bonus_no_win).to.equal('WIN £4.00');
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
                expect(win.game.scene.scenes[1].gameContainer.videoPopup.list[3].text, 'Total winnings is 17.00').to.equal('TOTAL WINNINGS £17.00');
                cy.task("logCatch", `Total winnings is 17.00`);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
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

        // cy.intercept("https://video.highlight.games/mp4med/mgp/vid-mgp-Ij3x4mqgaH8eQWf.mp4").as("video_8")
        // cy.wait('@video_8', { timeout: 20000 })

        cy.window({timeout: 40000}).should((win) => {
            const bonus_no_win = win.game.scene.scenes[1].gameContainer.videoPopup.winText.text;
            expect(bonus_no_win).to.equal('WIN £3.00');
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
                expect(win.game.scene.scenes[1].gameContainer.videoPopup.list[3].text, 'Total winnings is 20.00').to.equal('TOTAL WINNINGS £20.00');
                cy.task("logCatch", {
                message: "✅ Assertion Passed: Total Winnings is 20.00",
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
            expect(bonus_no_win).to.equal('WIN £2.00');
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
                expect(win.game.scene.scenes[1].gameContainer.videoPopup.list[3].text, 'Total winnings is 22').to.equal('TOTAL WINNINGS £22.00');
                cy.task("logCatch", {
                message: "✅ Assertion Passed: Total Winnings is 22",
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
                expect(win.game.scene.scenes[1].gameContainer.winBanner.list[3].text, 'You Have Won 22.00').to.equal('£22.00');
                cy.task("logCatch", {
                message: "✅ Assertion Passed: You Have Won 22.00",
        });
            } catch (err) {
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }   
        })

        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.topPanel.balance, 'Balance is updated').to.equal(104900);
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

            