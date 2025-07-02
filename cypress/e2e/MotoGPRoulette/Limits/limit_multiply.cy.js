describe("limits can't be exceded through multiply", () => {
    it('should display limit pop-up on multiplying 10 chip on a straight bet 3 times', () => {

        // cy.visitTestEnvironment();
        cy.interceptStartGame();
        cy.interceptBalance();
        const testUrl = 'http://localhost:8000/?productId=riwo-extern-1pt&lang=EN&currency=GBP&go=staging&serverAddress=https%3A%2F%2Friw-dev.olsworth.com&home=https://google.com'
        cy.visit(testUrl, { timeout: 100000 })

        cy.window({ timeout: 50000 }).should((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            const start_button = scene.gameContainer.startGroupButtons.list[0].visible;

            expect(start_button, 'Game is loaded').to.be.true
        })

        cy.wait(1000)

        cy.window({ timeout: 30000 }).should((win) => {
            expect (win.game.scene.scenes[1].gameContainer.stakeSelector.active).to.be.true
        })
        
        cy.window().then((win) => {
            win.game.scene.scenes[1].gameContainer.betPanel.list[5].list[0].emit('pointerdown')
        })

        cy.window().should((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            const chip = scene.gameContainer.betPanel.activeButton.layout.name;

            expect(chip).to.include("chip_4")
        })

        cy.window().then((win) => {
            win.game.scene.scenes[1].gameContainer.stakeSelector.list[0].list[0].emit('pointerdown')
        })

        cy.wait(500)
        cy.window().then((win) => {
            win.game.scene.scenes[1].gameContainer.tapBar.multiplyButton.emit('pointerdown')
        })

        cy.window({ timeout: 25000 }).should((win) => {
            const total_bet = win.game.scene.scenes[1].gameContainer.betPanel.list[9].text;
            expect (total_bet).to.include('20.00')
        })

        cy.wait(500)
        cy.window().then((win) => {
            win.game.scene.scenes[1].gameContainer.tapBar.multiplyButton.emit('pointerdown')
        })

        cy.window({ timeout: 25000 }).should((win) => {
            const total_bet = win.game.scene.scenes[1].gameContainer.betPanel.list[9].text;
            expect (total_bet).to.include('40.00')
        })

        cy.wait(500)
        cy.window().then((win) => {
            win.game.scene.scenes[1].gameContainer.tapBar.multiplyButton.emit('pointerdown')
        })

        cy.window({ timeout: 10000 }).should((win) => {
            const limit = win.game.scene.scenes[1].gameContainer.limitPopup.visible;
            expect (limit, 'limit pop-up is displayed').to.be.true;
        })

        cy.window({ timeout: 10000 }).should((win) => {
            const total_bet = win.game.scene.scenes[1].gameContainer.betPanel.list[9].text;
            expect (total_bet).to.include('40.00')
        })
    })
    })



