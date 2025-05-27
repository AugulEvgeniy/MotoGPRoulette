describe('Back to lobby button', () => {
    it('Should check that Back to Lobby button redirects to the lobby', () => {

        cy.visitTestEnvironment()
        cy.intercept('abeta.html').as('lobby')

        cy.window({ timeout: 50000 }).should((win) => {
            const start_button = win.game.scene.scenes[1].gameContainer.list[5].list[0].visible;
            expect(start_button, 'Game is loaded').to.be.true
        })

        
        cy.window().then((win) => {
            win.game.scene.scenes[1].gameContainer.topPanel.menuSettingsButton.list[0].emit('pointerdown');
            win.game.scene.scenes[1].gameContainer.settingsMenu.list[6].emit('pointerdown');
        })

        cy.wait('@lobby')
        
        })
    }) 

            