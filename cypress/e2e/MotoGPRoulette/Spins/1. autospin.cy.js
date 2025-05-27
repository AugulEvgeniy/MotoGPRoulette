describe('Autospin is played without issues', () => {
    it('Should check that the game is loaded and autospin is triggered', () => {

        cy.visitTestEnvironment();
        cy.interceptStartGame();


        cy.window({ timeout: 60000 }).should((win) => {
            const start_button = win.game.scene.scenes[1].gameContainer.list[5].list[0].visible;
            expect(start_button, 'Game is loaded').to.be.true
        })


        cy.window().should((win) => {
            const chip = win.game.scene.scenes[1].gameContainer.list[7].activeButton.layout.name;
            expect(chip).to.include("chip_1")
        })

        cy.window().then((win) => {
            win.game.scene.scenes[1].gameContainer.stakeSelector.dozensButtons[1].list[0].emit('pointerdown')
            cy.wait(50)
            win.game.scene.scenes[1].gameContainer.startGroupButtons.autoplayButton.emit('pointerdown')
        })

        cy.wait(500)

        cy.window().then((win) => {
            win.game.scene.scenes[1].gameContainer.autoplaySpinsSelect.list[2].list[0].emit('pointerdown')
        })

        cy.window().then((win) => {
            win.game.scene.scenes[1].gameContainer.autoplaySpinsSelect.list[7].list[0].emit('pointerdown')
        })
    })
})

        // 10
describe('1st spin', () => {
    it('Should check that spin counter updates correctly, and autospin stops after all spins', () => {

        cy.interceptStartGame();
        cy.wait('@startGame', { timeout: 30000}).its('response.body').then((body) => {
            try {
                expect(body.gameResult.stakePence).to.equal(50);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }   
        })

        cy.wait(150)
        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.roulette.list[2].list[2].text, 'Spin count is 9').to.equal('9');
                expect(win.game.scene.scenes[1].gameContainer.roulette.list[1].visible, 'Stop auto button is visible').to.be.true;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }   
        })

        cy.window({timeout: 20000}).should((win) => {
            const table = win.game.scene.scenes[1].gameContainer.stakeSelector.visible;
            expect(table, 'The game returns to the table').to.be.true
        })

        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.reBetButton.active, 'Rebet button is disabled').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                const auto_button = win.game.scene.scenes[1].gameContainer.startGroupButtons.list[1].list[3].text
                expect(auto_button, 'Spin count is 9').to.equal('9')
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.raceButton.active, 'RaceButton button is disabled').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.multiplyButton.active, 'Multiply button is disabled').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.startGroupButtons.startButton.active, 'Spin button is disabled').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.startGroupButtons.resetButton.active, 'Reset button is disabled').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }
        })
    })
})

describe('2nd spin', () => {
    it('Should check that spin counter updates correctly, and autospin stops after all spins', () => {
        // 9
        cy.interceptStartGame();
        cy.wait('@startGame', { timeout: 30000}).its('response.body').then((body) => {
            try {
                expect(body.gameResult.stakePence).to.equal(50);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }   
        })

        cy.wait(150)
        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.roulette.list[2].list[2].text, 'Spin count is 8').to.equal('8');
                expect(win.game.scene.scenes[1].gameContainer.roulette.list[1].visible, 'Stop auto button is visible').to.be.true;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }   
        })

        cy.window({timeout: 20000}).should((win) => {
            const table = win.game.scene.scenes[1].gameContainer.stakeSelector.visible;
            expect(table, 'The game returns to the table').to.be.true
        })

        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.reBetButton.active, 'Rebet button is disabled').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                const auto_button = win.game.scene.scenes[1].gameContainer.startGroupButtons.list[1].list[3].text
                expect(auto_button, 'Spin count is 8').to.equal('8')
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.raceButton.active, 'RaceButton button is disabled').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.multiplyButton.active, 'Multiply button is disabled').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.startGroupButtons.startButton.active, 'Spin button is disabled').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.startGroupButtons.resetButton.active, 'Reset button is disabled').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

        })
    })
})

