describe('multiply works correctly', () => {
    it('should multiply 0.50 stake', () => {

        cy.visitTestEnvironment();
        cy.interceptStartGame();


        cy.window({ timeout: 50000 }).should((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            const start_button = scene.gameContainer.startGroupButtons.list[0].visible;

            expect(start_button, 'Game is loaded').to.be.true
        })

        cy.window({ timeout: 30000 }).should((win) => {
            expect (win.game.scene.scenes[1].gameContainer.stakeSelector.active).to.be.true
        })
        cy.wait(2000)

        cy.window().then((win) => {
            win.game.scene.scenes[1].gameContainer.stakeSelector.list[0].list[0].emit('pointerdown')
        })


        cy.wait(800)
        cy.window().then((win) => {
            win.game.scene.scenes[1].gameContainer.tapBar.multiplyButton.emit('pointerdown')
        })

        cy.window({ timeout: 25000 }).should((win) => {
            const total_bet = win.game.scene.scenes[1].gameContainer.betPanel.list[9].text;
            expect (total_bet).to.include('1.00')
        })

        cy.wait(2000)
        cy.window().then((win) => {
            win.game.scene.scenes[1].gameContainer.tapBar.multiplyButton.emit('pointerdown')
        })

        cy.window({ timeout: 25000 }).should((win) => {
            const total_bet = win.game.scene.scenes[1].gameContainer.betPanel.list[9].text;
            expect (total_bet).to.include('2.00')
        })

        cy.wait(2000)
        cy.window().then((win) => {
            win.game.scene.scenes[1].gameContainer.tapBar.multiplyButton.emit('pointerdown')
        })

        cy.window({ timeout: 25000 }).should((win) => {
            const total_bet = win.game.scene.scenes[1].gameContainer.betPanel.list[9].text;
            expect (total_bet).to.include('4.00')
        })
    })

    it('Multiply works correctly in Race Track', () => {
        cy.wait(500)

        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            scene.gameContainer.tapBar.raceButton.emit('pointerdown')
        })

        cy.wait(100)

        cy.window({ timeout: 25000 }).should((win) => {
            expect(win.game.scene.scenes[1].gameContainer.stakeSelector.isSwitching, 'Switched to RaceTable').to.be.false;
        })

        cy.window({ timeout: 25000 }).should((win) => {
            expect(win.game.scene.scenes[1].gameContainer.stakeSelector.isRaceTable, 'Switched to RaceTable').to.be.true;
        })
        
        cy.wait(2000)

        cy.window().then((win) => {
            win.game.scene.scenes[1].gameContainer.stakeSelector.raceButtons[0].emit('pointerdown')
        })

        cy.wait(800)
        cy.window().then((win) => {
            win.game.scene.scenes[1].gameContainer.tapBar.multiplyButton.emit('pointerdown')
        })

        cy.window({timeout: 25000}).should((win) => {
            const total_bet = win.game.scene.scenes[1].gameContainer.betPanel.list[9].text;
            expect (total_bet).to.include('5.00')
        })


        cy.wait(1200)
        cy.window().then((win) => {
            win.game.scene.scenes[1].gameContainer.tapBar.multiplyButton.emit('pointerdown')
        })

        cy.window({timeout: 25000}).should((win) => {
            const total_bet = win.game.scene.scenes[1].gameContainer.betPanel.list[9].text;
            expect (total_bet).to.include('10.00')
        })

        // cy.wait(400)
        cy.window().then((win) => {
            win.game.scene.scenes[1].gameContainer.startGroupButtons.resetButton.emit('pointerdown');
        })
    })
})



