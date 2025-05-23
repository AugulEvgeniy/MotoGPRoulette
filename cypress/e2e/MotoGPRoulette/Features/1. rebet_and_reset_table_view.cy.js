describe('Rebet and reset bet are working correctly', () => {
    it('Should check that all of types of bets are displayed after rebetting)', () => {

        cy.visitTestEnvironment()
        cy.interceptStartGameRebet()


        cy.window({ timeout: 25000 }).should((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            const start_button = scene.gameContainer.list[5].list[0].visible;

            expect(start_button, 'Game is loaded').to.be.true
        })

        // cy.get('#open_button').click()
        // cy.get('#chip').select(36)
        // cy.get('#open_button').click({force: true})
        // cy.get('#set_state').click()
        // cy.get('#close_button').click()


        cy.window().should((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            const chip = scene.gameContainer.list[7].activeButton.layout.name;

            expect(chip).to.include("chip_1")
        })

        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

            scene.gameContainer.stakeSelector.dozensButtons[0].list[0].emit('pointerdown') // dozen 1
            scene.gameContainer.stakeSelector.dozensButtons[1].list[0].emit('pointerdown') // dozen 2
            scene.gameContainer.stakeSelector.dozensButtons[1].list[0].emit('pointerdown') // dozen 2 next stake
            scene.gameContainer.stakeSelector.dozensButtons[2].list[0].emit('pointerdown') // dozen 2
            scene.gameContainer.stakeSelector.evenOrOddButtons[0].emit('pointerdown') // even
            scene.gameContainer.stakeSelector.evenOrOddButtons[1].emit('pointerdown') // odd
            scene.gameContainer.stakeSelector.highOrLowButtons[0].emit('pointerdown') // low
            scene.gameContainer.stakeSelector.highOrLowButtons[1].emit('pointerdown') // high
            scene.gameContainer.stakeSelector.redOrBlackButtons[0].list[0].emit('pointerdown') // red
            scene.gameContainer.stakeSelector.redOrBlackButtons[1].list[0].emit('pointerdown') // black
            scene.gameContainer.list[4].list[1].list[0].emit('pointerdown') // straight
            scene.gameContainer.list[4].list[37].emit('pointerdown') // split
            scene.gameContainer.stakeSelector.streetButtons[1].emit('pointerdown') // street
            scene.gameContainer.stakeSelector.cornerButtons[3].emit('pointerdown') // corner
            scene.gameContainer.stakeSelector.sixLineButtons[0].emit('pointerdown') // six line
            scene.gameContainer.stakeSelector.columnButtons[0].list[0].emit('pointerdown') // column 1
            scene.gameContainer.stakeSelector.columnButtons[1].list[0].emit('pointerdown') // column 2
            scene.gameContainer.stakeSelector.columnButtons[2].list[0].emit('pointerdown') // column 3

            cy.wait(50)
            scene.gameContainer.list[5].list[0].emit('pointerdown')
        })

        cy.window({timeout: 20000}).should((win) => {
            const win_banner = win.game.scene.scenes[1].gameContainer.winBanner.visible;
            const no_win_banner = win.game.scene.scenes[1].gameContainer.noWinBanner.visible;

            expect(win_banner || no_win_banner).to.be.true

            expect(win.game.scene.scenes[1].gameContainer.topPanel.balance).to.not.equal(100000);
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

            expect(chip[0].stakeType).to.include('dozen')
            expect(chip[0].buttonId).to.equal(1)

            expect(chip[1].stakeType).to.include('dozen')
            expect(chip[1].buttonId).to.equal(2)
            expect(chip[1].bet).to.equal(100)

            expect(chip[2].stakeType).to.include('dozen')
            expect(chip[2].buttonId).to.equal(3)

            expect(chip[3].stakeType).to.include('even_or_odd')
            expect(chip[3].buttonId).to.equal(0)

            expect(chip[4].stakeType).to.include('even_or_odd')
            expect(chip[4].buttonId).to.equal(1)

            expect(chip[5].stakeType).to.include('high_or_low')
            expect(chip[5].buttonId).to.equal(1)

            expect(chip[6].stakeType).to.include('high_or_low')
            expect(chip[6].buttonId).to.equal(0)

            expect(chip[7].stakeType).to.include('red_or_black')
            expect(chip[7].buttonId).to.equal(0)

            expect(chip[8].stakeType).to.include('red_or_black')
            expect(chip[8].buttonId).to.equal(1)

            expect(chip[9].stakeType).to.include('straight')
            expect(chip[9].buttonId).to.equal(1)

            expect(chip[10].stakeType).to.include('split')
            expect(chip[10].buttonId).to.equal(1)

            expect(chip[11].stakeType).to.include('street')
            expect(chip[11].buttonId).to.equal(2)

            expect(chip[12].stakeType).to.include('corner')
            expect(chip[12].buttonId).to.equal(4)

            expect(chip[13].stakeType).to.include('six_line')
            expect(chip[13].buttonId).to.equal(1)

            expect(chip[14].stakeType).to.include('column')
            expect(chip[14].buttonId).to.equal(1)

            expect(chip[15].stakeType).to.include('column')
            expect(chip[15].buttonId).to.equal(2)

            expect(chip[16].stakeType).to.include('column')
            expect(chip[16].buttonId).to.equal(3)
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
        
        cy.window().then((win) => {
        win.game.scene.scenes[1].gameContainer.stakeSelector.dozensButtons[0].list[0].emit('pointerdown')
    })

        cy.wait(500)

        cy.window().then((win) => {
        win.game.scene.scenes[1].gameContainer.list[5].list[0].emit('pointerdown')
    })

        cy.window({timeout: 20000}).should((win) => {
        const no_win_banner = win.game.scene.scenes[1].gameContainer.noWinBanner.visible;
        const win_banner = win.game.scene.scenes[1].gameContainer.winBanner.visible;

        expect(no_win_banner || win_banner, 'result banner is displayed').to.be.true
        expect(win.game.scene.scenes[1].gameContainer.topPanel.balance).to.not.equal(100000);
    })

    cy.wait(3300)
    cy.window().should((win) => {
        const rebet = win.game.scene.scenes[1].gameContainer.tapBar.reBetButton.list[2].visible;
        expect(rebet, 'rebet button is visible').to.be.true;
    })

    cy.window().then((win) => {
        win.game.scene.scenes[1].gameContainer.tapBar.reBetButton.emit('pointerdown');
    })

    cy.window().should((win) => {
        const chip = win.game.scene.scenes[1].gameContainer.stakeSelector.chips;

        expect(chip[0].stakeType).to.include('dozen')
        expect(chip[0].buttonId).to.equal(1)
 })

})
})


    describe('Rebetting on Race Track View switches the table view to standart', () => {
    it('"isRaceTrack" should be false)', () => {

        cy.wait(200)
        cy.window().then((win) => {
        win.game.scene.scenes[1].gameContainer.tapBar.raceButton.emit('pointerdown');
    })
        cy.wait(1200)
        cy.window().then((win) => {
        win.game.scene.scenes[1].gameContainer.tapBar.reBetButton.emit('pointerdown');
    })
        cy.wait(500)
        cy.window().should((win) => {
        const chip = win.game.scene.scenes[1].gameContainer.stakeSelector.chips;

        expect(chip[0].stakeType).to.include('dozen')
        expect(chip[0].buttonId).to.equal(1)
        expect(win.game.scene.scenes[1].gameContainer.stakeSelector.isRaceTable, 'isRaceTable is false').to.be.false
    })

    })
})