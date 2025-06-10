describe('Reward History displays winning numbers', () => {
    it('Should check that 5 numbers are displayed, and 6th/2nd numbers rewrite 5th/1st)', () => {

        cy.visitTestEnvironment()

        cy.window({ timeout: 25000 }).should((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            const start_button = scene.gameContainer.startGroupButtons.list[0].visible;

            expect(start_button, 'Game is loaded').to.be.true
        })

        cy.get('#open_button').click()
        cy.get('#chip').select(2)
        cy.get('#open_button').click({force: true})
        cy.get('#set_state').click()
        cy.get('#close_button').click()

        cy.window().should((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            const chip = scene.gameContainer.betPanel.activeButton.layout.name;

            expect(chip).to.include("chip_2")
        })

        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

            scene.gameContainer.stakeSelector.dozensButtons[1].list[0].emit('pointerdown')

            cy.wait(50)
            scene.gameContainer.startGroupButtons.list[0].emit('pointerdown')
        })

        cy.window({ timeout: 25000}).should((win) => {
            const chip = win.game.scene.scenes[1].gameContainer.bottomPanel.historyItems[0].list[1].text;
            expect(chip).to.equal('1')
        })

        cy.get('#open_button').click()
        cy.get('#chip').select(3)
        cy.get('#open_button').click({force: true})
        cy.get('#set_state').click()
        cy.get('#close_button').click()

        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

            scene.gameContainer.stakeSelector.dozensButtons[1].list[0].emit('pointerdown')

            cy.wait(50)
            scene.gameContainer.startGroupButtons.list[0].emit('pointerdown')
        })

        cy.window({ timeout: 25000}).should((win) => {
            const chip_1 = win.game.scene.scenes[1].gameContainer.bottomPanel.historyItems[1].list[1].text;
            const chip_0 = win.game.scene.scenes[1].gameContainer.bottomPanel.historyItems[0].list[1].text
            expect(chip_0).to.equal('1')
            expect(chip_1).to.equal('2')
        })


        cy.get('#open_button').click()
        cy.get('#chip').select(11)
        cy.get('#open_button').click({force: true})
        cy.get('#set_state').click()
        cy.get('#close_button').click()

        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

            scene.gameContainer.stakeSelector.dozensButtons[1].list[0].emit('pointerdown')

            cy.wait(50)
            scene.gameContainer.startGroupButtons.list[0].emit('pointerdown')
        })

        cy.window({ timeout: 25000}).should((win) => {
            const chip_0 = win.game.scene.scenes[1].gameContainer.bottomPanel.historyItems[0].list[1].text;
            const chip_1 = win.game.scene.scenes[1].gameContainer.bottomPanel.historyItems[1].list[1].text;
            const chip_2 = win.game.scene.scenes[1].gameContainer.bottomPanel.historyItems[2].list[1].text;
            expect(chip_0).to.equal('1')
            expect(chip_1).to.equal('2')
            expect(chip_2).to.equal('10')
        })

        cy.get('#open_button').click()
        cy.get('#chip').select(11)
        cy.get('#open_button').click({force: true})
        cy.get('#set_state').click()
        cy.get('#close_button').click()

        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

            scene.gameContainer.stakeSelector.dozensButtons[1].list[0].emit('pointerdown')

            cy.wait(50)
            scene.gameContainer.startGroupButtons.list[0].emit('pointerdown')
        })

        cy.window({ timeout: 25000}).should((win) => {
            const chip_0 = win.game.scene.scenes[1].gameContainer.bottomPanel.historyItems[0].list[1].text;
            const chip_1 = win.game.scene.scenes[1].gameContainer.bottomPanel.historyItems[1].list[1].text;
            const chip_2 = win.game.scene.scenes[1].gameContainer.bottomPanel.historyItems[2].list[1].text;
            const chip_3 = win.game.scene.scenes[1].gameContainer.bottomPanel.historyItems[3].list[1].text;
            expect(chip_0).to.equal('1')
            expect(chip_1).to.equal('2')
            expect(chip_2).to.equal('10')
            expect(chip_3).to.equal('10')
        })

        cy.get('#open_button').click()
        cy.get('#chip').select(11)
        cy.get('#open_button').click({force: true})
        cy.get('#set_state').click()
        cy.get('#close_button').click()

        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

            scene.gameContainer.stakeSelector.dozensButtons[1].list[0].emit('pointerdown')

            cy.wait(50)
            scene.gameContainer.startGroupButtons.list[0].emit('pointerdown')
        })

        cy.window({ timeout: 25000}).should((win) => {
            const chip_0 = win.game.scene.scenes[1].gameContainer.bottomPanel.historyItems[0].list[1].text;
            const chip_1 = win.game.scene.scenes[1].gameContainer.bottomPanel.historyItems[1].list[1].text;
            const chip_2 = win.game.scene.scenes[1].gameContainer.bottomPanel.historyItems[2].list[1].text;
            const chip_3 = win.game.scene.scenes[1].gameContainer.bottomPanel.historyItems[3].list[1].text;
            const chip_4 = win.game.scene.scenes[1].gameContainer.bottomPanel.historyItems[4].list[1].text;
            expect(chip_0).to.equal('1')
            expect(chip_1).to.equal('2')
            expect(chip_2).to.equal('10')
            expect(chip_3).to.equal('10')
            expect(chip_4).to.equal('10')
        })


        
        cy.intercept('startgame', {fixture: 'only_one_bonus_spin_roulette.json'}).as('startGame')

        cy.get('#open_button').click()
        cy.get('#chip').select(0)
        cy.get('#open_button').click({force: true})
        cy.get('#win_bonus_button')
        cy.get('#set_state').click()
        cy.get('#close_button').click()

        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

            scene.gameContainer.stakeSelector.dozensButtons[1].list[0].emit('pointerdown')

            cy.wait(50)
            scene.gameContainer.startGroupButtons.list[0].emit('pointerdown')
        })

        cy.window({ timeout: 30000}).should((win) => {
            const chip_0 = win.game.scene.scenes[1].gameContainer.bottomPanel.historyItems[0].list[1].text;
            const chip_1 = win.game.scene.scenes[1].gameContainer.bottomPanel.historyItems[1].list[1].text;
            const chip_2 = win.game.scene.scenes[1].gameContainer.bottomPanel.historyItems[2].list[1].text;
            const chip_3 = win.game.scene.scenes[1].gameContainer.bottomPanel.historyItems[3].list[1].text;
            const chip_4 = win.game.scene.scenes[1].gameContainer.bottomPanel.historyItems[4].list[1].text;
            expect(chip_0).to.equal('2')
            expect(chip_1).to.equal('10')
            expect(chip_2).to.equal('10')
            expect(chip_3).to.equal('10')
            expect(chip_4).to.equal('0')
            expect(win.game.scene.scenes[1].gameContainer.bottomPanel.historyItems[4].list[2].visible, 'Helmet icon is displayed').to.be.true;
        })

        })
    }) 
