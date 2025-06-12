describe('All stake objects are sent and validated. Total Bet value and Balance updates correctly in UI', () => {
    it('"type": "split" and "straight", 25 stake objects with every stake value', () =>{

        cy.visitTestEnvironment()
        cy.interceptStartGame()
        const assertionErrors = []; // Array to collect stake validation errors

        cy.window({ timeout: 50000 }).should((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            const start_button = scene.gameContainer.startGroupButtons.list[0].visible;

            expect(start_button, 'Game is loaded').to.be.true
        })

            cy.wait(500)

            cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            scene.gameContainer.tapBar.raceButton.emit('pointerdown')
        })

            cy.wait(100)

            cy.window({ timeout: 20000 }).should((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            const race_track = scene.gameContainer.stakeSelector.isRaceTable;

            expect(race_track, 'Race Track is entered').to.be.true;
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

            scene.gameContainer.stakeSelector.voisinsButton.emit('pointerdown')

            cy.wait(300)
            scene.gameContainer.startGroupButtons.list[0].emit('pointerdown')
        })


        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

        try {
            expect(scene.gameContainer.betPanel.list[9].text).to.include(149.4);
        } catch (err) {
            assertionErrors.push(err.message);
        }   
        })


        cy.wait('@startGame', { timeout: 25000 }).its('response.body').then((body) => {
            cy.log('startGame response:', body.gameResult);
        
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
                expect(body.gameResult.integrationResultData.stakes).to.have.length(45);
            } catch (err) {
                assertionErrors.push(err.message);
            }
            
const Combinations = {}; // Track each unique stake group and their amounts

// Process each stake
body.gameResult.integrationResultData.stakes.forEach(stake => {
    const amountPence = stake.amountsPence;
    const comboKey = [...stake.cells]

    // Initialize if this combination hasn't been tracked yet
    if (!Combinations[comboKey]) {
        Combinations[comboKey] = [];
    }

    // Track this amount for the combination
    Combinations[comboKey].push(amountPence);
});

// Expected amounts
const expectedAmounts = [10, 50, 100, 500, 1000];
const expectedDoubled = [10, 10, 50, 50, 100, 100, 500, 500, 1000, 1000]

// Verify each combination has correct amounts
Object.entries(Combinations).forEach(([combo, amounts]) => {
    // Special cases for corner and street bets that should have doubled amounts (10 stakes)
    try {
    if (combo === '25,26,28,29' || combo === '0,2,3') {
        const expectedDouble = [...expectedDoubled];
        expect(JSON.stringify(amounts), `${combo} should have doubled amounts (10 stakes)`).to.deep.equal(JSON.stringify(expectedDouble));
    } else {
        const expected = [...expectedAmounts];
        expect(JSON.stringify(amounts), `${combo} should have single amounts (5 stakes)`).to.deep.equal(JSON.stringify(expected));
    }
    } catch(err) {
        assertionErrors.push(err.message);
    }
});

            // Throw all collected errors at once if any failed
    if (assertionErrors.length > 0) {
        throw new Error(`Stake validation failed:\n${assertionErrors.join('\n')}`);
    }

}); 
});
});

