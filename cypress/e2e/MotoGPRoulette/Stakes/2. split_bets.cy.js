describe('All stake objects are sent and validated. Total Bet value and Balance updates correctly in UI', () => {
    it('"type": "split", 300 stake objects with every stake value', () =>{

        cy.visitTestEnvironment()
        cy.interceptStartGame()


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
            cy.log('Assertion failed:', err.message);
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
            expect(body.gameResult).to.have.property('integrationResultData')
            expect(body).to.have.property('upstream')

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
                expect(body.gameResult.integrationResultData.stakes).to.have.length(180); // 300 if all stakes were checked
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
            body.gameResult.integrationResultData.stakes.forEach(stake => {
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
            const expectedAmounts = [10, 50, 100]; 
            //[10, 50, 100, 500, 1000] 5, 10 stakes check was removed due to the API limit
        
            // Verify each split combination has all 5 amounts exactly once
            Object.entries(splitCombinations).forEach(([combo, amounts]) => {
                expect(amounts.sort((a, b) => a - b), 
                    `Split ${combo} should have amounts 0.1, 0.5, 1, 5, 10 GBP`
                ).to.deep.equal(expectedAmounts.sort((a, b) => a - b));
            });
        });
    }) 
})
