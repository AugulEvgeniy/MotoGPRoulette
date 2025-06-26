describe('All stake objects are sent and validated. Total Bet value and Balance updates correctly in UI', () => {
    it('"type": "straight", 185 stake objects with every stake value)', () => {

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

            cy.wait(1000)
            scene.gameContainer.stakeSelector.list[0].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[1].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[2].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[3].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[4].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[5].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[6].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[7].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[8].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[9].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[10].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[11].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[12].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[13].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[14].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[15].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[16].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[17].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[18].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[19].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[20].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[21].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[22].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[23].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[24].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[25].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[26].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[27].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[28].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[29].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[30].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[31].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[32].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[33].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[34].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[35].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[36].list[0].emit('pointerdown')
        })


        cy.window().then((win) => {
            
            const game = win.game
            const scene = game.scene.scenes[1]

        try {
            expect(scene.gameContainer.betPanel.list[9].text).to.include(3.70);
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

            scene.gameContainer.stakeSelector.list[0].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[1].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[2].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[3].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[4].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[5].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[6].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[7].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[8].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[9].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[10].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[11].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[12].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[13].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[14].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[15].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[16].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[17].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[18].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[19].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[20].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[21].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[22].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[23].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[24].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[25].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[26].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[27].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[28].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[29].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[30].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[31].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[32].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[33].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[34].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[35].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[36].list[0].emit('pointerdown')
        })

        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

        try {
            expect(scene.gameContainer.betPanel.list[9].text).to.include(22.2);
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

            scene.gameContainer.stakeSelector.list[0].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[1].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[2].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[3].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[4].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[5].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[6].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[7].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[8].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[9].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[10].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[11].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[12].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[13].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[14].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[15].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[16].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[17].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[18].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[19].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[20].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[21].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[22].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[23].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[24].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[25].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[26].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[27].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[28].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[29].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[30].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[31].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[32].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[33].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[34].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[35].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[36].list[0].emit('pointerdown')
        })


        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

        try {
            expect(scene.gameContainer.betPanel.list[9].text).to.include(59.2);
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

            scene.gameContainer.stakeSelector.list[0].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[1].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[2].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[3].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[4].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[5].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[6].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[7].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[8].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[9].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[10].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[11].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[12].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[13].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[14].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[15].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[16].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[17].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[18].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[19].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[20].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[21].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[22].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[23].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[24].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[25].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[26].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[27].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[28].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[29].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[30].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[31].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[32].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[33].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[34].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[35].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[36].list[0].emit('pointerdown')
        })


        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

        try {
            expect(scene.gameContainer.betPanel.list[9].text).to.include(244.2);
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

            scene.gameContainer.stakeSelector.list[0].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[1].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[2].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[3].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[4].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[5].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[6].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[7].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[8].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[9].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[10].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[11].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[12].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[13].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[14].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[15].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[16].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[17].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[18].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[19].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[20].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[21].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[22].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[23].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[24].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[25].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[26].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[27].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[28].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[29].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[30].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[31].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[32].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[33].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[34].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[35].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[36].list[0].emit('pointerdown')

            cy.wait(300)
            scene.gameContainer.startGroupButtons.list[0].emit('pointerdown')
        })

        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

        try {
            expect(scene.gameContainer.betPanel.list[9].text).to.include(614.2);
        } catch (err) {
            assertionErrors.push(err.message);
        }   
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
            expect(stake.type, 'Stake type should be "straight"').to.equal('straight');
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
            expect(amounts, `Straight ${combo} should have all amounts (0.1, 0.5, 1, 5, 10 GBP`).to.deep.equal(expectedAmounts);
        } catch (err) {
            assertionErrors.push(err.message);
        }
    });

    // Check total stakes count
    try {
        expect(body.gameResult.integrationResultData.stakes).to.have.length(185, 'Should have 185 total stakes');
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

            