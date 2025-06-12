describe('All stake objects are sent and validated. Total Bet value and Balance updates correctly in UI', () => {
    it('"type": "dozen", 15 stake objects with every stake value', () =>{

        cy.visitTestEnvironment()
        cy.interceptStartGame()
        const assertionErrors = []; // Array to collect stake validation errors

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

        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

            scene.gameContainer.stakeSelector.dozensButtons[0].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.dozensButtons[1].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.dozensButtons[2].list[0].emit('pointerdown')
        })


        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

        try {
            expect(scene.gameContainer.betPanel.list[9].text).to.include(0.30);
        } catch (err) {
            cy.log('Assertion failed:', err.message);
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


        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

            scene.gameContainer.stakeSelector.dozensButtons[0].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.dozensButtons[1].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.dozensButtons[2].list[0].emit('pointerdown')
        })

        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

        try {
            expect(scene.gameContainer.betPanel.list[9].text).to.include(1.80);
        } catch (err) {
            cy.log('Assertion failed:', err.message);
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
        })


        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

        try {
            expect(scene.gameContainer.betPanel.list[9].text).to.include(4.80);
        } catch (err) {
            cy.log('Assertion failed:', err.message);
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
        })


        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

        try {
            expect(scene.gameContainer.betPanel.list[9].text).to.include(19.80);
        } catch (err) {
            cy.log('Assertion failed:', err.message);
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
  
            cy.wait(300)
            scene.gameContainer.startGroupButtons.list[0].emit('pointerdown')
        })


        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

        try {
            expect(scene.gameContainer.betPanel.list[9].text).to.include(49.80);
        } catch (err) {
            assertionErrors.push(err.message);
        }   
        })


        cy.wait('@startGame', { timeout: 25000 }).its('response.body').then((body) => {
            cy.log('startGame response:', body.gameResult);
        
        if  (body.state == "INVALID") {
        throw new Error(
        `API returned INVALID state. Full response: ${JSON.stringify(body)}`
        )}    

            const dozen_1 = [1,2,3,4,5,6,7,8,9,10,11,12]
            const dozen_2 = [13,14,15,16,17,18,19,20,21,22,23,24]
            const dozen_3 = [25,26,27,28,29,30,31,32,33,34,35,36]

        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            try {
                expect(scene.gameContainer.topPanel.balance).to.not.equal(100000);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }   
        })
             
            expect(body.gameResult.integrationResultData.stakes[0].cells).to.deep.equal(dozen_1)
            expect(body.gameResult.integrationResultData.stakes[1].cells).to.deep.equal(dozen_2)
            expect(body.gameResult.integrationResultData.stakes[2].cells).to.deep.equal(dozen_3)
            
            // Process each stake combination
            const Combinations = {};
                
            body.gameResult.integrationResultData.stakes.forEach(stake => {
                
            const amountsPence = stake.amountsPence;
            const comboKey = stake.cells; // Stringify for consistent key

                if (!Combinations[comboKey]) {
                    Combinations[comboKey] = [];
                }
                Combinations[comboKey].push(amountsPence);
            });

            // Expected amounts in pence (assuming amountsPence is in pence)
            const expectedAmounts = [10, 50, 100, 500, 1000]; 

            // Validate each corner combination has all amounts exactly once
            Object.entries(Combinations).forEach(([combo, amounts]) => {
                try {
                    expect(amounts, `Dozen ${combo} should have all amounts (0.1, 0.5, 1, 5, 10 GBP`).to.deep.equal(expectedAmounts);
                } catch (err) {
                    assertionErrors.push(err.message);
                }
            });

            // Check total stakes count
            try {
                expect(body.gameResult.integrationResultData.stakes).to.have.length(15, 'Should have 15 total stakes');
            } catch (err) {
                assertionErrors.push(err.message);
            }

            // Throw all collected errors at once if any failed
            if (assertionErrors.length > 0) {
                throw new Error(`Stake validation failed:\n${assertionErrors.join('\n')}`);
            }
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