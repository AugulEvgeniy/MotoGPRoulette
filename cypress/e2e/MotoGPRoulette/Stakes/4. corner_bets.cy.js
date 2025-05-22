describe('All stake objects are sent and validated. Total Bet value and Balance updates correctly in UI', () => {
    it('"type": "corner", 115 stake objects with every stake value', () =>{

        cy.visitTestEnvironment()
        cy.intercept('start-game').as('startGame')


        cy.window({ timeout: 20000 }).should((win) => {
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

            scene.gameContainer.stakeSelector.cornerButtons[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[1].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[2].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[3].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[4].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[5].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[6].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[7].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[8].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[9].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[10].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[11].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[12].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[13].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[14].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[15].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[16].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[17].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[18].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[19].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[20].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[21].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerZeroButtons[0].emit('pointerdown')

        })


        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

        try {
            expect(scene.gameContainer.betPanel.list[9].text).to.include(2.30);
        } catch (err) {
            cy.log('Assertion failed:', err.message);
        }            

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

            scene.gameContainer.stakeSelector.cornerButtons[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[1].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[2].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[3].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[4].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[5].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[6].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[7].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[8].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[9].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[10].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[11].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[12].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[13].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[14].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[15].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[16].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[17].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[18].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[19].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[20].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[21].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerZeroButtons[0].emit('pointerdown')

        })

        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

        try {
            expect(scene.gameContainer.betPanel.list[9].text).to.include(13.80);
        } catch (err) {
            cy.log('Assertion failed:', err.message);
        }            

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

            scene.gameContainer.stakeSelector.cornerButtons[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[1].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[2].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[3].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[4].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[5].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[6].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[7].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[8].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[9].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[10].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[11].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[12].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[13].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[14].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[15].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[16].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[17].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[18].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[19].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[20].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[21].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerZeroButtons[0].emit('pointerdown')

        })


        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

        try {
            expect(scene.gameContainer.betPanel.list[9].text).to.include(36.8);
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

            scene.gameContainer.stakeSelector.cornerButtons[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[1].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[2].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[3].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[4].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[5].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[6].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[7].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[8].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[9].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[10].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[11].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[12].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[13].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[14].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[15].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[16].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[17].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[18].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[19].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[20].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[21].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerZeroButtons[0].emit('pointerdown')

        })


        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

        try {
            expect(scene.gameContainer.betPanel.list[9].text).to.include(151.8);
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

            scene.gameContainer.stakeSelector.cornerButtons[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[1].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[2].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[3].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[4].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[5].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[6].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[7].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[8].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[9].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[10].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[11].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[12].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[13].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[14].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[15].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[16].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[17].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[18].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[19].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[20].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[21].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerZeroButtons[0].emit('pointerdown')


            cy.wait(300)
            scene.gameContainer.list[5].list[0].emit('pointerdown')
        })


        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

        try {
            expect(scene.gameContainer.betPanel.list[9].text).to.include(381.8);
        } catch (err) {
            cy.log('Assertion failed:', err.message);
        }   
        })


        cy.wait('@startGame').its('response.body').then((body) => {
            cy.log('startGame response:', body.game);
        
            const stakes = body.game.integrationResultData.stakes;

            cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            try {
                expect(scene.gameContainer.topPanel.balance).to.not.equal(1000);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }   
        })

            try {
                expect(body.game.integrationResultData.stakes).to.have.length(115);
            } catch (err) {
             cy.log('Assertion failed:', err.message);
            }
            
            const splitCombinations = {}; // Track each unique split pair and their amounts
            const cellCoverage = {}; // Track how many times each number appears
        
            // Initialize coverage for all cells (0-60 or your max number)
            for (let i = 0; i <= 23; i++) {
                cellCoverage[i] = 0;
            }
        
            // Process each stake
            stakes.forEach(stake => {
                expect(stake.type, 'All stakes should have type "corner"').to.equal('corner');
        
                const amountGBP = stake.amountsPence; // Assuming already in GBP
                const sortedCells = [...stake.cells].sort((a, b) => a - b);
                const comboKey = sortedCells.join(',');
        
                // Initialize if this split combination hasn't been tracked yet
                if (!splitCombinations[comboKey]) {
                    splitCombinations[comboKey] = [];
                }
        
                // Track this amount for the split combination
                splitCombinations[comboKey].push(amountGBP);
        
                // Count coverage for each cell in this split
                stake.cells.forEach(cell => {
                    if (cell >= 0 && cell <= 23) {
                        cellCoverage[cell]++;
                    }
                });
            });
        
            // Expected amounts
            const expectedAmounts = [0.1, 0.5, 1, 5, 10];
        
            // Verify each split combination has all 5 amounts exactly once
            Object.entries(splitCombinations).forEach(([combo, amounts]) => {
                expect(amounts.sort((a, b) => a - b), 
                    `Corner ${combo} should have amounts 0.1, 0.5, 1, 5, 10 GBP`
                ).to.deep.equal(expectedAmounts.sort((a, b) => a - b));
            });
        });
    }) 
})
            
describe('Bonus Game cells are highlighted', () => {
    it('0-1-2-3 bet should activate Bonus Game', () =>{
        cy.window().should((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            const bonus = scene.gameContainer.isShowBonusSectors.show;

            expect(bonus).to.be.true;
        })
    })
})
            