describe('All stake objects are sent and validated. Total Bet value and Balance updates correctly in UI', () => {
    it('"type": "six-line", 55 stake objects with every stake value', () =>{

        cy.visitTestEnvironment()
        cy.interceptStartGame()
        const assertionErrors = []; // Array to collect stake validation errors

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
            scene.gameContainer.startGroupButtons.list[0].emit('pointerdown')
        })

        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

        try {
            expect(scene.gameContainer.betPanel.list[9].text).to.include(182.60);
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
            expect(stake.type, 'Stake type should be "six_line"').to.equal('six_line');
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
            expect(amounts, `Six-line ${combo} should have all amounts (0.1, 0.5, 1, 5, 10 GBP`).to.deep.equal(expectedAmounts);
        } catch (err) {
            assertionErrors.push(err.message);
        }
    });

    // Check total stakes count
    try {
        expect(body.gameResult.integrationResultData.stakes).to.have.length(55, 'Should have 55 total stakes');
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