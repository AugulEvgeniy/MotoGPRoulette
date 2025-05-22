describe('Sound Button mutes the game', () => {
    it('Should check that soundState switches when clicking on the button)', () => {

        cy.visitTestEnvironment()

        cy.window({ timeout: 25000 }).should((win) => {
            const start_button = win.game.scene.scenes[1].gameContainer.list[5].list[0].visible;

            expect(start_button, 'Game is loaded').to.be.true
        })

        cy.window().then((win) => {
            win.game.scene.scenes[1].gameContainer.topPanel.menuSettingsButton.list[0].emit('pointerdown');
            win.game.scene.scenes[1].gameContainer.settingsMenu.soundButton.emit('pointerdown');
        })

        cy.window().should((win) => {
            expect(win.game.scene.scenes[1].gameContainer.settingsMenu.soundState, 'soundState is false').to.be.false;
        })

        cy.wait(500)
        cy.window().then((win) => {
            win.game.scene.scenes[1].gameContainer.settingsMenu.soundButton.emit('pointerdown');
        })

        cy.window().should((win) => {
            expect(win.game.scene.scenes[1].gameContainer.settingsMenu.soundState, 'soundState is true').to.be.true;
        })

        })
    }) 

            