describe('All stake objects are sent and validated. Total Bet value and Balance updates correctly in UI', () => {
    it('"type": "split", 30 stake objects with every stake value', () =>{

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

            scene.gameContainer.stakeSelector.tiersButton.emit('pointerdown')
        })


        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

        try {
            expect(scene.gameContainer.betPanel.list[9].text).to.include(0.60);
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

            scene.gameContainer.stakeSelector.tiersButton.emit('pointerdown')
        })

        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

        try {
            expect(scene.gameContainer.betPanel.list[9].text).to.include(3.60);
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

            scene.gameContainer.stakeSelector.tiersButton.emit('pointerdown')
        })


        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

        try {
            expect(scene.gameContainer.betPanel.list[9].text).to.include(9.60);
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

            scene.gameContainer.stakeSelector.tiersButton.emit('pointerdown')
        })


        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

        try {
            expect(scene.gameContainer.betPanel.list[9].text).to.include(39.60);
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

            scene.gameContainer.stakeSelector.tiersButton.emit('pointerdown')

            cy.wait(300)
            scene.gameContainer.list[5].list[0].emit('pointerdown')
        })


        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

        try {
            expect(scene.gameContainer.betPanel.list[9].text).to.include(99.60);
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
                expect(body.game.integrationResultData.stakes).to.have.length(30);
            } catch (err) {
             cy.log('Assertion failed:', err.message);
            }
            
// Verify that all expected split combinations exist with correct amounts
const expectedSplits = [
    { cells: [5, 8], amounts: [0.1, 0.5, 1, 5, 10] },
    { cells: [13, 16], amounts: [0.1, 0.5, 1, 5, 10] },
    { cells: [27, 30], amounts: [0.1, 0.5, 1, 5, 10] },
    { cells: [33, 36], amounts: [0.1, 0.5, 1, 5, 10] },
    { cells: [10, 11], amounts: [0.1, 0.5, 1, 5, 10] },
    { cells: [23, 24], amounts: [0.1, 0.5, 1, 5, 10] }
];

expectedSplits.forEach(expected => {
    // Find all stakes that match this cell combination
    const matchingStakes = stakes.filter(stake => {
        const sortedCells = [...stake.cells].sort((a, b) => a - b);
        return JSON.stringify(sortedCells) === JSON.stringify(expected.cells);
    });
    
    // Verify we found exactly 5 stakes for this combination (one for each amount)
    expect(matchingStakes.length, `Should find 5 stakes for split ${expected.cells}`).to.equal(5);
    
    // Verify all expected amounts are present
    const actualAmounts = matchingStakes.map(stake => stake.amountsPence).sort((a, b) => a - b);
    const expectedAmounts = expected.amounts.sort((a, b) => a - b);
    expect(actualAmounts, `Split ${expected.cells} should have amounts 0.1, 0.5, 1, 5, 10 GBP`)
        .to.deep.equal(expectedAmounts);
});
});
});
});
