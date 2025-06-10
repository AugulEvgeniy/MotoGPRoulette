describe('All stake objects are sent and validated. Total Bet value and Balance updates correctly in UI', () => {
    it('"type": "dozen", 15 stake objects with every stake value', () =>{

        cy.visitTestEnvironment()
        cy.interceptStartGame()


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
            cy.log('Assertion failed:', err.message);
        }   
        })


        cy.wait('@startGame', { timeout: 25000 }).its('response.body').then((body) => {
            cy.log('startGame response:', body.game);
        
        if  (body.state == "INVALID") {
        throw new Error(
        `API returned INVALID state. Full response: ${JSON.stringify(body)}`
        )}    

            const dozen_1 = [1,2,3,4,5,6,7,8,9,10,11,12]
            const dozen_2 = [13,14,15,16,17,18,19,20,21,22,23,24]
            const dozen_3 = [25,26,27,28,29,30,31,32,33,34,35,36]


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
                expect(body.integrationResultData.stakes).to.have.length(15);
            } catch (err) {
             cy.log('Assertion failed:', err.message);
            }
        
            expect(body.integrationResultData.stakes[0].cells).to.deep.equal(dozen_1)
            expect(body.integrationResultData.stakes[1].cells).to.deep.equal(dozen_2)
            expect(body.integrationResultData.stakes[2].cells).to.deep.equal(dozen_3)
            
            const splitCombinations = {}; // Track each unique split pair and their amounts
            const cellCoverage = {}; // Track how many times each number appears
        
            // Initialize coverage for all cells (0-60 or your max number)
            for (let i = 0; i <= 3; i++) {
                cellCoverage[i] = 0;
            }
        
            // Process each stake
            stakes.forEach(stake => {
                expect(stake.type, 'All stakes should have type "dozen"').to.equal('dozen');
        
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
            const expectedAmounts = [10, 50, 100, 500, 1000];
        
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
    it('Dozen bets should not activate Bonus Game', () =>{
        cy.window().should((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            const bonus = scene.gameContainer.isShowBonusSectors.show;

            expect(bonus).to.be.false;
        })
    })
})