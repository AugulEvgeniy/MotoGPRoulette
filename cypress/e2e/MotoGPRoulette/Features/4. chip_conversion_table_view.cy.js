describe('chip conversion', () => {
    it('five 0.10 chips convert to 0.50', () => {

        cy.visitTestEnvironment()

        cy.window({ timeout: 50000 }).should((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            const start_button = scene.gameContainer.startGroupButtons.list[0].visible;

            expect(start_button, 'Game is loaded').to.be.true
        })

        cy.wait(500)
        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            scene.gameContainer.betPanel.list[1].list[0].emit('pointerdown')
        })

        cy.window({ timeout: 10000 }).should((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            const chip = scene.gameContainer.betPanel.activeButton.layout.name;

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

    it('five 0.10 chips on 0.50 convert to 1', () => {

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


    it('two 0.50 chips convert to 1 and there are two 1 chips in the stack', () => {

        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            scene.gameContainer.betPanel.list[2].list[0].emit('pointerdown')
        })

        cy.window({ timeout: 10000 }).should((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            const chip = scene.gameContainer.betPanel.activeButton.layout.name;

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


    it('three 1 chips on two 1 chips convert to 5', () => {

        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            scene.gameContainer.betPanel.list[3].list[0].emit('pointerdown')
        })

        cy.window({ timeout: 10000 }).should((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            const chip = scene.gameContainer.betPanel.activeButton.layout.name;

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


    it('two 5 chips convert to 10', () => {

        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            scene.gameContainer.betPanel.list[4].list[0].emit('pointerdown')
        })

        cy.window({ timeout: 10000 }).should((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            const chip = scene.gameContainer.betPanel.activeButton.layout.name;

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

describe('chip conversion in Race Track', () => {
    it('RACE TRACK five 0.10 chips convert to 0.50', () => {

            cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            scene.gameContainer.tapBar.raceButton.emit('pointerdown')
        })

            cy.wait(100)

            cy.window({ timeout: 25000}).should((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            const race_track = scene.gameContainer.stakeSelector.isRaceTable;

            expect(race_track, 'isRaceTable').to.be.true;
        })
        

        cy.wait(1000)
        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            scene.gameContainer.betPanel.list[1].list[0].emit('pointerdown')
        })

        cy.window().should((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            const chip = scene.gameContainer.betPanel.activeButton.layout.name;

            expect(chip).to.include("chip_0")
        })

        cy.wait(700)
        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

            scene.gameContainer.stakeSelector.raceButtons[20].emit('pointerdown')
            scene.gameContainer.stakeSelector.raceButtons[20].emit('pointerdown')
            scene.gameContainer.stakeSelector.raceButtons[20].emit('pointerdown')
            scene.gameContainer.stakeSelector.raceButtons[20].emit('pointerdown')
            scene.gameContainer.stakeSelector.raceButtons[20].emit('pointerdown')

            cy.window().should((win) => {
                expect(win.game.scene.scenes[1].gameContainer.stakeSelector.chips[0].bet, 'Bet is 0.50').to.equal(50);
            })
        })
        })

    it('RACE TRACK five 0.10 chips on 0.50 convert to 1)', () => {

        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

            scene.gameContainer.stakeSelector.raceButtons[20].emit('pointerdown')
            scene.gameContainer.stakeSelector.raceButtons[20].emit('pointerdown')
            scene.gameContainer.stakeSelector.raceButtons[20].emit('pointerdown')
            scene.gameContainer.stakeSelector.raceButtons[20].emit('pointerdown')
            scene.gameContainer.stakeSelector.raceButtons[20].emit('pointerdown')

            cy.window().should((win) => {
                expect(win.game.scene.scenes[1].gameContainer.stakeSelector.chips[0].bet, 'Bet is 1').to.equal(100);
            })
        })
        })

    it('RACE TRACK two 0.50 chips convert to 1 and there are two 1 chips in the stack)', () => {

        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            scene.gameContainer.betPanel.list[2].list[0].emit('pointerdown')
        })

        cy.window().should((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            const chip = scene.gameContainer.betPanel.activeButton.layout.name;

            expect(chip).to.include("chip_1")
        })

        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

            scene.gameContainer.stakeSelector.raceButtons[20].emit('pointerdown')
            scene.gameContainer.stakeSelector.raceButtons[20].emit('pointerdown')

            cy.window().should((win) => {
                expect(win.game.scene.scenes[1].gameContainer.stakeSelector.chips[0].bet, '[0] Bet is 1').to.equal(100);
                expect(win.game.scene.scenes[1].gameContainer.stakeSelector.chips[1].bet, '[1] Bet is 1').to.equal(100);
            })
        })
        })

    it('RACE TRACK three 1 chips on two 1 chips convert to 5)', () => {

        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            scene.gameContainer.betPanel.list[3].list[0].emit('pointerdown')
        })

        cy.window().should((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            const chip = scene.gameContainer.betPanel.activeButton.layout.name;

            expect(chip).to.include("chip_2")
        })

        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

            scene.gameContainer.stakeSelector.raceButtons[20].emit('pointerdown')
            scene.gameContainer.stakeSelector.raceButtons[20].emit('pointerdown')
            scene.gameContainer.stakeSelector.raceButtons[20].emit('pointerdown')

            cy.window().should((win) => {
                expect(win.game.scene.scenes[1].gameContainer.stakeSelector.chips[0].bet, 'Bet is 5').to.equal(500);
            })
        })
        })

    it('RACE TRACK two 5 chips convert to 10)', () => {

        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            scene.gameContainer.betPanel.list[4].list[0].emit('pointerdown')
        })

        cy.window().should((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            const chip = scene.gameContainer.betPanel.activeButton.layout.name;

            expect(chip).to.include("chip_3")
        })

        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

            scene.gameContainer.stakeSelector.raceButtons[20].emit('pointerdown')

            cy.window().should((win) => {
                expect(win.game.scene.scenes[1].gameContainer.stakeSelector.chips[0].bet, 'Bet is 10').to.equal(1000);
            })
        })
        })
    })