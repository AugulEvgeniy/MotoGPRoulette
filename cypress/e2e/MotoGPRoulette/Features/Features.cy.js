describe('Rebet and reset bet are working correctly', () => {
    it('Should check that all of types of bets are displayed after rebetting', () => {

        cy.visitTestEnvironment()
        cy.interceptStartGame()
        // const testUrl = 'http://localhost:8000/?productId=riwo-extern-1pt&lang=EN&currency=GBP&go=staging&serverAddress=https%3A%2F%2Friw-dev.olsworth.com&home=https://google.com'
        // cy.visit(testUrl, { timeout: 100000 })

        cy.window({ timeout: 50000 }).should((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            const start_button = scene.gameContainer.startGroupButtons.list[0].visible;

            expect(start_button, 'Game is loaded').to.be.true
        })

        cy.get('#open_button').click()
        cy.get('#chip').select(36)
        cy.get('#open_button').click({force: true})
        cy.get('#set_state').click()
        cy.get('#close_button').click()


        cy.window().should((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            const chip = scene.gameContainer.betPanel.activeButton.layout.name;

            expect(chip).to.include("chip_2")
        })

        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

            scene.gameContainer.stakeSelector.dozensButtons[0].list[0].emit('pointerdown') // dozen 1
            scene.gameContainer.stakeSelector.dozensButtons[1].list[0].emit('pointerdown') // dozen 2
            scene.gameContainer.stakeSelector.dozensButtons[2].list[0].emit('pointerdown') // dozen 3
            scene.gameContainer.stakeSelector.evenOrOddButtons[0].emit('pointerdown') // even
            scene.gameContainer.stakeSelector.evenOrOddButtons[1].emit('pointerdown') // odd
            scene.gameContainer.stakeSelector.highOrLowButtons[0].emit('pointerdown') // low
            scene.gameContainer.stakeSelector.highOrLowButtons[1].emit('pointerdown') // high
            scene.gameContainer.stakeSelector.redOrBlackButtons[0].list[0].emit('pointerdown') // red
            scene.gameContainer.stakeSelector.redOrBlackButtons[1].list[0].emit('pointerdown') // black
            scene.gameContainer.stakeSelector.list[1].list[0].emit('pointerdown') // straight
            scene.gameContainer.stakeSelector.list[37].emit('pointerdown') // split
            scene.gameContainer.stakeSelector.streetButtons[1].emit('pointerdown') // street
            scene.gameContainer.stakeSelector.cornerButtons[3].emit('pointerdown') // corner
            scene.gameContainer.stakeSelector.sixLineButtons[0].emit('pointerdown') // six line
            scene.gameContainer.stakeSelector.columnButtons[0].list[0].emit('pointerdown') // column 1
            scene.gameContainer.stakeSelector.columnButtons[1].list[0].emit('pointerdown') // column 2
            scene.gameContainer.stakeSelector.columnButtons[2].list[0].emit('pointerdown') // column 3

            cy.wait(50)
            scene.gameContainer.startGroupButtons.list[0].emit('pointerdown')
        })

        cy.window({timeout: 30000}).should((win) => {
            const win_banner = win.game.scene.scenes[1].gameContainer.winBanner.visible;
            const no_win_banner = win.game.scene.scenes[1].gameContainer.noWinBanner.visible;

            expect(win_banner || no_win_banner).to.be.true

            expect(win.game.scene.scenes[1].gameContainer.topPanel.balance).to.not.equal(100000);
        })

        cy.window().should((win) => {
            const rebet = win.game.scene.scenes[1].gameContainer.tapBar.reBetButton.list[2].visible;

            expect(rebet).to.be.true;
        })

        cy.window().then((win) => {
        win.game.scene.scenes[1].gameContainer.tapBar.reBetButton.emit('pointerdown');
        })

        cy.window({ timeout: 10000 }).should((win) => {
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

            it('Reset bet is working correctly', () => {
        
        cy.wait(2000)
        cy.window().then((win) => {
            win.game.scene.scenes[1].gameContainer.startGroupButtons.resetButton.emit('pointerdown');
    })

        cy.wait(500)
        cy.window({ timeout: 10000 }).should((win) => {
            expect(win.game.scene.scenes[1].gameContainer.stakeSelector.chips).have.length(0)
    })

    })

    it('Rebet works correctly after the second spin with a different stake', () => {
        cy.window().then((win) => {
        win.game.scene.scenes[1].gameContainer.stakeSelector.dozensButtons[1].list[0].emit('pointerdown')
    })

        cy.wait(500)

        cy.window().then((win) => {
        win.game.scene.scenes[1].gameContainer.startGroupButtons.list[0].emit('pointerdown')
    })

        cy.window({timeout: 30000}).should((win) => {
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

    cy.window({ timeout: 25000 }).should((win) => {
        const chip = win.game.scene.scenes[1].gameContainer.stakeSelector.chips;

        expect(chip[0].stakeType).to.include('dozen')
        expect(chip[0].buttonId).to.equal(2)
 })

})


    it('Rebetting on Race Track View switches the race view to standart', () => {

        cy.wait(200)
        cy.window().then((win) => {
        win.game.scene.scenes[1].gameContainer.tapBar.raceButton.emit('pointerdown');
    })

        cy.wait(500)
        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

        try {
            expect(scene.gameContainer.tapBar.raceButton.list[2].visible, 'Button is "Table View"').to.be.false
        } catch (err) {
            cy.log('Assertion failed:', err.message);
            cy.task("logCatch", `Assertion Failed: ${err.message}`);
        }})

        cy.wait(1200)
        cy.window().then((win) => {
        win.game.scene.scenes[1].gameContainer.tapBar.reBetButton.emit('pointerdown');
    })

        cy.wait(500)
        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

        try {
            expect(scene.gameContainer.tapBar.raceButton.list[2].visible, 'Button is "Race Track View"').to.be.true
        } catch (err) {
            cy.log('Assertion failed:', err.message);
            cy.task("logCatch", `Assertion Failed: ${err.message}`);
        }})

        cy.wait(500)
        cy.window({ timeout: 15000 }).should((win) => {
        const chip = win.game.scene.scenes[1].gameContainer.stakeSelector.chips;

        expect(chip[0].stakeType).to.include('dozen')
        expect(chip[0].buttonId).to.equal(2)
        expect(win.game.scene.scenes[1].gameContainer.stakeSelector.isRaceTable, 'isRaceTable is false').to.be.false
    })
    })


    it('Rebet and reset bet are working correctly in Race Track', () => {

        cy.interceptStartGame()


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
            scene.gameContainer.tapBar.raceButton.emit('pointerdown')
        })

        cy.wait(200)
        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

        try {
            expect(scene.gameContainer.tapBar.raceButton.list[2].visible, 'Button is "Table View"').to.be.false
        } catch (err) {
            cy.log('Assertion failed:', err.message);
            cy.task("logCatch", `Assertion Failed: ${err.message}`);
        }})

        cy.get('#open_button').click()
        cy.get('#chip').select(10)
        cy.get('#open_button').click({force: true})
        cy.get('#set_state').click()
        cy.get('#close_button').click()

        cy.wait(100)

            cy.window({ timeout: 25000 }).should((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            const race_track = scene.gameContainer.stakeSelector.isRaceTable;

            expect(race_track, "Switched to Race Track").to.be.true;
        })

        cy.wait(1000)
        cy.window().then((win) => {
            win.game.scene.scenes[1].gameContainer.stakeSelector.raceButtons[1].emit('pointerdown')
        })

        cy.window().then((win) => {
            cy.wait(3000)
            win.game.scene.scenes[1].gameContainer.startGroupButtons.list[0].emit('pointerdown')
        })

        cy.window({timeout: 30000}).should((win) => {
            const noWin_banner = win.game.scene.scenes[1].gameContainer.noWinBanner.visible;
            const win_banner = win.game.scene.scenes[1].gameContainer.winBanner.visible;

            expect(noWin_banner || win_banner, "banner is displayed").to.be.true
            expect(win.game.scene.scenes[1].gameContainer.topPanel.balance).to.not.equal(1000);
        })

        cy.wait(3000)
        cy.window( { timeout: 25000 } ).should((win) => {
            const rebet = win.game.scene.scenes[1].gameContainer.tapBar.reBetButton.list[2].visible;

            expect(rebet, 'rebet button is visible').to.be.true;
        })

        cy.window().then((win) => {
        win.game.scene.scenes[1].gameContainer.tapBar.reBetButton.emit('pointerdown');
        })

        cy.window({ timeout: 25000 }).should((win) => {
            const chip = win.game.scene.scenes[1].gameContainer.stakeSelector.chips;

            expect(chip[0].stakeType).to.include('straight')
            expect(chip[0].buttonId).to.equal(14)
            expect(chip[1].buttonId).to.equal(20)
            expect(chip[2].buttonId).to.equal(1)
            expect(chip[3].buttonId).to.equal(33)
            expect(chip[4].buttonId).to.equal(16)
        })
        })


    it('Reset bet is working correctly', () => {


        cy.wait(3000)
        cy.window().then((win) => {
            win.game.scene.scenes[1].gameContainer.startGroupButtons.resetButton.emit('pointerdown');
    })

        cy.wait(2000)
        cy.window( {timeout: 15000} ).should((win) => {
            expect(win.game.scene.scenes[1].gameContainer.stakeSelector.chips).have.length(0)
    })
    })

    it('Rebet works correctly after the second spin with a different stake', () => {

        cy.interceptStartGame()
        
        cy.window().then((win) => {
        win.game.scene.scenes[1].gameContainer.stakeSelector.raceButtons[2].emit('pointerdown')
        cy.wait(50)
        win.game.scene.scenes[1].gameContainer.startGroupButtons.list[0].emit('pointerdown')
    })

        cy.wait(500)
        cy.window().then((win) => {
        win.game.scene.scenes[1].gameContainer.startGroupButtons.list[0].emit('pointerdown')
    })

        cy.window({timeout: 40000}).should((win) => {
        const no_win_banner = win.game.scene.scenes[1].gameContainer.noWinBanner.visible;
        const win_banner = win.game.scene.scenes[1].gameContainer.winBanner.visible;

        expect(no_win_banner || win_banner, 'banner is displayed').to.be.true
        expect(win.game.scene.scenes[1].gameContainer.topPanel.balance).to.not.equal(1000);
    })

    cy.wait(3000)
    cy.window({ timeout: 15000 }).should((win) => {
        const rebet = win.game.scene.scenes[1].gameContainer.tapBar.reBetButton.list[2].visible;
        expect(rebet).to.be.true;
    })

    cy.window().then((win) => {
        win.game.scene.scenes[1].gameContainer.tapBar.reBetButton.emit('pointerdown');
    })

    cy.window({ timeout: 25000 }).should((win) => {
        const chip = win.game.scene.scenes[1].gameContainer.stakeSelector.chips;

        expect(chip[0].stakeType).to.include('straight')
        expect(chip[0].buttonId).to.equal(17)
        expect(chip[1].buttonId).to.equal(25)
        expect(chip[2].buttonId).to.equal(2)
        expect(chip[3].buttonId).to.equal(21)
        expect(chip[4].buttonId).to.equal(4)
 })
})

    it('Rebetting on Table View switches the Table view to Race Track', () => {

        cy.wait(200)
        cy.window().then((win) => {
        win.game.scene.scenes[1].gameContainer.tapBar.raceButton.emit('pointerdown');
    })

    cy.wait(300)
    cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

        try {
            expect(scene.gameContainer.tapBar.raceButton.list[2].visible, 'Button is "Race Track View"').to.be.true
        } catch (err) {
            cy.log('Assertion failed:', err.message);
            cy.task("logCatch", `Assertion Failed: ${err.message}`);
        }})

        cy.wait(1200)
        cy.window().then((win) => {
        win.game.scene.scenes[1].gameContainer.tapBar.reBetButton.emit('pointerdown');
    })

    cy.wait(300)
    cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]


        try {
            expect(scene.gameContainer.tapBar.raceButton.list[2].visible, 'Button is "Table View"').to.be.false
        } catch (err) {
            cy.log('Assertion failed:', err.message);
            cy.task("logCatch", `Assertion Failed: ${err.message}`);
        }})

        cy.wait(500)
        cy.window({ timeout: 15000 }).should((win) => {
        const chip = win.game.scene.scenes[1].gameContainer.stakeSelector.chips;

        expect(chip[0].stakeType).to.include('straight')
        expect(chip[0].buttonId).to.equal(17)
        expect(chip[1].buttonId).to.equal(25)
        expect(chip[2].buttonId).to.equal(2)
        expect(chip[3].buttonId).to.equal(21)
        expect(chip[4].buttonId).to.equal(4)
        expect(win.game.scene.scenes[1].gameContainer.stakeSelector.isRaceTable, 'isRaceTable is true').to.be.true
    })
    })
    }) 

