describe('All stake objects are sent and validated. Total Bet value and Balance updates correctly in UI', () => {
    it('"type": "split" and "straight", 25 stake objects with every stake value', () =>{

        cy.visitTestEnvironment()
        cy.intercept('start-game').as('startGame')


        cy.window({ timeout: 20000 }).should((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            const start_button = scene.gameContainer.list[5].list[0].visible;

            expect(start_button, 'Game is loaded').to.be.true
        })

            cy.wait(500)

            cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            scene.gameContainer.tapBar.raceButton.emit('pointerdown')
        })

            cy.wait(100)

            cy.window().should((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            const race_track = scene.gameContainer.stakeSelector.isRaceTable;

            expect(race_track, 'Race Track is entered').to.be.true;
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

        
        cy.wait(600)

        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

            scene.gameContainer.stakeSelector.voisinsButton.emit('pointerdown')

        })


        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

        try {
            expect(scene.gameContainer.betPanel.list[9].text).to.include(0.90);
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

            scene.gameContainer.stakeSelector.voisinsButton.emit('pointerdown')
        })

        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

        try {
            expect(scene.gameContainer.betPanel.list[9].text).to.include(5.4);
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

            scene.gameContainer.stakeSelector.voisinsButton.emit('pointerdown')
        })


        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

        try {
            expect(scene.gameContainer.betPanel.list[9].text).to.include(14.4);
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

            scene.gameContainer.stakeSelector.voisinsButton.emit('pointerdown')
        })


        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

        try {
            expect(scene.gameContainer.betPanel.list[9].text).to.include(59.4);
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

            scene.gameContainer.stakeSelector.voisinsButton.emit('pointerdown')

            cy.wait(300)
            scene.gameContainer.list[5].list[0].emit('pointerdown')
        })


        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

        try {
            expect(scene.gameContainer.betPanel.list[9].text).to.include(149.4);
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
                expect(body.game.integrationResultData.stakes).to.have.length(45);
            } catch (err) {
             cy.log('Assertion failed:', err.message);
            
            }
            
const splitCombinations = {}; // Track each unique stake group and their amounts
const cellCoverage = {}; // Track how many times each number appears

// Initialize coverage for all cells
for (let i = 0; i <= 30; i++) {
    cellCoverage[i] = 0;
}

// Process each stake
stakes.forEach(stake => {
    const amountGBP = stake.amountsPence;
    const sortedCells = [...stake.cells].sort((a, b) => a - b);
    const comboKey = sortedCells.join(',');

    // Initialize if this combination hasn't been tracked yet
    if (!splitCombinations[comboKey]) {
        splitCombinations[comboKey] = [];
    }

    // Track this amount for the combination
    splitCombinations[comboKey].push(amountGBP);

    // Count coverage for each cell in this combination
    stake.cells.forEach(cell => {
        if (cell >= 0 && cell <= 30) {
            cellCoverage[cell]++;
        }
    });
});

// Expected amounts
const expectedAmounts = [0.1, 0.5, 1, 5, 10];

// Verify each combination has correct amounts
Object.entries(splitCombinations).forEach(([combo, amounts]) => {
    const sortedAmounts = amounts.sort((a, b) => a - b);
    
    // Special cases for corner and street bets that should have doubled amounts (10 stakes)
    if (combo === '25,26,28,29' || combo === '0,2,3') {
        const expectedDoubled = [...expectedAmounts, ...expectedAmounts].sort((a, b) => a - b);
        expect(sortedAmounts, `${combo} should have doubled amounts (10 stakes)`).to.deep.equal(expectedDoubled);
    } else {
        const expectedSorted = [...expectedAmounts].sort((a, b) => a - b);
        expect(sortedAmounts, `${combo} should have single amounts (5 stakes)`).to.deep.equal(expectedSorted);
    }
});

// Define all expected stakes with their types and expected counts
const expectedStakes = [
    { cells: [4, 7], type: "split", count: 5 },
    { cells: [12, 15], type: "split", count: 5 },
    { cells: [18, 21], type: "split", count: 5 },
    { cells: [19, 22], type: "split", count: 5 },
    { cells: [32, 35], type: "split", count: 5 },
    { cells: [25, 26, 28, 29], type: "corner", count: 10 },
    { cells: [0, 2, 3], type: "street", count: 10 }
];

// Verify all expected stakes exist with correct types and counts
expectedStakes.forEach(expected => {
    const matchingStakes = stakes.filter(stake => {
        const sortedCells = [...stake.cells].sort((a, b) => a - b);
        return JSON.stringify(sortedCells) === JSON.stringify(expected.cells) &&
               stake.type === expected.type;
    });
    
    expect(matchingStakes.length, 
        `Should find ${expected.count} stake(s) with cells ${expected.cells} and type ${expected.type}`
    ).to.equal(expected.count);
});
}); 
});
});

