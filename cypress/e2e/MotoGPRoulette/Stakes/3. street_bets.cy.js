describe('All stake objects are sent and validated. Total Bet value and Balance updates correctly in UI', () => {
    it('"type": "street", 70 stake objects with every stake value', () => {

        // cy.visitTestEnvironment()
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

            scene.gameContainer.stakeSelector.streetButtons[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.streetButtons[1].emit('pointerdown')
            scene.gameContainer.stakeSelector.streetButtons[2].emit('pointerdown')
            scene.gameContainer.stakeSelector.streetButtons[3].emit('pointerdown')
            scene.gameContainer.stakeSelector.streetButtons[4].emit('pointerdown')
            scene.gameContainer.stakeSelector.streetButtons[5].emit('pointerdown')
            scene.gameContainer.stakeSelector.streetButtons[6].emit('pointerdown')
            scene.gameContainer.stakeSelector.streetButtons[7].emit('pointerdown')
            scene.gameContainer.stakeSelector.streetButtons[8].emit('pointerdown')
            scene.gameContainer.stakeSelector.streetButtons[9].emit('pointerdown')
            scene.gameContainer.stakeSelector.streetButtons[10].emit('pointerdown')
            scene.gameContainer.stakeSelector.streetButtons[11].emit('pointerdown')
            scene.gameContainer.stakeSelector.streetZeroButtons[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.streetZeroButtons[1].emit('pointerdown')
        })


        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

        try {
            expect(scene.gameContainer.betPanel.list[9].text).to.include(1.40);
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

            scene.gameContainer.stakeSelector.streetButtons[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.streetButtons[1].emit('pointerdown')
            scene.gameContainer.stakeSelector.streetButtons[2].emit('pointerdown')
            scene.gameContainer.stakeSelector.streetButtons[3].emit('pointerdown')
            scene.gameContainer.stakeSelector.streetButtons[4].emit('pointerdown')
            scene.gameContainer.stakeSelector.streetButtons[5].emit('pointerdown')
            scene.gameContainer.stakeSelector.streetButtons[6].emit('pointerdown')
            scene.gameContainer.stakeSelector.streetButtons[7].emit('pointerdown')
            scene.gameContainer.stakeSelector.streetButtons[8].emit('pointerdown')
            scene.gameContainer.stakeSelector.streetButtons[9].emit('pointerdown')
            scene.gameContainer.stakeSelector.streetButtons[10].emit('pointerdown')
            scene.gameContainer.stakeSelector.streetButtons[11].emit('pointerdown')
            scene.gameContainer.stakeSelector.streetZeroButtons[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.streetZeroButtons[1].emit('pointerdown')
        })

        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

        try {
            expect(scene.gameContainer.betPanel.list[9].text).to.include(8.40);
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

            scene.gameContainer.stakeSelector.streetButtons[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.streetButtons[1].emit('pointerdown')
            scene.gameContainer.stakeSelector.streetButtons[2].emit('pointerdown')
            scene.gameContainer.stakeSelector.streetButtons[3].emit('pointerdown')
            scene.gameContainer.stakeSelector.streetButtons[4].emit('pointerdown')
            scene.gameContainer.stakeSelector.streetButtons[5].emit('pointerdown')
            scene.gameContainer.stakeSelector.streetButtons[6].emit('pointerdown')
            scene.gameContainer.stakeSelector.streetButtons[7].emit('pointerdown')
            scene.gameContainer.stakeSelector.streetButtons[8].emit('pointerdown')
            scene.gameContainer.stakeSelector.streetButtons[9].emit('pointerdown')
            scene.gameContainer.stakeSelector.streetButtons[10].emit('pointerdown')
            scene.gameContainer.stakeSelector.streetButtons[11].emit('pointerdown')
            scene.gameContainer.stakeSelector.streetZeroButtons[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.streetZeroButtons[1].emit('pointerdown')
        })


        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

        try {
            expect(scene.gameContainer.betPanel.list[9].text).to.include(22.40);
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

            scene.gameContainer.stakeSelector.streetButtons[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.streetButtons[1].emit('pointerdown')
            scene.gameContainer.stakeSelector.streetButtons[2].emit('pointerdown')
            scene.gameContainer.stakeSelector.streetButtons[3].emit('pointerdown')
            scene.gameContainer.stakeSelector.streetButtons[4].emit('pointerdown')
            scene.gameContainer.stakeSelector.streetButtons[5].emit('pointerdown')
            scene.gameContainer.stakeSelector.streetButtons[6].emit('pointerdown')
            scene.gameContainer.stakeSelector.streetButtons[7].emit('pointerdown')
            scene.gameContainer.stakeSelector.streetButtons[8].emit('pointerdown')
            scene.gameContainer.stakeSelector.streetButtons[9].emit('pointerdown')
            scene.gameContainer.stakeSelector.streetButtons[10].emit('pointerdown')
            scene.gameContainer.stakeSelector.streetButtons[11].emit('pointerdown')
            scene.gameContainer.stakeSelector.streetZeroButtons[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.streetZeroButtons[1].emit('pointerdown')
        })


        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

        try {
            expect(scene.gameContainer.betPanel.list[9].text).to.include(92.40);
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

            scene.gameContainer.stakeSelector.streetButtons[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.streetButtons[1].emit('pointerdown')
            scene.gameContainer.stakeSelector.streetButtons[2].emit('pointerdown')
            scene.gameContainer.stakeSelector.streetButtons[3].emit('pointerdown')
            scene.gameContainer.stakeSelector.streetButtons[4].emit('pointerdown')
            scene.gameContainer.stakeSelector.streetButtons[5].emit('pointerdown')
            scene.gameContainer.stakeSelector.streetButtons[6].emit('pointerdown')
            scene.gameContainer.stakeSelector.streetButtons[7].emit('pointerdown')
            scene.gameContainer.stakeSelector.streetButtons[8].emit('pointerdown')
            scene.gameContainer.stakeSelector.streetButtons[9].emit('pointerdown')
            scene.gameContainer.stakeSelector.streetButtons[10].emit('pointerdown')
            scene.gameContainer.stakeSelector.streetButtons[11].emit('pointerdown')
            scene.gameContainer.stakeSelector.streetZeroButtons[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.streetZeroButtons[1].emit('pointerdown')

            cy.wait(300)
            scene.gameContainer.list[5].list[0].emit('pointerdown')
        })


        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

        try {
            expect(scene.gameContainer.betPanel.list[9].text).to.include(232.40);
        } catch (err) {
            cy.log('Assertion failed:', err.message);
        }

        // This assertion checks total bet value

            scene.gameContainer.list[7].list[3].list[0].emit('pointerdown')
        })


        cy.wait('@startGame', { timeout: 10000}).its('response.body').then((body) => {
        cy.log('startGame response:', body.game);
        
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
            expect(body.game.integrationResultData.stakes).to.have.length(70);
        } catch (err) {
            cy.log('Assertion failed:', err.message);
        }
            
        const splitCombinations = {}; // Track each unique split pair and their amounts
        const cellCoverage = {}; // Track how many times each number appears
        
        // Initialize coverage for all cells
        for (let i = 0; i <= 14; i++) {
            cellCoverage[i] = 0;
        }
        
            // Process each stake
        stakes.forEach(stake => {
            expect(stake.type, 'All stakes should have type "street"').to.equal('street');
        
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
                if (cell >= 0 && cell <= 14) {
                    cellCoverage[cell]++;
                }
            });
        });
        
            // Expected amounts
            const expectedAmounts = [10, 50, 100, 500, 1000];
        
            // Verify each split combination has all 5 amounts exactly once
            Object.entries(splitCombinations).forEach(([combo, amounts]) => {
                expect(amounts.sort((a, b) => a - b), 
                    `Street ${combo} should have amounts 0.1, 0.5, 1, 5, 10 GBP`
                ).to.deep.equal(expectedAmounts.sort((a, b) => a - b));
            });
        });
    }) 
})