describe('3rd spin', () => {
    it('Should check that spin counter updates correctly, and autospin stops after all spins', () => {

        // 8
        cy.interceptStartGame();
        cy.wait('@startGame', { timeout: 30000}).its('response.body').then((body) => {
            try {
                expect(body.gameResult.stakePence).to.equal(50);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }   
        })

        cy.wait(150)
        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.roulette.list[2].list[2].text, 'Spin count is 7').to.equal('7');
                expect(win.game.scene.scenes[1].gameContainer.roulette.list[1].visible, 'Stop auto button is visible').to.be.true;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }   
        })

        cy.window({timeout: 20000}).should((win) => {
            const table = win.game.scene.scenes[1].gameContainer.stakeSelector.visible;
            expect(table, 'The game returns to the table').to.be.true
        })

        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.reBetButton.active, 'Rebet button is disabled').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                const auto_button = win.game.scene.scenes[1].gameContainer.startGroupButtons.list[1].list[3].text
                expect(auto_button, 'Spin count is 7').to.equal('7')
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.raceButton.active, 'RaceButton button is disabled').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.multiplyButton.active, 'Multiply button is disabled').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.startGroupButtons.startButton.active, 'Spin button is disabled').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.startGroupButtons.resetButton.active, 'Reset button is disabled').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }
        })
    })
})

describe('4th spin', () => {
    it('Should check that spin counter updates correctly, and autospin stops after all spins', () => {

        // 7
        cy.interceptStartGame();
        cy.wait('@startGame', { timeout: 30000}).its('response.body').then((body) => {
            try {
                expect(body.gameResult.stakePence).to.equal(50);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }   
        })

        cy.wait(150)
        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.roulette.list[2].list[2].text, 'Spin count is 6').to.equal('6');
                expect(win.game.scene.scenes[1].gameContainer.roulette.list[1].visible, 'Stop auto button is visible').to.be.true;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }   
        })

        cy.window({timeout: 20000}).should((win) => {
            const table = win.game.scene.scenes[1].gameContainer.stakeSelector.visible;
            expect(table, 'The game returns to the table').to.be.true
        })

        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.reBetButton.active, 'Rebet button is disabled').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                const auto_button = win.game.scene.scenes[1].gameContainer.startGroupButtons.list[1].list[3].text
                expect(auto_button, 'Spin count is 6').to.equal('6')
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.raceButton.active, 'RaceButton button is disabled').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.multiplyButton.active, 'Multiply button is disabled').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.startGroupButtons.startButton.active, 'Spin button is disabled').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.startGroupButtons.resetButton.active, 'Reset button is disabled').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

        })
    })
})


describe('5th spin', () => {
    it('Should check that spin counter updates correctly, and autospin stops after all spins', () => {
        // 6
        cy.interceptStartGame();
        cy.wait('@startGame', { timeout: 30000}).its('response.body').then((body) => {
            try {
                expect(body.gameResult.stakePence).to.equal(50);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }   
        })

        cy.wait(150)
        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.roulette.list[2].list[2].text, 'Spin count is 5').to.equal('5');
                expect(win.game.scene.scenes[1].gameContainer.roulette.list[1].visible, 'Stop auto button is visible').to.be.true;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }   
        })

        cy.window({timeout: 20000}).should((win) => {
            const table = win.game.scene.scenes[1].gameContainer.stakeSelector.visible;
            expect(table, 'The game returns to the table').to.be.true
        })

        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.reBetButton.active, 'Rebet button is disabled').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                const auto_button = win.game.scene.scenes[1].gameContainer.startGroupButtons.list[1].list[3].text
                expect(auto_button, 'Spin count is 5').to.equal('5')
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.raceButton.active, 'RaceButton button is disabled').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.multiplyButton.active, 'Multiply button is disabled').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.startGroupButtons.startButton.active, 'Spin button is disabled').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.startGroupButtons.resetButton.active, 'Reset button is disabled').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }
        })
    })
})


