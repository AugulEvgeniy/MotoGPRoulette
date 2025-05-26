describe('multiply works correctly', () => {
    it('should multiply 0.50 stake', () => {

        cy.visitTestEnvironment()
        cy.interceptStartGame()


        cy.window({ timeout: 30000 }).should((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            const start_button = scene.gameContainer.list[5].list[0].visible;

            expect(start_button, 'Game is loaded').to.be.true
        })

        cy.wait(3000)

        cy.window().then((win) => {
            
            win.game.scene.scenes[1].gameContainer.list[4].list[0].list[0].emit('pointerdown')
        })


        cy.wait(800)
        cy.window().then((win) => {
            win.game.scene.scenes[1].gameContainer.tapBar.multiplyButton.emit('pointerdown')
        })

        cy.window({ timeout: 10000 }).should((win) => {
            const total_bet = win.game.scene.scenes[1].gameContainer.betPanel.list[9].text;
            expect (total_bet).to.include('1.00')
        })

        cy.wait(2000)
        cy.window().then((win) => {
            win.game.scene.scenes[1].gameContainer.tapBar.multiplyButton.emit('pointerdown')
        })

        cy.window({ timeout: 10000 }).should((win) => {
            const total_bet = win.game.scene.scenes[1].gameContainer.betPanel.list[9].text;
            expect (total_bet).to.include('2.00')
        })

        cy.wait(2000)
        cy.window().then((win) => {
            win.game.scene.scenes[1].gameContainer.tapBar.multiplyButton.emit('pointerdown')
        })

        cy.window({ timeout: 10000 }).should((win) => {
            const total_bet = win.game.scene.scenes[1].gameContainer.betPanel.list[9].text;
            expect (total_bet).to.include('4.00')
        })
        
    })
})