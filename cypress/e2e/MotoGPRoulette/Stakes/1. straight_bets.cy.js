describe('All stake objects are sent and validated. Total Bet value and Balance updates correctly in UI', () => {
    it('"type": "straight", 185 stake objects with every stake value)', () => {

        cy.visitTestEnvironment()
        cy.interceptStartGame()


        cy.window({ timeout: 30000 }).should((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            const start_button = scene.gameContainer.list[5].list[0].visible;

            expect(start_button, 'Game is loaded').to.be.true
        })
        
        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            scene.gameContainer.list[7].list[1].list[0].emit('pointerdown')
        })

        cy.window().should((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            const chip = scene.gameContainer.list[7].activeButton.layout.name;

            expect(chip).to.include("chip_0")
        })

        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

            cy.wait(1000)
            scene.gameContainer.list[4].list[0].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[1].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[2].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[3].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[4].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[5].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[6].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[7].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[8].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[9].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[10].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[11].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[12].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[13].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[14].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[15].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[16].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[17].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[18].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[19].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[20].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[21].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[22].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[23].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[24].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[25].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[26].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[27].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[28].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[29].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[30].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[31].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[32].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[33].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[34].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[35].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[36].list[0].emit('pointerdown')
        })


        cy.window().then((win) => {
            
            const game = win.game
            const scene = game.scene.scenes[1]

        try {
            expect(scene.gameContainer.betPanel.list[9].text).to.include(3.70);
        } catch (err) {
            cy.log('Assertion failed:', err.message);
        }

        // This assertion checks total bet value

            scene.gameContainer.list[7].list[2].list[0].emit('pointerdown')
        })

        cy.window().should((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            const chip = scene.gameContainer.list[7].activeButton.layout.name;

            expect(chip).to.include("chip_1")
        })


        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

            scene.gameContainer.list[4].list[0].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[1].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[2].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[3].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[4].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[5].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[6].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[7].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[8].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[9].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[10].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[11].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[12].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[13].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[14].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[15].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[16].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[17].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[18].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[19].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[20].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[21].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[22].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[23].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[24].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[25].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[26].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[27].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[28].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[29].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[30].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[31].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[32].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[33].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[34].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[35].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[36].list[0].emit('pointerdown')
        })

        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

        try {
            expect(scene.gameContainer.betPanel.list[9].text).to.include(22.2);
        } catch (err) {
            cy.log('Assertion failed:', err.message);
        }

        // This assertion checks total bet value

            scene.gameContainer.list[7].list[3].list[0].emit('pointerdown')
        })

        cy.window().should((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            const chip = scene.gameContainer.list[7].activeButton.layout.name;

            expect(chip).to.include("chip_2")
        })

        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

            scene.gameContainer.list[4].list[0].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[1].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[2].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[3].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[4].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[5].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[6].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[7].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[8].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[9].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[10].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[11].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[12].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[13].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[14].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[15].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[16].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[17].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[18].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[19].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[20].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[21].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[22].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[23].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[24].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[25].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[26].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[27].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[28].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[29].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[30].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[31].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[32].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[33].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[34].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[35].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[36].list[0].emit('pointerdown')
        })


        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

        try {
            expect(scene.gameContainer.betPanel.list[9].text).to.include(59.2);
        } catch (err) {
            cy.log('Assertion failed:', err.message);
        }

            scene.gameContainer.list[7].list[4].list[0].emit('pointerdown')
        })

        cy.window().should((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            const chip = scene.gameContainer.list[7].activeButton.layout.name;

            expect(chip).to.include("chip_3")
        })

        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

            scene.gameContainer.list[4].list[0].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[1].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[2].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[3].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[4].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[5].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[6].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[7].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[8].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[9].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[10].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[11].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[12].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[13].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[14].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[15].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[16].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[17].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[18].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[19].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[20].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[21].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[22].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[23].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[24].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[25].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[26].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[27].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[28].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[29].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[30].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[31].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[32].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[33].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[34].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[35].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[36].list[0].emit('pointerdown')
        })


        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

        try {
            expect(scene.gameContainer.betPanel.list[9].text).to.include(244.2);
        } catch (err) {
            cy.log('Assertion failed:', err.message);
        }   

            scene.gameContainer.list[7].list[5].list[0].emit('pointerdown')
        })

        cy.window().should((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            const chip = scene.gameContainer.list[7].activeButton.layout.name;

            expect(chip).to.include("chip_4")
        })

        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

            scene.gameContainer.list[4].list[0].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[1].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[2].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[3].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[4].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[5].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[6].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[7].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[8].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[9].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[10].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[11].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[12].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[13].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[14].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[15].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[16].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[17].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[18].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[19].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[20].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[21].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[22].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[23].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[24].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[25].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[26].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[27].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[28].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[29].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[30].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[31].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[32].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[33].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[34].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[35].list[0].emit('pointerdown')
            scene.gameContainer.list[4].list[36].list[0].emit('pointerdown')

            cy.wait(300)
            scene.gameContainer.list[5].list[0].emit('pointerdown')
        })

        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

        try {
            expect(scene.gameContainer.betPanel.list[9].text).to.include(614.2);
        } catch (err) {
            cy.log('Assertion failed:', err.message);
        }   
        })


        cy.wait('@startGame', { timeout: 10000}).its('response.body').then((body) => {
            cy.log('startGame response:', body);
        
            const stakes = body.integrationResultData.stakes;

        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            try {
                expect(scene.gameContainer.topPanel.balance).to.not.equal(100000);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }   
        })


            try {
                expect(body.integrationResultData.stakes).to.have.length(185);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            
            const cellCounts = {};
            const cellAmounts = {}; // To track amounts for each cell
        
            // Initialize counts and amounts for all cells 0-36
            for (let i = 0; i <= 36; i++) {
                cellCounts[i] = 0;
                cellAmounts[i] = [];
            }
            
            // Count stakes and collect amounts for each cell
            stakes.forEach(stake => {
                expect(stake.type, 'All stakes should have type "straight"').to.equal('straight');
                stake.cells.forEach(cell => {
                    if (cell >= 0 && cell <= 36) {
                        cellCounts[cell]++;
                        const amountGBP = stake.amountsPence
                        cellAmounts[cell].push(amountGBP);
                    }
                });
            });
            
            // Expected amounts
            const expectedAmounts = [10, 50, 100, 500, 1000];
            
            // Verify each cell has exactly 5 stakes with the correct amounts
            for (let cell = 0; cell <= 36; cell++) {
                // expect(cellCounts[cell], `Cell ${cell} should have exactly 5 stakes`).to.equal(5);
                
                // Check that the amounts match exactly the expected amounts
                expect(cellAmounts[cell].sort((a, b) => a - b), 
                    `Cell ${cell} should have stakes with amounts 0.1, 0.5, 1, 5, 10 GBP`
                ).to.deep.equal(expectedAmounts.sort((a, b) => a - b));
            }
        })
    }) 
})

            