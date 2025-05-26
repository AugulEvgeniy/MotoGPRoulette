describe('Multiply works correctly for Neighbours stake', () => {
    it('should multiply neighbours stake', () => {

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
            expect(win.game.scene.scenes[1].gameContainer.stakeSelector.isSwitching, 'Switched to RaceTable').to.be.false;
        })

        cy.window().should((win) => {
            expect(win.game.scene.scenes[1].gameContainer.stakeSelector.isRaceTable, 'Switched to RaceTable').to.be.true;
        })
        
        cy.wait(500)

        cy.window().then((win) => {
            win.game.scene.scenes[1].gameContainer.stakeSelector.raceButtons[0].emit('pointerdown')
        })

        cy.wait(800)
        cy.window().then((win) => {
            win.game.scene.scenes[1].gameContainer.tapBar.multiplyButton.emit('pointerdown')
        })

        cy.window({timeout: 10000}).should((win) => {
            const total_bet = win.game.scene.scenes[1].gameContainer.betPanel.list[9].text;
            expect (total_bet).to.include('5.00')
        })


        cy.wait(1200)
        cy.window().then((win) => {
            win.game.scene.scenes[1].gameContainer.tapBar.multiplyButton.emit('pointerdown')
        })

        cy.window({timeout: 10000}).should((win) => {
            const total_bet = win.game.scene.scenes[1].gameContainer.betPanel.list[9].text;
            expect (total_bet).to.include('10.00')
        })

        // cy.wait(400)
        cy.window().then((win) => {
            win.game.scene.scenes[1].gameContainer.startGroupButtons.resetButton.emit('pointerdown');
        })
    })
})

    describe('Multiply works correctly for Tiers stake', () => {
    it('Should multiply Tiers stake', () => {

        cy.wait(1000)
        cy.window().then((win) => {
            win.game.scene.scenes[1].gameContainer.stakeSelector.tiersButton.emit('pointerdown')
        })

        cy.window({timeout: 10000}).should((win) => {
            const total_bet = win.game.scene.scenes[1].gameContainer.betPanel.list[9].text;
            expect (total_bet).to.include('3.00')
        })
        
        cy.wait(800)
        cy.window().then((win) => {
            win.game.scene.scenes[1].gameContainer.tapBar.multiplyButton.emit('pointerdown')
        })

        cy.window({timeout: 10000}).should((win) => {
            const total_bet = win.game.scene.scenes[1].gameContainer.betPanel.list[9].text;
            expect (total_bet).to.include('6.00')
        })


        cy.wait(1200)
        cy.window().then((win) => {
            win.game.scene.scenes[1].gameContainer.tapBar.multiplyButton.emit('pointerdown')

        cy.window({timeout: 10000}).should((win) => {
            const total_bet = win.game.scene.scenes[1].gameContainer.betPanel.list[9].text;
            expect (total_bet).to.include('12.00')
        })
        
        // cy.wait(400)
        cy.window().then((win) => {
            win.game.scene.scenes[1].gameContainer.startGroupButtons.resetButton.emit('pointerdown');
        })
        })
    })
})

    describe('Multiply works correctly for Orphelins stake', () => {
    it('Should multiply Orphelins stake', () => {

        cy.wait(500)
        cy.window().then((win) => {
            win.game.scene.scenes[1].gameContainer.stakeSelector.orphelinsButton.emit('pointerdown')
        })
        
        cy.wait(800)
        cy.window().then((win) => {
            win.game.scene.scenes[1].gameContainer.tapBar.multiplyButton.emit('pointerdown')
        })

        cy.window({timeout: 10000}).should((win) => {
            const total_bet = win.game.scene.scenes[1].gameContainer.betPanel.list[9].text;
            expect (total_bet).to.include('5.00')
        })


        cy.wait(1200)
        cy.window().then((win) => {
            win.game.scene.scenes[1].gameContainer.tapBar.multiplyButton.emit('pointerdown')

        cy.window({timeout: 10000}).should((win) => {
            const total_bet = win.game.scene.scenes[1].gameContainer.betPanel.list[9].text;
            expect (total_bet).to.include('10.00')
        })
        
        // cy.wait(400)
        cy.window().then((win) => {
            win.game.scene.scenes[1].gameContainer.startGroupButtons.resetButton.emit('pointerdown');
        })
        })
    })
})

    describe('Multiply works correctly for Voisins stake', () => {
    it('Should multiply Voisins stake', () => {

        cy.wait(500)
        cy.window().then((win) => {
            win.game.scene.scenes[1].gameContainer.stakeSelector.voisinsButton.emit('pointerdown')
        })

        cy.window({timeout: 10000}).should((win) => {
            const total_bet = win.game.scene.scenes[1].gameContainer.betPanel.list[9].text;
            expect (total_bet).to.include('4.50')
        })
        
        cy.wait(800)
        cy.window().then((win) => {
            win.game.scene.scenes[1].gameContainer.tapBar.multiplyButton.emit('pointerdown')
        })

        cy.window({timeout: 10000}).should((win) => {
            const total_bet = win.game.scene.scenes[1].gameContainer.betPanel.list[9].text;
            expect (total_bet).to.include('9.00')
        })


        cy.wait(1200)
        cy.window().then((win) => {
            win.game.scene.scenes[1].gameContainer.tapBar.multiplyButton.emit('pointerdown')

        cy.window({timeout: 10000}).should((win) => {
            const total_bet = win.game.scene.scenes[1].gameContainer.betPanel.list[9].text;
            expect (total_bet).to.include('18.00')
        })
        })
    })
})