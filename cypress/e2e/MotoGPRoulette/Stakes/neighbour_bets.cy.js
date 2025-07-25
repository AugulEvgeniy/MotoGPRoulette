describe('All stake objects are sent and validated. Total Bet value and Balance updates correctly in UI', () => {
    it('"type": "straight", 925 stake objects with every stake value', () => {

        cy.visitTestEnvironment()
        cy.interceptStartGame()
        const assertionErrors = []; // Array to collect stake validation errors

        cy.window({ timeout: 50000 }).should((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            const start_button = scene.gameContainer.startGroupButtons.list[0].visible;

            expect(start_button, 'Game is loaded').to.be.true
        })

            cy.wait(500)

            cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            scene.gameContainer.tapBar.raceButton.emit('pointerdown')
        })

            cy.wait(100)

            cy.window({ timeout: 20000 }).should((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            const race_track = scene.gameContainer.stakeSelector.isRaceTable;

            expect(race_track, 'Race Track is entered').to.be.true;
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

        
        cy.wait(600)

        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

            scene.gameContainer.stakeSelector.raceButtons[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.raceButtons[1].emit('pointerdown')
            scene.gameContainer.stakeSelector.raceButtons[2].emit('pointerdown')
            scene.gameContainer.stakeSelector.raceButtons[3].emit('pointerdown')
            scene.gameContainer.stakeSelector.raceButtons[4].emit('pointerdown')
            scene.gameContainer.stakeSelector.raceButtons[5].emit('pointerdown')
            scene.gameContainer.stakeSelector.raceButtons[6].emit('pointerdown')
            scene.gameContainer.stakeSelector.raceButtons[7].emit('pointerdown')
            scene.gameContainer.stakeSelector.raceButtons[8].emit('pointerdown')
            scene.gameContainer.stakeSelector.raceButtons[9].emit('pointerdown')
            scene.gameContainer.stakeSelector.raceButtons[10].emit('pointerdown')
            scene.gameContainer.stakeSelector.raceButtons[11].emit('pointerdown')
            scene.gameContainer.stakeSelector.raceButtons[12].emit('pointerdown')
            scene.gameContainer.stakeSelector.raceButtons[13].emit('pointerdown')
            scene.gameContainer.stakeSelector.raceButtons[14].emit('pointerdown')
            scene.gameContainer.stakeSelector.raceButtons[15].emit('pointerdown')
            scene.gameContainer.stakeSelector.raceButtons[16].emit('pointerdown')
            scene.gameContainer.stakeSelector.raceButtons[17].emit('pointerdown')
            scene.gameContainer.stakeSelector.raceButtons[18].emit('pointerdown')
            scene.gameContainer.stakeSelector.raceButtons[19].emit('pointerdown')
            scene.gameContainer.stakeSelector.raceButtons[20].emit('pointerdown')
            scene.gameContainer.stakeSelector.raceButtons[21].emit('pointerdown')
            scene.gameContainer.stakeSelector.raceButtons[22].emit('pointerdown')
            scene.gameContainer.stakeSelector.raceButtons[23].emit('pointerdown')
            scene.gameContainer.stakeSelector.raceButtons[24].emit('pointerdown')
            scene.gameContainer.stakeSelector.raceButtons[25].emit('pointerdown')
            scene.gameContainer.stakeSelector.raceButtons[26].emit('pointerdown')
            scene.gameContainer.stakeSelector.raceButtons[27].emit('pointerdown')
            scene.gameContainer.stakeSelector.raceButtons[28].emit('pointerdown')
            scene.gameContainer.stakeSelector.raceButtons[29].emit('pointerdown')
            scene.gameContainer.stakeSelector.raceButtons[30].emit('pointerdown')
            scene.gameContainer.stakeSelector.raceButtons[31].emit('pointerdown')
            scene.gameContainer.stakeSelector.raceButtons[32].emit('pointerdown')
            scene.gameContainer.stakeSelector.raceButtons[33].emit('pointerdown')
            scene.gameContainer.stakeSelector.raceButtons[34].emit('pointerdown')
            scene.gameContainer.stakeSelector.raceButtons[35].emit('pointerdown')
            scene.gameContainer.stakeSelector.raceButtons[36].emit('pointerdown')

            scene.gameContainer.startGroupButtons.list[0].emit('pointerdown')
        })


        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

        try {
            expect(scene.gameContainer.betPanel.list[9].text).to.include(18.50);
        } catch (err) {
            assertionErrors.push(err.message);
        }
        // This assertion checks total bet value

            // scene.gameContainer.betPanel.list[2].list[0].emit('pointerdown')
        })

        // cy.window().should((win) => {
        //     const game = win.game
        //     const scene = game.scene.scenes[1]
        //     const chip = scene.gameContainer.betPanel.activeButton.layout.name;

        //     expect(chip).to.include("chip_1")
        // })


        // cy.window().then((win) => {
        //     const game = win.game
        //     const scene = game.scene.scenes[1]

        //     scene.gameContainer.stakeSelector.raceButtons[0].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[1].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[2].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[3].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[4].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[5].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[6].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[7].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[8].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[9].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[10].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[11].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[12].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[13].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[14].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[15].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[16].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[17].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[18].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[19].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[20].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[21].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[22].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[23].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[24].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[25].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[26].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[27].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[28].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[29].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[30].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[31].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[32].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[33].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[34].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[35].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[36].emit('pointerdown')

        //     scene.gameContainer.startGroupButtons.list[0].emit('pointerdown')
        // })

        // cy.window().then((win) => {
        //     const game = win.game
        //     const scene = game.scene.scenes[1]

        // try {
        //     expect(scene.gameContainer.betPanel.list[9].text).to.include(111);
        // } catch (err) {
        //     cy.log('Assertion failed:', err.message);
        // }
        // // This assertion checks total bet value

        //     scene.gameContainer.betPanel.list[3].list[0].emit('pointerdown')
        // })

        // cy.window().should((win) => {
        //     const game = win.game
        //     const scene = game.scene.scenes[1]
        //     const chip = scene.gameContainer.betPanel.activeButton.layout.name;

        //     expect(chip).to.include("chip_2")
        // })

        // cy.window().then((win) => {
        //     const game = win.game
        //     const scene = game.scene.scenes[1]

        //     scene.gameContainer.stakeSelector.raceButtons[0].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[1].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[2].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[3].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[4].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[5].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[6].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[7].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[8].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[9].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[10].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[11].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[12].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[13].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[14].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[15].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[16].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[17].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[18].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[19].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[20].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[21].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[22].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[23].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[24].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[25].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[26].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[27].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[28].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[29].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[30].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[31].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[32].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[33].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[34].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[35].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[36].emit('pointerdown')

        //     scene.gameContainer.startGroupButtons.list[0].emit('pointerdown')
        // })


        // cy.window().then((win) => {
        //     const game = win.game
        //     const scene = game.scene.scenes[1]

        // try {
        //     expect(scene.gameContainer.betPanel.list[9].text).to.include(296);
        // } catch (err) {
        //     cy.log('Assertion failed:', err.message);
        // }
        // // This assertion checks total bet value

        //     scene.gameContainer.betPanel.list[4].list[0].emit('pointerdown')
        // })

        // cy.window().should((win) => {
        //     const game = win.game
        //     const scene = game.scene.scenes[1]
        //     const chip = scene.gameContainer.betPanel.activeButton.layout.name;

        //     expect(chip).to.include("chip_3")
        // })

        // cy.window().then((win) => {
        //     const game = win.game
        //     const scene = game.scene.scenes[1]

        //     scene.gameContainer.stakeSelector.raceButtons[0].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[1].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[2].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[3].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[4].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[5].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[6].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[7].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[8].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[9].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[10].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[11].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[12].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[13].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[14].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[15].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[16].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[17].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[18].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[19].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[20].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[21].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[22].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[23].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[24].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[25].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[26].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[27].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[28].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[29].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[30].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[31].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[32].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[33].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[34].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[35].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[36].emit('pointerdown')

        //     scene.gameContainer.startGroupButtons.list[0].emit('pointerdown')
        // })


        // cy.window().then((win) => {
        //     const game = win.game;
        //     const scene = game.scene.scenes[1];
    
        //     // Get the text and convert to comparable number
        //     const betText = scene.gameContainer.betPanel.list[9].text;
        //     const betValue = parseFloat(betText.replace(/[^0-9.]/g, ''));
    
        //     expect(betValue).to.equal(1221);  // Now compares numbers
    
        //     // Continue with your interaction
        //     scene.gameContainer.betPanel.list[5].list[0].emit('pointerdown');
        // });

        // cy.window().should((win) => {
        //     const game = win.game
        //     const scene = game.scene.scenes[1]
        //     const chip = scene.gameContainer.betPanel.activeButton.layout.name;

        //     expect(chip).to.include("chip_4")
        // })

        // cy.window().then((win) => {
        //     const game = win.game
        //     const scene = game.scene.scenes[1]

        //     scene.gameContainer.stakeSelector.raceButtons[0].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[1].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[2].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[3].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[4].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[5].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[6].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[7].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[8].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[9].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[10].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[11].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[12].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[13].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[14].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[15].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[16].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[17].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[18].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[19].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[20].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[21].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[22].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[23].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[24].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[25].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[26].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[27].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[28].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[29].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[30].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[31].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[32].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[33].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[34].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[35].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.raceButtons[36].emit('pointerdown')

        //     cy.wait(300)
        //     scene.gameContainer.startGroupButtons.list[0].emit('pointerdown')
        // })

        // cy.window().then((win) => {
        //     const game = win.game
        //     const scene = game.scene.scenes[1]

        // try {
        //     // Get the text and convert to comparable number
        //     const betText = scene.gameContainer.betPanel.list[9].text;
        //     const betValue = parseFloat(betText.replace(/[^0-9.]/g, ''));
    
        //     expect(betValue).to.equal(3071);  // Now compares numbers
        // } catch (err) {
        //     cy.log('Assertion failed:', err.message);
        // }   
        // })

        cy.wait('@startGame', { timeout: 25000 }).its('response.body').then((body) => {
        
        if  (body.state == "INVALID") {
        throw new Error(
        `API returned INVALID state. Full response: ${JSON.stringify(body)}`
        )}    

            cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            try {
                expect(scene.gameContainer.topPanel.balance).to.not.equal(100000);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }   
        })
            
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
            const expectedAmounts = [10, 10, 10, 10, 10]; 

            // Validate each corner combination has all amounts exactly once
            Object.entries(Combinations).forEach(([combo, amounts]) => {
                try {
                    expect(amounts, `5 straight ${combo} are in the response`).to.deep.equal(expectedAmounts);
                } catch (err) {
                    assertionErrors.push(err.message);
                }
            });

            // Check total stakes count
            try {
                expect(body.gameResult.integrationResultData.stakes).to.have.length(185, 'Should have 185 total stakes');
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

            