describe('0.10 chip conversion', () => {
    it('Should check that five 0.10 chips convert to 0.50)', () => {

        cy.visitTestEnvironment()
        cy.intercept('start-game').as('startGame')


        cy.window({ timeout: 50000 }).should((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            const start_button = scene.gameContainer.list[5].list[0].visible;

            expect(start_button, 'Game is loaded').to.be.true
        })

        cy.wait(500)
        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            scene.gameContainer.list[7].list[1].list[0].emit('pointerdown')
        })

        cy.window({ timeout: 10000 }).should((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            const chip = scene.gameContainer.list[7].activeButton.layout.name;

            expect(chip).to.include("chip_0")
        })

        cy.wait(700)
        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

            scene.gameContainer.stakeSelector.baseButtonsElements[11].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.baseButtonsElements[11].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.baseButtonsElements[11].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.baseButtonsElements[11].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.baseButtonsElements[11].list[0].emit('pointerdown')

            cy.window({ timeout: 10000 }).should((win) => {
                expect(win.game.scene.scenes[1].gameContainer.stakeSelector.chips[0].bet, 'Bet is 0.50').to.equal(50);
            })
        })
        })
    }) 

    
    describe('0.10 chip conversion', () => {
    it('Should check that five 0.10 chips on 0.50 convert to 1)', () => {

        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

            scene.gameContainer.stakeSelector.baseButtonsElements[11].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.baseButtonsElements[11].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.baseButtonsElements[11].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.baseButtonsElements[11].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.baseButtonsElements[11].list[0].emit('pointerdown')

            cy.window({ timeout: 10000 }).should((win) => {
                expect(win.game.scene.scenes[1].gameContainer.stakeSelector.chips[0].bet, 'Bet is 1').to.equal(100);
            })
        })
        })
    })

    describe('0.50 chip conversion', () => {
    it('Should check that two 0.50 chips convert to 1 and there are two 1 chips in the stack)', () => {

        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            scene.gameContainer.list[7].list[2].list[0].emit('pointerdown')
        })

        cy.window({ timeout: 10000 }).should((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            const chip = scene.gameContainer.list[7].activeButton.layout.name;

            expect(chip).to.include("chip_1")
        })

        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

            scene.gameContainer.stakeSelector.baseButtonsElements[11].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.baseButtonsElements[11].list[0].emit('pointerdown')

            cy.window({ timeout: 10000 }).should((win) => {
                expect(win.game.scene.scenes[1].gameContainer.stakeSelector.chips[0].bet, '[0] Bet is 1').to.equal(100);
                expect(win.game.scene.scenes[1].gameContainer.stakeSelector.chips[1].bet, '[1] Bet is 1').to.equal(100);
            })
        })
        })
    })

    describe('1 chip conversion', () => {
    it('Should check that three 1 chips on two 1 chips convert to 5)', () => {

        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            scene.gameContainer.list[7].list[3].list[0].emit('pointerdown')
        })

        cy.window({ timeout: 10000 }).should((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            const chip = scene.gameContainer.list[7].activeButton.layout.name;

            expect(chip).to.include("chip_2")
        })

        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

            scene.gameContainer.stakeSelector.baseButtonsElements[11].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.baseButtonsElements[11].list[0].emit('pointerdown')
            scene.gameContainer.stakeSelector.baseButtonsElements[11].list[0].emit('pointerdown')

            cy.window({ timeout: 10000 }).should((win) => {
                expect(win.game.scene.scenes[1].gameContainer.stakeSelector.chips[0].bet, 'Bet is 5').to.equal(500);
            })
        })
        })
    })

    describe('5 chip conversion', () => {
    it('Should check that two 5 chips convert to 10)', () => {

        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            scene.gameContainer.list[7].list[4].list[0].emit('pointerdown')
        })

        cy.window({ timeout: 10000 }).should((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            const chip = scene.gameContainer.list[7].activeButton.layout.name;

            expect(chip).to.include("chip_3")
        })

        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

            scene.gameContainer.stakeSelector.baseButtonsElements[11].list[0].emit('pointerdown')

            cy.window({ timeout: 10000 }).should((win) => {
                expect(win.game.scene.scenes[1].gameContainer.stakeSelector.chips[0].bet, 'Bet is 10').to.equal(1000);
            })
        })
        })
    })