describe('Fullscreen button', () => {
    it('isFullScreenActive switches on clicking the button (cypress does not allow to actually enter fullscreen, only assertions are of interest here)', () => {

        cy.visitTestEnvironment()

        cy.window({ timeout: 50000 }).should((win) => {
            const start_button = win.game.scene.scenes[1].gameContainer.list[5].list[0].visible;

            expect(start_button, 'Game is loaded').to.be.true
        })

        cy.window().then((win) => {
            win.document.documentElement.requestFullscreen = () => Promise.resolve();
            win.document.exitFullscreen = () => Promise.resolve();
            Object.defineProperty(win.document, 'fullscreenElement', {
            configurable: true,
            get: () => true, // or null depending on state
        });
    });
        cy.window().then((win) => {
            win.game.scene.scenes[1].gameContainer.topPanel.menuSettingsButton.list[0].emit('pointerdown');
            win.game.scene.scenes[1].gameContainer.settingsMenu.list[5].emit('pointerdown');
        })

        cy.window().should((win) => {
            expect(win.game.scene.scenes[1].gameContainer.settingsMenu.isFullscreenActive, 'isFullScreenActive is true').to.be.true;
        })

        cy.wait(700)
        cy.window().then((win) => {
            win.game.scene.scenes[1].gameContainer.settingsMenu.list[5].emit('pointerdown');
        })

        cy.window().should((win) => {
            expect(win.game.scene.scenes[1].gameContainer.settingsMenu.isFullscreenActive, 'isFullScreenActive is true').to.be.false;
        })

        })
    }) 

            