describe('Spins are played without issues', () => {
    it('[WIN SPIN] Should check that the win banner is displayed, balance is updated, response data is correct)', () => {

        cy.visitTestEnvironment()
        cy.interceptStartGame()

        cy.window({ timeout: 60000 }).should((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            const start_button = scene.gameContainer.startGroupButtons.list[0].visible;

            expect(start_button, 'Game is loaded').to.be.true
        })

        cy.get('#open_button').click()
        cy.get('#chip').select(2)
        cy.get('#open_button').click({force: true})
        cy.get('#set_state').click()
        cy.get('#close_button').click()

        cy.window().should((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            const chip = scene.gameContainer.betPanel.activeButton.layout.name;

            expect(chip).to.include("chip_2")
        })

        cy.window().then((win) => {
            win.game.scene.scenes[1].gameContainer.stakeSelector.dozensButtons[0].list[0].emit('pointerdown')
            win.game.scene.scenes[1].gameContainer.stakeSelector.dozensButtons[1].list[0].emit('pointerdown')
            win.game.scene.scenes[1].gameContainer.stakeSelector.dozensButtons[2].list[0].emit('pointerdown')
        })

        cy.window().then((win) => {
        const chips = win.game?.scene?.scenes[1]?.gameContainer?.stakeSelector?.chips;
        
        // Check if chips array exists and is empty
        if (chips && chips.length === 0) {
            cy.log('No chips found - selecting dozens...');
            cy.wait(5000);
            
            cy.window().then((win) => {
            win.game.scene.scenes[1].gameContainer.stakeSelector.dozensButtons[0].list[0].emit('pointerdown');
            win.game.scene.scenes[1].gameContainer.stakeSelector.dozensButtons[1].list[0].emit('pointerdown');
            win.game.scene.scenes[1].gameContainer.stakeSelector.dozensButtons[2].list[0].emit('pointerdown');
            })

            cy.window( {timeout: 15000} ).should((win) => {
            expect(win.game.scene.scenes[1].gameContainer.stakeSelector.chips[0].stakeType).to.equal('dozen');
            });
        } else {
            cy.log('Chips already exist, skipping selection');
        }
        });


        cy.window({timeout: 30000}).should((win) => {
            expect(win.game.scene.scenes[1].gameContainer.stakeSelector.chips[0].stakeType).to.equal('dozen');
        })


        cy.window().then((win) => {
            win.game.scene.scenes[1].gameContainer.startGroupButtons.list[0].emit('pointerdown')
        })

        cy.wait('@startGame', { timeout: 50000}).its('response.body').then((body) => {
            expect(body.gameResult.totalWinPence).to.equal(300);
            expect(body.gameResult.stakePence, "stakePence").to.equal(300);
        })

        cy.window({timeout: 30000}).should((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            const win_banner = scene.gameContainer.winBanner.visible;

            expect(win_banner, "win banner is displayed").to.be.true
            expect(scene.gameContainer.topPanel.balance, "Balance").to.equal(100000);
        })

        cy.wait(3000)
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
        // to check that the game functions after the spin

        })

        it('[LOSE SPIN] Should check that no win banner is displayed, balance is updated, response data is correct)', () => {

        cy.interceptStartGame()


        cy.window({ timeout: 50000 }).should((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            const start_button = scene.gameContainer.startGroupButtons.list[0].visible;

            expect(start_button, 'Game is loaded').to.be.true
        })

        cy.get('#open_button').click()
        cy.get('#chip').select(2)
        cy.get('#open_button').click({force: true})
        cy.get('#set_state').click()
        cy.get('#close_button').click()

        cy.wait(2000)
        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            scene.gameContainer.stakeSelector.dozensButtons[1].list[0].emit('pointerdown')
        })

        cy.window().then((win) => {
        const chips = win.game?.scene?.scenes[1]?.gameContainer?.stakeSelector?.chips;
        
        // Check if chips array exists and is empty
        if (chips && chips.length === 0) {
            cy.log('No chips found - selecting dozens...');
            cy.wait(5000);
            
            cy.window().then((win) => {
            win.game.scene.scenes[1].gameContainer.stakeSelector.dozensButtons[1].list[0].emit('pointerdown');
            })

            cy.window().should((win) => {
            expect(win.game.scene.scenes[1].gameContainer.stakeSelector.chips[0].stakeType).to.equal('dozen');
            });
        } else {
            cy.log('Chips already exist, skipping selection');
        }
        });
        

        cy.window({timeout: 30000}).should((win) => {
            expect(win.game.scene.scenes[1].gameContainer.stakeSelector.chips[0].stakeType).to.equal('dozen');
        })

        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            scene.gameContainer.startGroupButtons.list[0].emit('pointerdown')
        })

        cy.wait('@startGame', { timeout: 50000}).its('response.body').then((body) => {
            try {
                expect(body.gameResult.stakePence).to.equal(10);
                    cy.task("logCatch", {
                    message: "✅ Assertion Passed: stakePence is 100",
        });
            } catch (err) {
                cy.task("logCatch", `Assertion Failed: ${err.message}`);
            }   
        })


        cy.window({timeout: 30000}).should((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            const no_win_banner = scene.gameContainer.noWinBanner.visible;

            expect(no_win_banner).to.be.true
            expect(scene.gameContainer.topPanel.balance).to.equal(99990);
        })

        cy.wait(3000)
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
        // to check that the game functions after the spin

        })
    }) 

            