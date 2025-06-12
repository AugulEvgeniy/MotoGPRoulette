describe('All stake objects are sent and validated. Total Bet value and Balance updates correctly in UI', () => {
    it('"type": "corner", 115 stake objects with every stake value', () =>{

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

            scene.gameContainer.stakeSelector.cornerButtons[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[1].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[2].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[3].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[4].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[5].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[6].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[7].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[8].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[9].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[10].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[11].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[12].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[13].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[14].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[15].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[16].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[17].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[18].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[19].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[20].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[21].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerZeroButtons[0].emit('pointerdown')

        })


        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

        try {
            expect(scene.gameContainer.betPanel.list[9].text).to.include(2.30);
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

            scene.gameContainer.stakeSelector.cornerButtons[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[1].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[2].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[3].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[4].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[5].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[6].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[7].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[8].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[9].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[10].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[11].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[12].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[13].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[14].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[15].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[16].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[17].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[18].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[19].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[20].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[21].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerZeroButtons[0].emit('pointerdown')

        })

        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

        try {
            expect(scene.gameContainer.betPanel.list[9].text).to.include(13.80);
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

            scene.gameContainer.stakeSelector.cornerButtons[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[1].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[2].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[3].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[4].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[5].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[6].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[7].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[8].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[9].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[10].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[11].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[12].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[13].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[14].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[15].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[16].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[17].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[18].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[19].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[20].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[21].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerZeroButtons[0].emit('pointerdown')

        })


        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

        try {
            expect(scene.gameContainer.betPanel.list[9].text).to.include(36.8);
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

            scene.gameContainer.stakeSelector.cornerButtons[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[1].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[2].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[3].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[4].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[5].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[6].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[7].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[8].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[9].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[10].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[11].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[12].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[13].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[14].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[15].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[16].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[17].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[18].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[19].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[20].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[21].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerZeroButtons[0].emit('pointerdown')

        })


        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

        try {
            expect(scene.gameContainer.betPanel.list[9].text).to.include(151.8);
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

            scene.gameContainer.stakeSelector.cornerButtons[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[1].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[2].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[3].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[4].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[5].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[6].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[7].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[8].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[9].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[10].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[11].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[12].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[13].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[14].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[15].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[16].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[17].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[18].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[19].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[20].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerButtons[21].emit('pointerdown')
            scene.gameContainer.stakeSelector.cornerZeroButtons[0].emit('pointerdown')


            cy.wait(300)
            scene.gameContainer.startGroupButtons.list[0].emit('pointerdown')
        })


        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

        try {
            expect(scene.gameContainer.betPanel.list[9].text).to.include(381.8);
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
            expect(stake.type, 'Stake type should be "corner"').to.equal('corner');
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
            expect(amounts, `Corner ${combo} should have all amounts (0.1, 0.5, 1, 5, 10 GBP`).to.deep.equal(expectedAmounts);
        } catch (err) {
            assertionErrors.push(err.message);
        }
    });

    // Check total stakes count
    try {
        expect(body.gameResult.integrationResultData.stakes).to.have.length(115, 'Should have 115 total stakes');
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
            
describe('Bonus Game cells are highlighted', () => {
    it('Corner bet should activate Bonus Game', () =>{
        cy.window().should((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            const bonus = scene.gameContainer.isShowBonusSectors.show;

            expect(bonus).to.be.true;
        })
    })
})
            