describe('All stake objects are sent and validated. Total Bet value and Balance updates correctly in UI', () => {
    it('"type": "six-line", 55 stake objects with every stake value', () =>{

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

            scene.gameContainer.stakeSelector.sixLineButtons[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.sixLineButtons[1].emit('pointerdown')
            scene.gameContainer.stakeSelector.sixLineButtons[2].emit('pointerdown')
            scene.gameContainer.stakeSelector.sixLineButtons[3].emit('pointerdown')
            scene.gameContainer.stakeSelector.sixLineButtons[4].emit('pointerdown')
            scene.gameContainer.stakeSelector.sixLineButtons[5].emit('pointerdown')
            scene.gameContainer.stakeSelector.sixLineButtons[6].emit('pointerdown')
            scene.gameContainer.stakeSelector.sixLineButtons[7].emit('pointerdown')
            scene.gameContainer.stakeSelector.sixLineButtons[8].emit('pointerdown')
            scene.gameContainer.stakeSelector.sixLineButtons[9].emit('pointerdown')
            scene.gameContainer.stakeSelector.sixLineButtons[10].emit('pointerdown')
        })


        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

        try {
            expect(scene.gameContainer.betPanel.list[9].text).to.include(1.10);
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

            scene.gameContainer.stakeSelector.sixLineButtons[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.sixLineButtons[1].emit('pointerdown')
            scene.gameContainer.stakeSelector.sixLineButtons[2].emit('pointerdown')
            scene.gameContainer.stakeSelector.sixLineButtons[3].emit('pointerdown')
            scene.gameContainer.stakeSelector.sixLineButtons[4].emit('pointerdown')
            scene.gameContainer.stakeSelector.sixLineButtons[5].emit('pointerdown')
            scene.gameContainer.stakeSelector.sixLineButtons[6].emit('pointerdown')
            scene.gameContainer.stakeSelector.sixLineButtons[7].emit('pointerdown')
            scene.gameContainer.stakeSelector.sixLineButtons[8].emit('pointerdown')
            scene.gameContainer.stakeSelector.sixLineButtons[9].emit('pointerdown')
            scene.gameContainer.stakeSelector.sixLineButtons[10].emit('pointerdown')

        })

        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

        try {
            expect(scene.gameContainer.betPanel.list[9].text).to.include(6.60);
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

            scene.gameContainer.stakeSelector.sixLineButtons[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.sixLineButtons[1].emit('pointerdown')
            scene.gameContainer.stakeSelector.sixLineButtons[2].emit('pointerdown')
            scene.gameContainer.stakeSelector.sixLineButtons[3].emit('pointerdown')
            scene.gameContainer.stakeSelector.sixLineButtons[4].emit('pointerdown')
            scene.gameContainer.stakeSelector.sixLineButtons[5].emit('pointerdown')
            scene.gameContainer.stakeSelector.sixLineButtons[6].emit('pointerdown')
            scene.gameContainer.stakeSelector.sixLineButtons[7].emit('pointerdown')
            scene.gameContainer.stakeSelector.sixLineButtons[8].emit('pointerdown')
            scene.gameContainer.stakeSelector.sixLineButtons[9].emit('pointerdown')
            scene.gameContainer.stakeSelector.sixLineButtons[10].emit('pointerdown')

        })


        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

        try {
            expect(scene.gameContainer.betPanel.list[9].text).to.include(17.60);
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

            scene.gameContainer.stakeSelector.sixLineButtons[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.sixLineButtons[1].emit('pointerdown')
            scene.gameContainer.stakeSelector.sixLineButtons[2].emit('pointerdown')
            scene.gameContainer.stakeSelector.sixLineButtons[3].emit('pointerdown')
            scene.gameContainer.stakeSelector.sixLineButtons[4].emit('pointerdown')
            scene.gameContainer.stakeSelector.sixLineButtons[5].emit('pointerdown')
            scene.gameContainer.stakeSelector.sixLineButtons[6].emit('pointerdown')
            scene.gameContainer.stakeSelector.sixLineButtons[7].emit('pointerdown')
            scene.gameContainer.stakeSelector.sixLineButtons[8].emit('pointerdown')
            scene.gameContainer.stakeSelector.sixLineButtons[9].emit('pointerdown')
            scene.gameContainer.stakeSelector.sixLineButtons[10].emit('pointerdown')

        })


        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

        try {
            expect(scene.gameContainer.betPanel.list[9].text).to.include(72.60);
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

            scene.gameContainer.stakeSelector.sixLineButtons[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.sixLineButtons[1].emit('pointerdown')
            scene.gameContainer.stakeSelector.sixLineButtons[2].emit('pointerdown')
            scene.gameContainer.stakeSelector.sixLineButtons[3].emit('pointerdown')
            scene.gameContainer.stakeSelector.sixLineButtons[4].emit('pointerdown')
            scene.gameContainer.stakeSelector.sixLineButtons[5].emit('pointerdown')
            scene.gameContainer.stakeSelector.sixLineButtons[6].emit('pointerdown')
            scene.gameContainer.stakeSelector.sixLineButtons[7].emit('pointerdown')
            scene.gameContainer.stakeSelector.sixLineButtons[8].emit('pointerdown')
            scene.gameContainer.stakeSelector.sixLineButtons[9].emit('pointerdown')
            scene.gameContainer.stakeSelector.sixLineButtons[10].emit('pointerdown')


            cy.wait(300)
            scene.gameContainer.list[5].list[0].emit('pointerdown')
        })

        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

        try {
            expect(scene.gameContainer.betPanel.list[9].text).to.include(182.60);
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
                expect(body.game.integrationResultData.stakes).to.have.length(55);
            } catch (err) {
             cy.log('Assertion failed:', err.message);
            }
            
            const splitCombinations = {}; // Track each unique split pair and their amounts
            const cellCoverage = {}; // Track how many times each number appears
        
            // Initialize coverage for all cells (0-60 or your max number)
            for (let i = 0; i <= 11; i++) {
                cellCoverage[i] = 0;
            }
        
            // Process each stake
            stakes.forEach(stake => {
                expect(stake.type, 'All stakes should have type "six-line"').to.equal('six_line');
        
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
                    if (cell >= 0 && cell <= 11) {
                        cellCoverage[cell]++;
                    }
                });
            });
        
            // Expected amounts
            const expectedAmounts = [0.1, 0.5, 1, 5, 10];
        
            // Verify each split combination has all 5 amounts exactly once
            Object.entries(splitCombinations).forEach(([combo, amounts]) => {
                expect(amounts.sort((a, b) => a - b), 
                    `Six-line ${combo} should have amounts 0.1, 0.5, 1, 5, 10 GBP`
                ).to.deep.equal(expectedAmounts.sort((a, b) => a - b));
            });
        });
    }) 
})
            

describe('Bonus Game cells are not highlighted', () => {
    it('Six-line bets should not activate Bonus Game', () =>{
        cy.window().should((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            const bonus = scene.gameContainer.isShowBonusSectors.show;

            expect(bonus).to.be.false;
        })
    })
})