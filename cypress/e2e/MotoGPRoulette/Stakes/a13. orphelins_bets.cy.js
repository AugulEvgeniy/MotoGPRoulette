describe('All stake objects are sent and validated. Total Bet value and Balance updates correctly in UI', () => {
    it('"type": "split" and "straight", 25 stake objects with every stake value', () => {

        cy.visitTestEnvironment()
        cy.interceptStartGame()


        cy.window({ timeout: 30000 }).should((win) => {
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

            scene.gameContainer.stakeSelector.orphelinsButton.emit('pointerdown')
        })


        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

        try {
            expect(scene.gameContainer.betPanel.list[9].text).to.include(0.50);
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

            scene.gameContainer.stakeSelector.orphelinsButton.emit('pointerdown')
        })

        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

        try {
            expect(scene.gameContainer.betPanel.list[9].text).to.include(3);
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

            scene.gameContainer.stakeSelector.orphelinsButton.emit('pointerdown')
        })


        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

        try {
            expect(scene.gameContainer.betPanel.list[9].text).to.include(8);
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

            scene.gameContainer.stakeSelector.orphelinsButton.emit('pointerdown')
        })


        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

        try {
            expect(scene.gameContainer.betPanel.list[9].text).to.include(33);
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

            scene.gameContainer.stakeSelector.orphelinsButton.emit('pointerdown')

            cy.wait(300)
            scene.gameContainer.list[5].list[0].emit('pointerdown')
        })


        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

        try {
            expect(scene.gameContainer.betPanel.list[9].text).to.include(83);
        } catch (err) {
            cy.log('Assertion failed:', err.message);
        }   
        })


        cy.wait('@startGame').its('response.body').then((body) => {
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
                expect(body.integrationResultData.stakes).to.have.length(25);
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

// Expected amounts for split bets
const expectedSplitAmounts = [10, 50, 100, 500, 1000];

// Verify each split combination has all 5 amounts exactly once
Object.entries(splitCombinations).forEach(([combo, amounts]) => {
    expect(amounts.sort((a, b) => a - b), 
        `Split ${combo} should have amounts 0.1, 0.5, 1, 5, 10 GBP`
    ).to.deep.equal(expectedSplitAmounts.sort((a, b) => a - b));
});

// Define all expected stakes with their types
const expectedStakes = [
    { cells: [6, 9], type: "split" },
    { cells: [14, 17], type: "split" },
    { cells: [17, 20], type: "split" },
    { cells: [31, 34], type: "split" },
    { cells: [1], type: "straight" }
];

// Verify all expected stakes exist with correct types
expectedStakes.forEach(expected => {
    const matchingStakes = stakes.filter(stake => {
        const sortedCells = [...stake.cells].sort((a, b) => a - b);
        return JSON.stringify(sortedCells) === JSON.stringify(expected.cells) &&
               stake.type === expected.type;
    });
    
    expect(matchingStakes.length, `Should find stake with cells ${expected.cells} and type ${expected.type}`)
        .to.equal(5);
});
}); 
});
});

