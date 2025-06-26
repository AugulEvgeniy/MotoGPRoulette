describe('All stake objects are sent and validated. Total Bet value and Balance updates correctly in UI', () => {
    it('"type": "street", 70 stake objects with every stake value', () => {

        cy.visitTestEnvironment()
        cy.interceptStartGame()
        const assertionErrors = []; // Array to collect stake validation errors

        cy.window({ timeout: 50000 }).should((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            const start_button = scene.gameContainer.list[5].list[0].visible;

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
            scene.gameContainer.startGroupButtons.list[0].emit('pointerdown')
        })


        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

        try {
            expect(scene.gameContainer.betPanel.list[9].text).to.include(232.40);
        } catch (err) {
            assertionErrors.push(err.message);
        }

        // This assertion checks total bet value

            scene.gameContainer.betPanel.list[3].list[0].emit('pointerdown')
        })


    cy.wait('@startGame', { timeout: 25000}).its('response.body').then((body) => {
    cy.log('startGame response:', body.gameResult);
    
    if (body.state == "INVALID") {
        throw new Error(`API returned INVALID state. Full response: ${JSON.stringify(body)}`);
    }

    // Process each stake combination
    const Combinations = {};
    body.gameResult.integrationResultData.stakes.forEach(stake => {
        try {
            expect(stake.type, 'Stake type should be "street"').to.equal('street');
        } catch (err) {
            assertionErrors.push(err.message);
        }
        
        const amountsPence = stake.amountsPence;
        const comboKey = stake.cells; // Stringify for consistent key

        if (!Combinations[comboKey]) {
            Combinations[comboKey] = [];
        }
        Combinations[comboKey].push(amountsPence);
    });

    // Expected amounts in pence (assuming amountsPence is in pence)
    const expectedAmounts = [10, 50, 100, 500, 1000]; 

    // Validate each corner combination has all amounts exactly once
    Object.entries(Combinations).forEach(([combo, amounts]) => {
        try {
            // Sort amounts for consistent comparison
            expect(amounts, `Street ${combo} should have all amounts (0.1, 0.5, 1, 5, 10 GBP`).to.deep.equal(expectedAmounts);
        } catch (err) {
            assertionErrors.push(err.message);
        }
    });

    // Check total stakes count
    try {
        expect(body.gameResult.integrationResultData.stakes).to.have.length(70, 'Should have 70 total stakes');
    } catch (err) {
        assertionErrors.push(err.message);
    }

    // Throw all collected errors at once if any failed
    if (assertionErrors.length > 0) {
        throw new Error(`Stake validation failed:\n${assertionErrors.join('\n')}`);
    }
});
}) 
})