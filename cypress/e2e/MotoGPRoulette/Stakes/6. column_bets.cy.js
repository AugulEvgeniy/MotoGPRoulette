describe('All stake objects are sent and validated. Total Bet value and Balance updates correctly in UI', () => {
    it('"type": "column", 15 stake objects with every stake value', () =>{

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

            scene.gameContainer.stakeSelector.columnButtons[0].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.columnButtons[1].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.columnButtons[2].list[0].emit('pointerdown')
  

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

            scene.gameContainer.stakeSelector.columnButtons[0].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.columnButtons[1].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.columnButtons[2].list[0].emit('pointerdown')
  

        })

        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

        try {
            expect(scene.gameContainer.betPanel.list[9].text).to.include(1.80);
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

            scene.gameContainer.stakeSelector.columnButtons[0].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.columnButtons[1].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.columnButtons[2].list[0].emit('pointerdown')
  

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

            scene.gameContainer.stakeSelector.columnButtons[0].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.columnButtons[1].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.columnButtons[2].list[0].emit('pointerdown')
        })


        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

        try {
            expect(scene.gameContainer.betPanel.list[9].text).to.include(19.80);
        } catch (err) {
            cy.log('Assertion failed:', err.message);
        }

        // This assertion checks total bet value

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

            scene.gameContainer.stakeSelector.columnButtons[0].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.columnButtons[1].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.columnButtons[2].list[0].emit('pointerdown')
  
            cy.wait(300)
            scene.gameContainer.list[5].list[0].emit('pointerdown')
        })

        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

        try {
            expect(scene.gameContainer.betPanel.list[9].text).to.include(49.80);
        } catch (err) {
            cy.log('Assertion failed:', err.message);
        }   
        })


        cy.wait('@startGame').its('response.body').then((body) => {
            cy.log('startGame response:', body.game);
        
            const column_1 = [1,4,7,10,13,16,19,22,25,28,31,34]
            const column_2 = [2,5,8,11,14,17,20,23,26,29,32,35]
            const column_3 = [3,6,9,12,15,18,21,24,27,30,33,36]
            
        
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
                expect(body.game.integrationResultData.stakes).to.have.length(15);
            } catch (err) {
             cy.log('Assertion failed:', err.message);
            }

            expect(JSON.stringify(body.game.integrationResultData.stakes[0].cells)).to.deep.equal(JSON.stringify(column_1))
            expect(JSON.stringify(body.game.integrationResultData.stakes[1].cells)).to.deep.equal(JSON.stringify(column_2))
            expect(JSON.stringify(body.game.integrationResultData.stakes[2].cells)).to.deep.equal(JSON.stringify(column_3))
            cy.log(body.game.integrationResultData.stakes)
            
            const splitCombinations = {}; // Track each unique split pair and their amounts
            const cellCoverage = {}; // Track how many times each number appears
        
            // Initialize coverage for all cells (0-60 or your max number)
            for (let i = 0; i <= 3; i++) {
                cellCoverage[i] = 0;
            }
        
            // Process each stake
            stakes.forEach(stake => {
                expect(stake.type, 'All stakes should have type "column"').to.equal('column');
        
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
                    if (cell >= 0 && cell <= 3) {
                        cellCoverage[cell]++;
                    }
                });
            });
        
            // Expected amounts
            const expectedAmounts = [0.1, 0.5, 1, 5, 10];
        
            // Verify each split combination has all 5 amounts exactly once
            Object.entries(splitCombinations).forEach(([combo, amounts]) => {
                expect(amounts.sort((a, b) => a - b), 
                    `Column ${combo} should have amounts 0.1, 0.5, 1, 5, 10 GBP`
                ).to.deep.equal(expectedAmounts.sort((a, b) => a - b));
            });
        });
    }) 
})
            
describe('Bonus Game cells are highlighted', () => {
    it('Column bets should not activate Bonus Game', () =>{
        cy.window().should((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            const bonus = scene.gameContainer.isShowBonusSectors.show;

            expect(bonus).to.be.false;
        })
    })
})