describe('6th spin', () => {
    it('Should check that spin counter updates correctly, and autospin stops after all spins', () => {
        // 5
        cy.interceptStartGame();
        cy.wait('@startGame', { timeout: 30000}).its('response.body').then((body) => {
            try {
                expect(body.gameResult.stakePence).to.equal(50);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }   
        })

        cy.wait(150)
        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.roulette.list[2].list[2].text, 'Spin count is 4').to.equal('4');
                expect(win.game.scene.scenes[1].gameContainer.roulette.list[1].visible, 'Stop auto button is visible').to.be.true;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }   
        })

        cy.window({timeout: 20000}).should((win) => {
            const table = win.game.scene.scenes[1].gameContainer.stakeSelector.visible;
            expect(table, 'The game returns to the table').to.be.true
        })

        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.reBetButton.active, 'Rebet button is disabled').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                const auto_button = win.game.scene.scenes[1].gameContainer.startGroupButtons.list[1].list[3].text
                expect(auto_button, 'Spin count is 4').to.equal('4')
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.raceButton.active, 'RaceButton button is disabled').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.multiplyButton.active, 'Multiply button is disabled').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.startGroupButtons.startButton.active, 'Spin button is disabled').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.startGroupButtons.resetButton.active, 'Reset button is disabled').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }
        })
    })
})

describe('7th spin', () => {
    it('Should check that spin counter updates correctly, and autospin stops after all spins', () => {

        // 4
        cy.interceptStartGame();
        cy.wait('@startGame', { timeout: 30000}).its('response.body').then((body) => {
            try {
                expect(body.gameResult.stakePence).to.equal(50);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }   
        })

        cy.wait(150)
        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.roulette.list[2].list[2].text, 'Spin count is 3').to.equal('3');
                expect(win.game.scene.scenes[1].gameContainer.roulette.list[1].visible, 'Stop auto button is visible').to.be.true;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }   
        })

        cy.window({timeout: 20000}).should((win) => {
            const table = win.game.scene.scenes[1].gameContainer.stakeSelector.visible;
            expect(table, 'The game returns to the table').to.be.true
        })

        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.reBetButton.active, 'Rebet button is disabled').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                const auto_button = win.game.scene.scenes[1].gameContainer.startGroupButtons.list[1].list[3].text
                expect(auto_button, 'Spin count is 3').to.equal('3')
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.raceButton.active, 'RaceButton button is disabled').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.multiplyButton.active, 'Multiply button is disabled').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.startGroupButtons.startButton.active, 'Spin button is disabled').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.startGroupButtons.resetButton.active, 'Reset button is disabled').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

        })
    })
})

describe('8th spin', () => {
    it('Should check that spin counter updates correctly, and autospin stops after all spins', () => {

        // 3
        cy.interceptStartGame();
        cy.wait('@startGame', { timeout: 30000}).its('response.body').then((body) => {
            try {
                expect(body.gameResult.stakePence).to.equal(50);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }   
        })

        cy.wait(150)
        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.roulette.list[2].list[2].text, 'Spin count is 2').to.equal('2');
                expect(win.game.scene.scenes[1].gameContainer.roulette.list[1].visible, 'Stop auto button is visible').to.be.true;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }   
        })

        cy.window({timeout: 20000}).should((win) => {
            const table = win.game.scene.scenes[1].gameContainer.stakeSelector.visible;
            expect(table, 'The game returns to the table').to.be.true
        })

        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.reBetButton.active, 'Rebet button is disabled').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                const auto_button = win.game.scene.scenes[1].gameContainer.startGroupButtons.list[1].list[3].text
                expect(auto_button, 'Spin count is 2').to.equal('2')
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.raceButton.active, 'RaceButton button is disabled').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.multiplyButton.active, 'Multiply button is disabled').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.startGroupButtons.startButton.active, 'Spin button is disabled').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.startGroupButtons.resetButton.active, 'Reset button is disabled').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }
        })
    })
})

