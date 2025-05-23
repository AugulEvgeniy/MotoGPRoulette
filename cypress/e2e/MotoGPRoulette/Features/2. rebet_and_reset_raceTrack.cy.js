describe('Rebet and reset bet are working correctly', () => {
    it('Should check that all of types of bets are displayed after rebetting)', () => {

        cy.visitTestEnvironment()
        cy.interceptStartGameRebetRace()


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

        // cy.get('#open_button').click()
        // cy.get('#chip').select(10)
        // cy.get('#open_button').click({force: true})
        // cy.get('#set_state').click()
        // cy.get('#close_button').click()

        cy.wait(100)

            cy.window().should((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            const race_track = scene.gameContainer.stakeSelector.isRaceTable;

            expect(race_track, "Switched to Race Track").to.be.true;
        })

        cy.wait(500)
        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

            scene.gameContainer.stakeSelector.raceButtons[1].emit('pointerdown')

            cy.wait(50)
            scene.gameContainer.list[5].list[0].emit('pointerdown')
        })

        cy.window({timeout: 30000}).should((win) => {
            const noWin_banner = win.game.scene.scenes[1].gameContainer.noWinBanner.visible;
            const win_banner = win.game.scene.scenes[1].gameContainer.winBanner.visible;

            expect(noWin_banner || win_banner, "banner is displayed").to.be.true
            expect(win.game.scene.scenes[1].gameContainer.topPanel.balance).to.not.equal(1000);
        })

        cy.wait(3000)
        cy.window().should((win) => {
            const rebet = win.game.scene.scenes[1].gameContainer.tapBar.reBetButton.list[2].visible;

            expect(rebet, 'rebet button is visible').to.be.true;
        })

        cy.window().then((win) => {
        win.game.scene.scenes[1].gameContainer.tapBar.reBetButton.emit('pointerdown');
        })

        cy.window({ timeout: 10000 }).should((win) => {
            const chip = win.game.scene.scenes[1].gameContainer.stakeSelector.chips;

            expect(chip[0].stakeType).to.include('straight')
            expect(chip[0].buttonId).to.equal(1)
        })
        })
    }) 


    describe('Reset bet is working correctly', () => {
    it('Should check that "spins" array is 0 after reset)', () => {


        cy.wait(300)
        cy.window().then((win) => {
            win.game.scene.scenes[1].gameContainer.startGroupButtons.resetButton.emit('pointerdown');
    })

        cy.wait(300)
        cy.window().should((win) => {
            expect(win.game.scene.scenes[1].gameContainer.stakeSelector.chips).have.length(0)
    })

    })
})


    describe('Rebet works correctly after the second spin with a different stake', () => {
    it('Should check that "chips" array is rewritten after placing the second bet)', () => {

        cy.interceptStartGameRebetRace_2nd()
        
        cy.window().then((win) => {
        win.game.scene.scenes[1].gameContainer.stakeSelector.raceButtons[2].emit('pointerdown')
        cy.wait(50)
        win.game.scene.scenes[1].gameContainer.list[5].list[0].emit('pointerdown')
    })

        cy.wait(500)
        cy.window().then((win) => {
        win.game.scene.scenes[1].gameContainer.list[5].list[0].emit('pointerdown')
    })

        cy.window({timeout: 30000}).should((win) => {
        const no_win_banner = win.game.scene.scenes[1].gameContainer.noWinBanner.visible;
        const win_banner = win.game.scene.scenes[1].gameContainer.winBanner.visible;

        expect(no_win_banner || win_banner, 'banner is displayed').to.be.true
        expect(win.game.scene.scenes[1].gameContainer.topPanel.balance).to.not.equal(1000);
    })

    cy.wait(3000)
    cy.window().should((win) => {
        const rebet = win.game.scene.scenes[1].gameContainer.tapBar.reBetButton.list[2].visible;
        expect(rebet).to.be.true;
    })

    cy.window().then((win) => {
        win.game.scene.scenes[1].gameContainer.tapBar.reBetButton.emit('pointerdown');
    })

    cy.window().should((win) => {
        const chip = win.game.scene.scenes[1].gameContainer.stakeSelector.chips;

        expect(chip[0].stakeType).to.include('straight')
        expect(chip[0].buttonId).to.equal(2)
 })

})
})
