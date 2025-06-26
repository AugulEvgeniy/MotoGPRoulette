describe('All stake objects are sent and validated. Total Bet value and Balance updates correctly in UI', () => {
    it('"type": "split", 300 stake objects with every stake value', () =>{

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

            scene.gameContainer.stakeSelector.list[37].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[38].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[39].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[40].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[41].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[42].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[43].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[44].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[45].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[46].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[47].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[48].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[49].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[50].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[51].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[52].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[53].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[54].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[55].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[56].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[57].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[58].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[59].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[60].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[61].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[62].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[63].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[64].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[65].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[66].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[67].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[68].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[69].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[70].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[71].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[72].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[73].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[74].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[75].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[76].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[77].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[78].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[79].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[80].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[81].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[82].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[83].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[84].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[85].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[86].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[87].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[88].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[89].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[90].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[91].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[92].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[93].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[94].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[95].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[96].emit('pointerdown')
        })


        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

        try {
            expect(scene.gameContainer.betPanel.list[9].text).to.include(6);
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

            scene.gameContainer.stakeSelector.list[37].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[38].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[39].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[40].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[41].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[42].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[43].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[44].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[45].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[46].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[47].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[48].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[49].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[50].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[51].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[52].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[53].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[54].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[55].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[56].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[57].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[58].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[59].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[60].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[61].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[62].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[63].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[64].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[65].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[66].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[67].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[68].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[69].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[70].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[71].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[72].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[73].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[74].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[75].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[76].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[77].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[78].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[79].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[80].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[81].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[82].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[83].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[84].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[85].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[86].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[87].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[88].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[89].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[90].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[91].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[92].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[93].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[94].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[95].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[96].emit('pointerdown')
        })

        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

        try {
            expect(scene.gameContainer.betPanel.list[9].text).to.include(36);
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

            scene.gameContainer.stakeSelector.list[37].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[38].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[39].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[40].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[41].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[42].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[43].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[44].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[45].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[46].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[47].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[48].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[49].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[50].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[51].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[52].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[53].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[54].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[55].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[56].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[57].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[58].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[59].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[60].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[61].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[62].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[63].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[64].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[65].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[66].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[67].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[68].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[69].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[70].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[71].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[72].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[73].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[74].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[75].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[76].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[77].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[78].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[79].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[80].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[81].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[82].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[83].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[84].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[85].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[86].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[87].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[88].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[89].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[90].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[91].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[92].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[93].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[94].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[95].emit('pointerdown')
            scene.gameContainer.stakeSelector.list[96].emit('pointerdown')

            scene.gameContainer.startGroupButtons.list[0].emit('pointerdown')
        })


        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

        try {
            expect(scene.gameContainer.betPanel.list[9].text).to.include(96);
        } catch (err) {
            assertionErrors.push(err.message);
        }   

            scene.gameContainer.betPanel.list[4].list[0].emit('pointerdown')
        })

        // cy.window().should((win) => {
        //     const game = win.game
        //     const scene = game.scene.scenes[1]
        //     const chip = scene.gameContainer.betPanel.activeButton.layout.name;

        //     expect(chip).to.include("chip_3")
        // })

        // cy.window().then((win) => {
        //     const game = win.game
        //     const scene = game.scene.scenes[1]

        //     scene.gameContainer.stakeSelector.list[37].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[38].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[39].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[40].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[41].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[42].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[43].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[44].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[45].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[46].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[47].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[48].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[49].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[50].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[51].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[52].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[53].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[54].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[55].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[56].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[57].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[58].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[59].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[60].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[61].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[62].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[63].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[64].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[65].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[66].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[67].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[68].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[69].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[70].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[71].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[72].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[73].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[74].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[75].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[76].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[77].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[78].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[79].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[80].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[81].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[82].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[83].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[84].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[85].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[86].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[87].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[88].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[89].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[90].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[91].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[92].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[93].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[94].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[95].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[96].emit('pointerdown')

        //     scene.gameContainer.startGroupButtons.list[0].emit('pointerdown')
        // })


        // cy.window().then((win) => {
        //     const game = win.game
        //     const scene = game.scene.scenes[1]

        // try {
        //     expect(scene.gameContainer.betPanel.list[9].text).to.include(396);
        // } catch (err) {
        //     cy.log('Assertion failed:', err.message);
        // }             
            
        //     scene.gameContainer.betPanel.list[5].list[0].emit('pointerdown')
        // })

        // cy.window().should((win) => {
        //     const game = win.game
        //     const scene = game.scene.scenes[1]
        //     const chip = scene.gameContainer.betPanel.activeButton.layout.name;

        //     expect(chip).to.include("chip_4")
        // })

        // cy.window().then((win) => {
        //     const game = win.game
        //     const scene = game.scene.scenes[1]

        //     scene.gameContainer.stakeSelector.list[37].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[38].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[39].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[40].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[41].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[42].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[43].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[44].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[45].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[46].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[47].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[48].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[49].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[50].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[51].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[52].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[53].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[54].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[55].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[56].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[57].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[58].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[59].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[60].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[61].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[62].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[63].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[64].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[65].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[66].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[67].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[68].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[69].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[70].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[71].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[72].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[73].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[74].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[75].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[76].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[77].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[78].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[79].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[80].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[81].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[82].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[83].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[84].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[85].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[86].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[87].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[88].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[89].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[90].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[91].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[92].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[93].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[94].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[95].emit('pointerdown')
        //     scene.gameContainer.stakeSelector.list[96].emit('pointerdown')

        //     cy.wait(300)
        //     scene.gameContainer.startGroupButtons.list[0].emit('pointerdown')
        // })


        // cy.window().then((win) => {
        //     const game = win.game
        //     const scene = game.scene.scenes[1]

        // try {
        //     expect(scene.gameContainer.betPanel.list[9].text).to.include(996);
        // } catch (err) {
        //     cy.log('Assertion failed:', err.message);
        // }   
        // })


    cy.wait('@startGame', { timeout: 25000}).its('response.body').then((body) => {
    cy.log('startGame response:', body.gameResult);
    
    if (body.state == "INVALID") {
        throw new Error(`API returned INVALID state. Full response: ${JSON.stringify(body)}`);
    }    

    // Process each stake combination
    const Combinations = {};
    body.gameResult.integrationResultData.stakes.forEach(stake => {
        try {
            expect(stake.type, 'Stake type should be "split"').to.equal('split');
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
    const expectedAmounts = [10, 50, 100]; 

    // Validate each corner combination has all amounts exactly once
    Object.entries(Combinations).forEach(([combo, amounts]) => {
        try {
            // Sort amounts for consistent comparison
            expect(amounts, `Split ${combo} should have amounts (0.1, 0.5, 1 GBP`).to.deep.equal(expectedAmounts);
        } catch (err) {
            assertionErrors.push(err.message);
        }
    });

    // Check total stakes count
    try {
        expect(body.gameResult.integrationResultData.stakes).to.have.length(180, 'Should have 180 total stakes');
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