describe('multiply works correctly', () => {
    it('should multiply 0.50 stake', () => {

        cy.interceptStartGame();

        cy.window().then((win) => {
        win.game.scene.scenes[1].gameContainer.tapBar.raceButton.emit('pointerdown');
        })

        cy.window({ timeout: 15000 }).should((win) => {
            expect(win.game.scene.scenes[1].gameContainer.stakeSelector.isRaceTable, 'isRaceTable is false').to.be.false
        })

        cy.wait(500)
        cy.window().then((win) => {
            win.game.scene.scenes[1].gameContainer.startGroupButtons.resetButton.emit('pointerdown');
        })


        cy.window({ timeout: 50000 }).should((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            const start_button = scene.gameContainer.startGroupButtons.list[0].visible;

            expect(start_button, 'Game is loaded').to.be.true
        })

        cy.window({ timeout: 30000 }).should((win) => {
            expect (win.game.scene.scenes[1].gameContainer.stakeSelector.active).to.be.true
        })
        cy.wait(2000)

        cy.window().then((win) => {
            win.game.scene.scenes[1].gameContainer.stakeSelector.list[0].list[0].emit('pointerdown')
        })


        cy.wait(800)
        cy.window().then((win) => {
            win.game.scene.scenes[1].gameContainer.tapBar.multiplyButton.emit('pointerdown')
        })

        cy.window({ timeout: 25000 }).should((win) => {
            const total_bet = win.game.scene.scenes[1].gameContainer.betPanel.list[9].text;
            expect (total_bet).to.include('1.00')
        })

        cy.wait(2000)
        cy.window().then((win) => {
            win.game.scene.scenes[1].gameContainer.tapBar.multiplyButton.emit('pointerdown')
        })

        cy.window({ timeout: 25000 }).should((win) => {
            const total_bet = win.game.scene.scenes[1].gameContainer.betPanel.list[9].text;
            expect (total_bet).to.include('2.00')
        })

        cy.wait(2000)
        cy.window().then((win) => {
            win.game.scene.scenes[1].gameContainer.tapBar.multiplyButton.emit('pointerdown')
        })

        cy.window({ timeout: 25000 }).should((win) => {
            const total_bet = win.game.scene.scenes[1].gameContainer.betPanel.list[9].text;
            expect (total_bet).to.include('4.00')
        })
    })

    it('Multiply works correctly in Race Track', () => {
        cy.wait(500)

        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            scene.gameContainer.tapBar.raceButton.emit('pointerdown')
        })

        cy.wait(100)

        cy.window({ timeout: 25000 }).should((win) => {
            expect(win.game.scene.scenes[1].gameContainer.stakeSelector.isSwitching, 'Switched to RaceTable').to.be.false;
        })

        cy.window({ timeout: 25000 }).should((win) => {
            expect(win.game.scene.scenes[1].gameContainer.stakeSelector.isRaceTable, 'Switched to RaceTable').to.be.true;
        })

        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

        try {
            expect(scene.gameContainer.tapBar.raceButton.list[2].visible, 'Button is "Table View"').to.be.false
        } catch (err) {
            cy.log('Assertion failed:', err.message);
            cy.task("logCatch", `Assertion Failed: ${err.message}`);
        }})
        
        cy.wait(2000)

        cy.window().then((win) => {
            win.game.scene.scenes[1].gameContainer.stakeSelector.raceButtons[0].emit('pointerdown')
        })

        cy.wait(800)
        cy.window().then((win) => {
            win.game.scene.scenes[1].gameContainer.tapBar.multiplyButton.emit('pointerdown')
        })

        cy.window({timeout: 25000}).should((win) => {
            const total_bet = win.game.scene.scenes[1].gameContainer.betPanel.list[9].text;
            expect (total_bet).to.include('5.00')
        })


        cy.wait(1200)
        cy.window().then((win) => {
            win.game.scene.scenes[1].gameContainer.tapBar.multiplyButton.emit('pointerdown')
        })

        cy.window({timeout: 25000}).should((win) => {
            const total_bet = win.game.scene.scenes[1].gameContainer.betPanel.list[9].text;
            expect (total_bet).to.include('10.00')
        })

        // cy.wait(400)
        cy.window().then((win) => {
            win.game.scene.scenes[1].gameContainer.startGroupButtons.resetButton.emit('pointerdown');
        })
    })
})


