describe('Chips from Race Track view are displayed in Table View when entering it', () => {
    it('bet 20 in Race Track is 33, 1, 20, 14, 31 in Table View)', () => {

        cy.visitTestEnvironment()


        cy.window({ timeout: 50000 }).should((win) => {
            const start_button = win.game.scene.scenes[1].gameContainer.startGroupButtons.list[0].visible;

            expect(start_button, 'Game is loaded').to.be.true
        })

            cy.window().then((win) => {
            win.game.scene.scenes[1].gameContainer.tapBar.raceButton.emit('pointerdown')
        })

            cy.wait(100)

            cy.window({ timeout: 25000 }).should((win) => {
            const race_track = win.game.scene.scenes[1].gameContainer.stakeSelector.isRaceTable;

            expect(race_track, 'Race Track View').to.be.true;
        })
    

        cy.wait(500)
        cy.window().then((win) => {
            win.game.scene.scenes[1].gameContainer.stakeSelector.raceButtons[20].emit('pointerdown')
        })

        cy.window().then((win) => {
            win.game.scene.scenes[1].gameContainer.tapBar.raceButton.emit('pointerdown')
        })

        cy.window({ timeout: 25000 }).should((win) => {
            const race_track = win.game.scene.scenes[1].gameContainer.stakeSelector.isRaceTable;

            expect(race_track, 'Table View').to.be.false;
        })

        cy.wait(200)
        cy.window({ timeout: 25000 }).should((win) => {
            expect(win.game.scene.scenes[1].gameContainer.stakeSelector.chips[0].buttonId).to.equal(31);
            expect(win.game.scene.scenes[1].gameContainer.stakeSelector.chips[1].buttonId).to.equal(14);
            expect(win.game.scene.scenes[1].gameContainer.stakeSelector.chips[2].buttonId).to.equal(20);
            expect(win.game.scene.scenes[1].gameContainer.stakeSelector.chips[3].buttonId).to.equal(1);
            expect(win.game.scene.scenes[1].gameContainer.stakeSelector.chips[4].buttonId).to.equal(33);
            })
        })

            
        it('Chips from Table View reset after entering Race Track', () => {
            
        cy.window().then((win) => {
            win.game.scene.scenes[1].gameContainer.tapBar.raceButton.emit('pointerdown')
        })

        cy.wait(100)

        cy.window({ timeout: 25000 }).should((win) => {
            const race_track = win.game.scene.scenes[1].gameContainer.stakeSelector.isRaceTable;

            expect(race_track, 'Race Track View').to.be.true;
        })

        cy.window().should((win) => {
            expect(win.game.scene.scenes[1].gameContainer.stakeSelector.chips).to.have.length(0)
            })
        })
    }) 

