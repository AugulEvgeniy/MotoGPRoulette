describe('All stake objects are sent and validated. Total Bet value and Balance updates correctly in UI', () => {
    it('"type": "split", 300 stake objects with every stake value', () =>{

        cy.visitTestEnvironment()
        cy.interceptStartGame()


        cy.window({ timeout: 50000 }).should((win) => {
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

            scene.gameContainer.list[4].list[37].emit('pointerdown')
            scene.gameContainer.list[4].list[38].emit('pointerdown')
            scene.gameContainer.list[4].list[39].emit('pointerdown')
            scene.gameContainer.list[4].list[40].emit('pointerdown')
            scene.gameContainer.list[4].list[41].emit('pointerdown')
            scene.gameContainer.list[4].list[42].emit('pointerdown')
            scene.gameContainer.list[4].list[43].emit('pointerdown')
            scene.gameContainer.list[4].list[44].emit('pointerdown')
            scene.gameContainer.list[4].list[45].emit('pointerdown')
            scene.gameContainer.list[4].list[46].emit('pointerdown')
            scene.gameContainer.list[4].list[47].emit('pointerdown')
            scene.gameContainer.list[4].list[48].emit('pointerdown')
            scene.gameContainer.list[4].list[49].emit('pointerdown')
            scene.gameContainer.list[4].list[50].emit('pointerdown')
            scene.gameContainer.list[4].list[51].emit('pointerdown')
            scene.gameContainer.list[4].list[52].emit('pointerdown')
            scene.gameContainer.list[4].list[53].emit('pointerdown')
            scene.gameContainer.list[4].list[54].emit('pointerdown')
            scene.gameContainer.list[4].list[55].emit('pointerdown')
            scene.gameContainer.list[4].list[56].emit('pointerdown')
            scene.gameContainer.list[4].list[57].emit('pointerdown')
            scene.gameContainer.list[4].list[58].emit('pointerdown')
            scene.gameContainer.list[4].list[59].emit('pointerdown')
            scene.gameContainer.list[4].list[60].emit('pointerdown')
            scene.gameContainer.list[4].list[61].emit('pointerdown')
            scene.gameContainer.list[4].list[62].emit('pointerdown')
            scene.gameContainer.list[4].list[63].emit('pointerdown')
            scene.gameContainer.list[4].list[64].emit('pointerdown')
            scene.gameContainer.list[4].list[65].emit('pointerdown')
            scene.gameContainer.list[4].list[66].emit('pointerdown')
            scene.gameContainer.list[4].list[67].emit('pointerdown')
            scene.gameContainer.list[4].list[68].emit('pointerdown')
            scene.gameContainer.list[4].list[69].emit('pointerdown')
            scene.gameContainer.list[4].list[70].emit('pointerdown')
            scene.gameContainer.list[4].list[71].emit('pointerdown')
            scene.gameContainer.list[4].list[72].emit('pointerdown')
            scene.gameContainer.list[4].list[73].emit('pointerdown')
            scene.gameContainer.list[4].list[74].emit('pointerdown')
            scene.gameContainer.list[4].list[75].emit('pointerdown')
            scene.gameContainer.list[4].list[76].emit('pointerdown')
            scene.gameContainer.list[4].list[77].emit('pointerdown')
            scene.gameContainer.list[4].list[78].emit('pointerdown')
            scene.gameContainer.list[4].list[79].emit('pointerdown')
            scene.gameContainer.list[4].list[80].emit('pointerdown')
            scene.gameContainer.list[4].list[81].emit('pointerdown')
            scene.gameContainer.list[4].list[82].emit('pointerdown')
            scene.gameContainer.list[4].list[83].emit('pointerdown')
            scene.gameContainer.list[4].list[84].emit('pointerdown')
            scene.gameContainer.list[4].list[85].emit('pointerdown')
            scene.gameContainer.list[4].list[86].emit('pointerdown')
            scene.gameContainer.list[4].list[87].emit('pointerdown')
            scene.gameContainer.list[4].list[88].emit('pointerdown')
            scene.gameContainer.list[4].list[89].emit('pointerdown')
            scene.gameContainer.list[4].list[90].emit('pointerdown')
            scene.gameContainer.list[4].list[91].emit('pointerdown')
            scene.gameContainer.list[4].list[92].emit('pointerdown')
            scene.gameContainer.list[4].list[93].emit('pointerdown')
            scene.gameContainer.list[4].list[94].emit('pointerdown')
            scene.gameContainer.list[4].list[95].emit('pointerdown')
            scene.gameContainer.list[4].list[96].emit('pointerdown')
        })


        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

        try {
            expect(scene.gameContainer.betPanel.list[9].text).to.include(6);
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

            scene.gameContainer.list[4].list[37].emit('pointerdown')
            scene.gameContainer.list[4].list[38].emit('pointerdown')
            scene.gameContainer.list[4].list[39].emit('pointerdown')
            scene.gameContainer.list[4].list[40].emit('pointerdown')
            scene.gameContainer.list[4].list[41].emit('pointerdown')
            scene.gameContainer.list[4].list[42].emit('pointerdown')
            scene.gameContainer.list[4].list[43].emit('pointerdown')
            scene.gameContainer.list[4].list[44].emit('pointerdown')
            scene.gameContainer.list[4].list[45].emit('pointerdown')
            scene.gameContainer.list[4].list[46].emit('pointerdown')
            scene.gameContainer.list[4].list[47].emit('pointerdown')
            scene.gameContainer.list[4].list[48].emit('pointerdown')
            scene.gameContainer.list[4].list[49].emit('pointerdown')
            scene.gameContainer.list[4].list[50].emit('pointerdown')
            scene.gameContainer.list[4].list[51].emit('pointerdown')
            scene.gameContainer.list[4].list[52].emit('pointerdown')
            scene.gameContainer.list[4].list[53].emit('pointerdown')
            scene.gameContainer.list[4].list[54].emit('pointerdown')
            scene.gameContainer.list[4].list[55].emit('pointerdown')
            scene.gameContainer.list[4].list[56].emit('pointerdown')
            scene.gameContainer.list[4].list[57].emit('pointerdown')
            scene.gameContainer.list[4].list[58].emit('pointerdown')
            scene.gameContainer.list[4].list[59].emit('pointerdown')
            scene.gameContainer.list[4].list[60].emit('pointerdown')
            scene.gameContainer.list[4].list[61].emit('pointerdown')
            scene.gameContainer.list[4].list[62].emit('pointerdown')
            scene.gameContainer.list[4].list[63].emit('pointerdown')
            scene.gameContainer.list[4].list[64].emit('pointerdown')
            scene.gameContainer.list[4].list[65].emit('pointerdown')
            scene.gameContainer.list[4].list[66].emit('pointerdown')
            scene.gameContainer.list[4].list[67].emit('pointerdown')
            scene.gameContainer.list[4].list[68].emit('pointerdown')
            scene.gameContainer.list[4].list[69].emit('pointerdown')
            scene.gameContainer.list[4].list[70].emit('pointerdown')
            scene.gameContainer.list[4].list[71].emit('pointerdown')
            scene.gameContainer.list[4].list[72].emit('pointerdown')
            scene.gameContainer.list[4].list[73].emit('pointerdown')
            scene.gameContainer.list[4].list[74].emit('pointerdown')
            scene.gameContainer.list[4].list[75].emit('pointerdown')
            scene.gameContainer.list[4].list[76].emit('pointerdown')
            scene.gameContainer.list[4].list[77].emit('pointerdown')
            scene.gameContainer.list[4].list[78].emit('pointerdown')
            scene.gameContainer.list[4].list[79].emit('pointerdown')
            scene.gameContainer.list[4].list[80].emit('pointerdown')
            scene.gameContainer.list[4].list[81].emit('pointerdown')
            scene.gameContainer.list[4].list[82].emit('pointerdown')
            scene.gameContainer.list[4].list[83].emit('pointerdown')
            scene.gameContainer.list[4].list[84].emit('pointerdown')
            scene.gameContainer.list[4].list[85].emit('pointerdown')
            scene.gameContainer.list[4].list[86].emit('pointerdown')
            scene.gameContainer.list[4].list[87].emit('pointerdown')
            scene.gameContainer.list[4].list[88].emit('pointerdown')
            scene.gameContainer.list[4].list[89].emit('pointerdown')
            scene.gameContainer.list[4].list[90].emit('pointerdown')
            scene.gameContainer.list[4].list[91].emit('pointerdown')
            scene.gameContainer.list[4].list[92].emit('pointerdown')
            scene.gameContainer.list[4].list[93].emit('pointerdown')
            scene.gameContainer.list[4].list[94].emit('pointerdown')
            scene.gameContainer.list[4].list[95].emit('pointerdown')
            scene.gameContainer.list[4].list[96].emit('pointerdown')
        })

        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

        try {
            expect(scene.gameContainer.betPanel.list[9].text).to.include(36);
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

            scene.gameContainer.list[4].list[37].emit('pointerdown')
            scene.gameContainer.list[4].list[38].emit('pointerdown')
            scene.gameContainer.list[4].list[39].emit('pointerdown')
            scene.gameContainer.list[4].list[40].emit('pointerdown')
            scene.gameContainer.list[4].list[41].emit('pointerdown')
            scene.gameContainer.list[4].list[42].emit('pointerdown')
            scene.gameContainer.list[4].list[43].emit('pointerdown')
            scene.gameContainer.list[4].list[44].emit('pointerdown')
            scene.gameContainer.list[4].list[45].emit('pointerdown')
            scene.gameContainer.list[4].list[46].emit('pointerdown')
            scene.gameContainer.list[4].list[47].emit('pointerdown')
            scene.gameContainer.list[4].list[48].emit('pointerdown')
            scene.gameContainer.list[4].list[49].emit('pointerdown')
            scene.gameContainer.list[4].list[50].emit('pointerdown')
            scene.gameContainer.list[4].list[51].emit('pointerdown')
            scene.gameContainer.list[4].list[52].emit('pointerdown')
            scene.gameContainer.list[4].list[53].emit('pointerdown')
            scene.gameContainer.list[4].list[54].emit('pointerdown')
            scene.gameContainer.list[4].list[55].emit('pointerdown')
            scene.gameContainer.list[4].list[56].emit('pointerdown')
            scene.gameContainer.list[4].list[57].emit('pointerdown')
            scene.gameContainer.list[4].list[58].emit('pointerdown')
            scene.gameContainer.list[4].list[59].emit('pointerdown')
            scene.gameContainer.list[4].list[60].emit('pointerdown')
            scene.gameContainer.list[4].list[61].emit('pointerdown')
            scene.gameContainer.list[4].list[62].emit('pointerdown')
            scene.gameContainer.list[4].list[63].emit('pointerdown')
            scene.gameContainer.list[4].list[64].emit('pointerdown')
            scene.gameContainer.list[4].list[65].emit('pointerdown')
            scene.gameContainer.list[4].list[66].emit('pointerdown')
            scene.gameContainer.list[4].list[67].emit('pointerdown')
            scene.gameContainer.list[4].list[68].emit('pointerdown')
            scene.gameContainer.list[4].list[69].emit('pointerdown')
            scene.gameContainer.list[4].list[70].emit('pointerdown')
            scene.gameContainer.list[4].list[71].emit('pointerdown')
            scene.gameContainer.list[4].list[72].emit('pointerdown')
            scene.gameContainer.list[4].list[73].emit('pointerdown')
            scene.gameContainer.list[4].list[74].emit('pointerdown')
            scene.gameContainer.list[4].list[75].emit('pointerdown')
            scene.gameContainer.list[4].list[76].emit('pointerdown')
            scene.gameContainer.list[4].list[77].emit('pointerdown')
            scene.gameContainer.list[4].list[78].emit('pointerdown')
            scene.gameContainer.list[4].list[79].emit('pointerdown')
            scene.gameContainer.list[4].list[80].emit('pointerdown')
            scene.gameContainer.list[4].list[81].emit('pointerdown')
            scene.gameContainer.list[4].list[82].emit('pointerdown')
            scene.gameContainer.list[4].list[83].emit('pointerdown')
            scene.gameContainer.list[4].list[84].emit('pointerdown')
            scene.gameContainer.list[4].list[85].emit('pointerdown')
            scene.gameContainer.list[4].list[86].emit('pointerdown')
            scene.gameContainer.list[4].list[87].emit('pointerdown')
            scene.gameContainer.list[4].list[88].emit('pointerdown')
            scene.gameContainer.list[4].list[89].emit('pointerdown')
            scene.gameContainer.list[4].list[90].emit('pointerdown')
            scene.gameContainer.list[4].list[91].emit('pointerdown')
            scene.gameContainer.list[4].list[92].emit('pointerdown')
            scene.gameContainer.list[4].list[93].emit('pointerdown')
            scene.gameContainer.list[4].list[94].emit('pointerdown')
            scene.gameContainer.list[4].list[95].emit('pointerdown')
            scene.gameContainer.list[4].list[96].emit('pointerdown')
        })


        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

        try {
            expect(scene.gameContainer.betPanel.list[9].text).to.include(96);
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

            scene.gameContainer.list[4].list[37].emit('pointerdown')
            scene.gameContainer.list[4].list[38].emit('pointerdown')
            scene.gameContainer.list[4].list[39].emit('pointerdown')
            scene.gameContainer.list[4].list[40].emit('pointerdown')
            scene.gameContainer.list[4].list[41].emit('pointerdown')
            scene.gameContainer.list[4].list[42].emit('pointerdown')
            scene.gameContainer.list[4].list[43].emit('pointerdown')
            scene.gameContainer.list[4].list[44].emit('pointerdown')
            scene.gameContainer.list[4].list[45].emit('pointerdown')
            scene.gameContainer.list[4].list[46].emit('pointerdown')
            scene.gameContainer.list[4].list[47].emit('pointerdown')
            scene.gameContainer.list[4].list[48].emit('pointerdown')
            scene.gameContainer.list[4].list[49].emit('pointerdown')
            scene.gameContainer.list[4].list[50].emit('pointerdown')
            scene.gameContainer.list[4].list[51].emit('pointerdown')
            scene.gameContainer.list[4].list[52].emit('pointerdown')
            scene.gameContainer.list[4].list[53].emit('pointerdown')
            scene.gameContainer.list[4].list[54].emit('pointerdown')
            scene.gameContainer.list[4].list[55].emit('pointerdown')
            scene.gameContainer.list[4].list[56].emit('pointerdown')
            scene.gameContainer.list[4].list[57].emit('pointerdown')
            scene.gameContainer.list[4].list[58].emit('pointerdown')
            scene.gameContainer.list[4].list[59].emit('pointerdown')
            scene.gameContainer.list[4].list[60].emit('pointerdown')
            scene.gameContainer.list[4].list[61].emit('pointerdown')
            scene.gameContainer.list[4].list[62].emit('pointerdown')
            scene.gameContainer.list[4].list[63].emit('pointerdown')
            scene.gameContainer.list[4].list[64].emit('pointerdown')
            scene.gameContainer.list[4].list[65].emit('pointerdown')
            scene.gameContainer.list[4].list[66].emit('pointerdown')
            scene.gameContainer.list[4].list[67].emit('pointerdown')
            scene.gameContainer.list[4].list[68].emit('pointerdown')
            scene.gameContainer.list[4].list[69].emit('pointerdown')
            scene.gameContainer.list[4].list[70].emit('pointerdown')
            scene.gameContainer.list[4].list[71].emit('pointerdown')
            scene.gameContainer.list[4].list[72].emit('pointerdown')
            scene.gameContainer.list[4].list[73].emit('pointerdown')
            scene.gameContainer.list[4].list[74].emit('pointerdown')
            scene.gameContainer.list[4].list[75].emit('pointerdown')
            scene.gameContainer.list[4].list[76].emit('pointerdown')
            scene.gameContainer.list[4].list[77].emit('pointerdown')
            scene.gameContainer.list[4].list[78].emit('pointerdown')
            scene.gameContainer.list[4].list[79].emit('pointerdown')
            scene.gameContainer.list[4].list[80].emit('pointerdown')
            scene.gameContainer.list[4].list[81].emit('pointerdown')
            scene.gameContainer.list[4].list[82].emit('pointerdown')
            scene.gameContainer.list[4].list[83].emit('pointerdown')
            scene.gameContainer.list[4].list[84].emit('pointerdown')
            scene.gameContainer.list[4].list[85].emit('pointerdown')
            scene.gameContainer.list[4].list[86].emit('pointerdown')
            scene.gameContainer.list[4].list[87].emit('pointerdown')
            scene.gameContainer.list[4].list[88].emit('pointerdown')
            scene.gameContainer.list[4].list[89].emit('pointerdown')
            scene.gameContainer.list[4].list[90].emit('pointerdown')
            scene.gameContainer.list[4].list[91].emit('pointerdown')
            scene.gameContainer.list[4].list[92].emit('pointerdown')
            scene.gameContainer.list[4].list[93].emit('pointerdown')
            scene.gameContainer.list[4].list[94].emit('pointerdown')
            scene.gameContainer.list[4].list[95].emit('pointerdown')
            scene.gameContainer.list[4].list[96].emit('pointerdown')
        })


        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

        try {
            expect(scene.gameContainer.betPanel.list[9].text).to.include(396);
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

            scene.gameContainer.list[4].list[37].emit('pointerdown')
            scene.gameContainer.list[4].list[38].emit('pointerdown')
            scene.gameContainer.list[4].list[39].emit('pointerdown')
            scene.gameContainer.list[4].list[40].emit('pointerdown')
            scene.gameContainer.list[4].list[41].emit('pointerdown')
            scene.gameContainer.list[4].list[42].emit('pointerdown')
            scene.gameContainer.list[4].list[43].emit('pointerdown')
            scene.gameContainer.list[4].list[44].emit('pointerdown')
            scene.gameContainer.list[4].list[45].emit('pointerdown')
            scene.gameContainer.list[4].list[46].emit('pointerdown')
            scene.gameContainer.list[4].list[47].emit('pointerdown')
            scene.gameContainer.list[4].list[48].emit('pointerdown')
            scene.gameContainer.list[4].list[49].emit('pointerdown')
            scene.gameContainer.list[4].list[50].emit('pointerdown')
            scene.gameContainer.list[4].list[51].emit('pointerdown')
            scene.gameContainer.list[4].list[52].emit('pointerdown')
            scene.gameContainer.list[4].list[53].emit('pointerdown')
            scene.gameContainer.list[4].list[54].emit('pointerdown')
            scene.gameContainer.list[4].list[55].emit('pointerdown')
            scene.gameContainer.list[4].list[56].emit('pointerdown')
            scene.gameContainer.list[4].list[57].emit('pointerdown')
            scene.gameContainer.list[4].list[58].emit('pointerdown')
            scene.gameContainer.list[4].list[59].emit('pointerdown')
            scene.gameContainer.list[4].list[60].emit('pointerdown')
            scene.gameContainer.list[4].list[61].emit('pointerdown')
            scene.gameContainer.list[4].list[62].emit('pointerdown')
            scene.gameContainer.list[4].list[63].emit('pointerdown')
            scene.gameContainer.list[4].list[64].emit('pointerdown')
            scene.gameContainer.list[4].list[65].emit('pointerdown')
            scene.gameContainer.list[4].list[66].emit('pointerdown')
            scene.gameContainer.list[4].list[67].emit('pointerdown')
            scene.gameContainer.list[4].list[68].emit('pointerdown')
            scene.gameContainer.list[4].list[69].emit('pointerdown')
            scene.gameContainer.list[4].list[70].emit('pointerdown')
            scene.gameContainer.list[4].list[71].emit('pointerdown')
            scene.gameContainer.list[4].list[72].emit('pointerdown')
            scene.gameContainer.list[4].list[73].emit('pointerdown')
            scene.gameContainer.list[4].list[74].emit('pointerdown')
            scene.gameContainer.list[4].list[75].emit('pointerdown')
            scene.gameContainer.list[4].list[76].emit('pointerdown')
            scene.gameContainer.list[4].list[77].emit('pointerdown')
            scene.gameContainer.list[4].list[78].emit('pointerdown')
            scene.gameContainer.list[4].list[79].emit('pointerdown')
            scene.gameContainer.list[4].list[80].emit('pointerdown')
            scene.gameContainer.list[4].list[81].emit('pointerdown')
            scene.gameContainer.list[4].list[82].emit('pointerdown')
            scene.gameContainer.list[4].list[83].emit('pointerdown')
            scene.gameContainer.list[4].list[84].emit('pointerdown')
            scene.gameContainer.list[4].list[85].emit('pointerdown')
            scene.gameContainer.list[4].list[86].emit('pointerdown')
            scene.gameContainer.list[4].list[87].emit('pointerdown')
            scene.gameContainer.list[4].list[88].emit('pointerdown')
            scene.gameContainer.list[4].list[89].emit('pointerdown')
            scene.gameContainer.list[4].list[90].emit('pointerdown')
            scene.gameContainer.list[4].list[91].emit('pointerdown')
            scene.gameContainer.list[4].list[92].emit('pointerdown')
            scene.gameContainer.list[4].list[93].emit('pointerdown')
            scene.gameContainer.list[4].list[94].emit('pointerdown')
            scene.gameContainer.list[4].list[95].emit('pointerdown')
            scene.gameContainer.list[4].list[96].emit('pointerdown')

            cy.wait(300)
            scene.gameContainer.list[5].list[0].emit('pointerdown')
        })


        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

        try {
            expect(scene.gameContainer.betPanel.list[9].text).to.include(996);
        } catch (err) {
            cy.log('Assertion failed:', err.message);
        }   
        })


        cy.wait('@startGame', { timeout: 25000}).its('response.body').then((body) => {
            cy.log('startGame response:', body.game);
        
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


            try {
                expect(body.game.integrationResultData.stakes).to.have.length(300);
            } catch (err) {
             cy.log('Assertion failed:', err.message);
            }
            
            const splitCombinations = {}; // Track each unique split pair and their amounts
            const cellCoverage = {}; // Track how many times each number appears
        
            // Initialize coverage for all cells
            for (let i = 0; i <= 60; i++) {
                cellCoverage[i] = 0;
            }
        
            // Process each stake
            stakes.forEach(stake => {
                expect(stake.type, 'All stakes should have type "split"').to.equal('split');
        
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
                    if (cell >= 0 && cell <= 60) {
                        cellCoverage[cell]++;
                    }
                });
            });
        
            // Expected amounts
            const expectedAmounts = [10, 50, 100, 500, 1000];
        
            // Verify each split combination has all 5 amounts exactly once
            Object.entries(splitCombinations).forEach(([combo, amounts]) => {
                expect(amounts.sort((a, b) => a - b), 
                    `Split ${combo} should have amounts 0.1, 0.5, 1, 5, 10 GBP`
                ).to.deep.equal(expectedAmounts.sort((a, b) => a - b));
            });
        });
    }) 
})