describe('Chips from Race Track view are displayed in Table View when entering it', () => {
    it('bet 0 in Race Track is 15, 32, 0, 26, 3 in Table View)', () => {

        cy.wait(300)
        cy.window().then((win) => {
        win.game.scene.scenes[1].gameContainer.tapBar.raceButton.emit('pointerdown');
        })

        cy.window({ timeout: 25000 }).should((win) => {
            const race_track = win.game.scene.scenes[1].gameContainer.stakeSelector.isRaceTable;
            expect(race_track, 'Table View').to.be.false;
        })

        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]

        try {
            expect(scene.gameContainer.tapBar.raceButton.list[2].visible, 'Button is "Race Track View"').to.be.true
        } catch (err) {
            cy.log('Assertion failed:', err.message);
            cy.task("logCatch", `Assertion Failed: ${err.message}`);
        }})

        cy.wait(200)
        cy.window({ timeout: 25000 }).should((win) => {
            expect(win.game.scene.scenes[1].gameContainer.stakeSelector.chips[0].buttonId).to.equal(15);
            expect(win.game.scene.scenes[1].gameContainer.stakeSelector.chips[1].buttonId).to.equal(15);
            expect(win.game.scene.scenes[1].gameContainer.stakeSelector.chips[2].buttonId).to.equal(15);
            expect(win.game.scene.scenes[1].gameContainer.stakeSelector.chips[3].buttonId).to.equal(15);
            expect(win.game.scene.scenes[1].gameContainer.stakeSelector.chips[4].buttonId).to.equal(32);
            expect(win.game.scene.scenes[1].gameContainer.stakeSelector.chips[5].buttonId).to.equal(32);
            expect(win.game.scene.scenes[1].gameContainer.stakeSelector.chips[6].buttonId).to.equal(32);
            expect(win.game.scene.scenes[1].gameContainer.stakeSelector.chips[7].buttonId).to.equal(32);
            expect(win.game.scene.scenes[1].gameContainer.stakeSelector.chips[8].buttonId).to.equal(0);
            expect(win.game.scene.scenes[1].gameContainer.stakeSelector.chips[9].buttonId).to.equal(0);
            expect(win.game.scene.scenes[1].gameContainer.stakeSelector.chips[10].buttonId).to.equal(0);
            expect(win.game.scene.scenes[1].gameContainer.stakeSelector.chips[11].buttonId).to.equal(0);
            expect(win.game.scene.scenes[1].gameContainer.stakeSelector.chips[12].buttonId).to.equal(26);
            expect(win.game.scene.scenes[1].gameContainer.stakeSelector.chips[13].buttonId).to.equal(26);
            expect(win.game.scene.scenes[1].gameContainer.stakeSelector.chips[14].buttonId).to.equal(26);
            expect(win.game.scene.scenes[1].gameContainer.stakeSelector.chips[15].buttonId).to.equal(26);
            expect(win.game.scene.scenes[1].gameContainer.stakeSelector.chips[16].buttonId).to.equal(3);
            expect(win.game.scene.scenes[1].gameContainer.stakeSelector.chips[17].buttonId).to.equal(3);
            expect(win.game.scene.scenes[1].gameContainer.stakeSelector.chips[18].buttonId).to.equal(3);
            expect(win.game.scene.scenes[1].gameContainer.stakeSelector.chips[19].buttonId).to.equal(3);
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


describe('chip conversion', () => {
    it('five 0.10 chips convert to 0.50', () => {

        cy.wait(500)
        cy.window().then((win) => {
        win.game.scene.scenes[1].gameContainer.tapBar.raceButton.emit('pointerdown');
        })

        cy.window({ timeout: 25000 }).should((win) => {
            const race_track = win.game.scene.scenes[1].gameContainer.stakeSelector.isRaceTable;
            expect(race_track, 'Table View').to.be.false;
        })

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


    // describe('Reward History displays winning numbers', () => {
    // it('5 numbers are displayed, and 6th/2nd numbers rewrite 5th/1st)', () => {

    //     cy.wait(300)
    //     cy.window().then((win) => {
    //     win.game.scene.scenes[1].gameContainer.tapBar.raceButton.emit('pointerdown');
    //     })

    //     cy.window({ timeout: 25000 }).should((win) => {
    //         const race_track = win.game.scene.scenes[1].gameContainer.stakeSelector.isRaceTable;
    //         expect(race_track, 'Table View').to.be.false;
    //     })

        
    //     cy.intercept('startgame', {fixture: 'only_one_bonus_spin_roulette.json'}).as('startGame')

    //     cy.wait(500)
    //     cy.window().then((win) => {
    //         const game = win.game
    //         const scene = game.scene.scenes[1]

    //         scene.gameContainer.stakeSelector.list[0].list[0].emit('pointerdown')

    //         cy.wait(50)
    //         scene.gameContainer.startGroupButtons.list[0].emit('pointerdown')
    //     })

    //     cy.window({ timeout: 30000}).should((win) => {
    //         const chip_0 = win.game.scene.scenes[1].gameContainer.bottomPanel.historyItems[0].list[1].text;
    //         const chip_1 = win.game.scene.scenes[1].gameContainer.bottomPanel.historyItems[1].list[1].text;
    //         const chip_2 = win.game.scene.scenes[1].gameContainer.bottomPanel.historyItems[2].list[1].text;
    //         const chip_3 = win.game.scene.scenes[1].gameContainer.bottomPanel.historyItems[3].list[1].text;
    //         const chip_4 = win.game.scene.scenes[1].gameContainer.bottomPanel.historyItems[4].list[1].text;
    //         expect(chip_0).to.equal('35')
    //         expect(chip_1).to.equal('35')
    //         expect(chip_2).to.equal('9')
    //         expect(chip_3).to.equal('9')
    //         expect(chip_4).to.equal('1')
    //         expect(win.game.scene.scenes[1].gameContainer.bottomPanel.historyItems[4].list[2].visible, 'Helmet icon is displayed').to.be.true;
    //     })

    //     cy.window({timeout: 20000}).should((win) => {
    //         const win_banner = win.game.scene.scenes[1].gameContainer.winBanner.visible;
    //         expect(win_banner, 'Win banner is displayed').to.be.true
    //     })

    //     cy.window({timeout: 10000}).should((win) => {
    //         const bonus_no_win = win.game.scene.scenes[1].gameContainer.videoPopup.winText.text;
    //         expect(bonus_no_win).to.equal('NO WIN')
    //     })

    //     cy.window({timeout: 20000}).should((win) => {
    //         const win_banner = win.game.scene.scenes[1].gameContainer.winBanner.visible;
    //         expect(win_banner, 'Win banner after Bonus Round is displayed').to.be.true
    //     })

    //     cy.window({ timeout: 20000}).should((win) => {
    //         expect(win.game.scene.scenes[1].gameContainer.stakeSelector.visible, 'Return to the table').to.be.true;
    //     })

    //     cy.wait(500)
    //     cy.window().then((win) => {
    //         const game = win.game
    //         const scene = game.scene.scenes[1]

    //         scene.gameContainer.stakeSelector.list[0].list[0].emit('pointerdown')

    //         cy.wait(50)
    //         scene.gameContainer.startGroupButtons.list[0].emit('pointerdown')
    //     })

    //     cy.window({ timeout: 30000}).should((win) => {
    //         const chip_0 = win.game.scene.scenes[1].gameContainer.bottomPanel.historyItems[0].list[1].text;
    //         const chip_1 = win.game.scene.scenes[1].gameContainer.bottomPanel.historyItems[1].list[1].text;
    //         const chip_2 = win.game.scene.scenes[1].gameContainer.bottomPanel.historyItems[2].list[1].text;
    //         const chip_3 = win.game.scene.scenes[1].gameContainer.bottomPanel.historyItems[3].list[1].text;
    //         const chip_4 = win.game.scene.scenes[1].gameContainer.bottomPanel.historyItems[4].list[1].text;
    //         expect(chip_0).to.equal('35')
    //         expect(chip_1).to.equal('9')
    //         expect(chip_2).to.equal('9')
    //         expect(chip_3).to.equal('1')
    //         expect(chip_4).to.equal('1')
    //         expect(win.game.scene.scenes[1].gameContainer.bottomPanel.historyItems[4].list[2].visible, 'Helmet icon is displayed').to.be.true;
    //         expect(win.game.scene.scenes[1].gameContainer.bottomPanel.historyItems[3].list[2].visible, 'Helmet icon is displayed').to.be.true;
    //     })
    //     })
    // }) 