describe('9th spin', () => {
    it('Should check that spin counter updates correctly, and autospin stops after all spins', () => {
        // 2
        cy.interceptStartGame();
        cy.wait('@startGame', { timeout: 30000}).its('response.body').then((body) => {
            try {
                expect(body.gameResult.stakePence).to.equal(50);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }   
        })

        cy.wait(150)
        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.roulette.list[2].list[2].text, 'Spin count is 1').to.equal('1');
                expect(win.game.scene.scenes[1].gameContainer.roulette.list[1].visible, 'Stop auto button is visible').to.be.true;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }   
        })

        cy.window({timeout: 20000}).should((win) => {
            const table = win.game.scene.scenes[1].gameContainer.stakeSelector.visible;
            expect(table, 'The game returns to the table').to.be.true
        })

        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.reBetButton.active, 'Rebet button is disabled').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                const auto_button = win.game.scene.scenes[1].gameContainer.startGroupButtons.list[1].list[3].text
                expect(auto_button, 'Spin count is 1').to.equal('1')
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.raceButton.active, 'RaceButton button is disabled').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.multiplyButton.active, 'Multiply button is disabled').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.startGroupButtons.startButton.active, 'Spin button is disabled').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.startGroupButtons.resetButton.active, 'Reset button is disabled').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }
        })
    })
})

describe('10th spin', () => {
    it('Should check that spin counter updates correctly, and autospin stops after all spins', () => {
        // 1
        cy.interceptStartGame();
        cy.wait('@startGame', { timeout: 30000}).its('response.body').then((body) => {
            try {
                expect(body.gameResult.stakePence).to.equal(50);
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }   
        })

        cy.wait(150)
        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.roulette.list[2].list[2].text, 'Spin count is 0').to.equal('0');
                expect(win.game.scene.scenes[1].gameContainer.roulette.list[1].visible, 'Stop auto button is visible').to.be.true;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }   
        })

        cy.window({timeout: 20000}).should((win) => {
            const table = win.game.scene.scenes[1].gameContainer.stakeSelector.visible;
            expect(table, 'The game returns to the table').to.be.true
        })

        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.reBetButton.active, 'Rebet button is disabled').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                const auto_button = win.game.scene.scenes[1].gameContainer.startGroupButtons.list[1].list[3].text
                expect(auto_button, 'Spin count is 0').to.equal('0')
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.raceButton.active, 'RaceButton button is disabled').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.multiplyButton.active, 'Multiply button is disabled').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.startGroupButtons.startButton.active, 'Spin button is disabled').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.startGroupButtons.resetButton.active, 'Reset button is disabled').to.be.false;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }
        })
    })
})

describe('The game works correctly after autospin', () => {
    it('Should check that the buttins are active', () => {


        cy.window({timeout: 20000}).should((win) => {
            const table = win.game.scene.scenes[1].gameContainer.stakeSelector.visible;
            expect(table, 'The game returns to the table').to.be.true
        })

        cy.window().then((win) => {
            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.reBetButton.active, 'Rebet button is active').to.be.true;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                const auto_button = win.game.scene.scenes[1].gameContainer.startGroupButtons.autoplayButton.list[5].text
                expect(auto_button, 'Stop auto button is no longer displayed').to.equal('AUTO SPIN')
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }

            try {
                expect(win.game.scene.scenes[1].gameContainer.tapBar.raceButton.active, 'RaceButton button is active').to.be.true;
            } catch (err) {
                cy.log('Assertion failed:', err.message);
            }
        })

        cy.wait(1000)
        cy.window().then((win) => {
            win.game.scene.scenes[1].gameContainer.list[7].list[1].list[0].emit('pointerdown')
        })

        cy.window().should((win) => {
            const chip = win.game.scene.scenes[1].gameContainer.list[7].activeButton.layout.name;
            expect(chip).to.include("chip_0")
        })
        // to check that the game functions after the spin

        })
    }) 

