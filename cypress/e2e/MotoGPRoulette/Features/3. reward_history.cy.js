describe('Reward History displays winning numbers', () => {
    it('Should check that 5 numbers are displayed, and 6th/2nd numbers rewrite 5th/1st)', () => {

        cy.visitTestEnvironment()

        cy.window({ timeout: 50000 }).should((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            const start_button = scene.gameContainer.list[5].list[0].visible;

            expect(start_button, 'Game is loaded').to.be.true
        })

        cy.window().should((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            const chip = scene.gameContainer.list[7].activeButton.layout.name;

            expect(chip).to.include("chip_1")
        })

        const stakesArray = [];

        cy.intercept('startgame', (req) => {
        req.continue((res) => {
            const stakes = res.body.integrationResultData.winNumber;
            stakesArray.push(stakes);
        });
        }).as('startGame');

        cy.window().then((win) => {
        const game = win.game;
        const scene = game.scene.scenes[1];
        scene.gameContainer.stakeSelector.dozensButtons[1].list[0].emit('pointerdown');
        cy.wait(50);
        scene.gameContainer.list[5].list[0].emit('pointerdown');
        });


        cy.wait('@startGame', { timeout: 25000 }).then(() => {
        cy.window({timeout: 15000}).should((win) => {
            const chip = win.game.scene.scenes[1].gameContainer.bottomPanel.historyItems[0].list[1].text;
            expect(chip).to.deep.equal(JSON.stringify(stakesArray[0]));
        });
        });

        cy.window().then((win) => {
            if (win.game.scene.scenes[1].gameContainer.winBanner.visible === true) {
            cy.wait(3000)
            }
            else {
            cy.wait(500)
            }
        })

        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            scene.gameContainer.stakeSelector.dozensButtons[1].list[0].emit('pointerdown')
            cy.wait(50)
            scene.gameContainer.list[5].list[0].emit('pointerdown')
        })
        

        cy.wait('@startGame', { timeout: 25000 }).then(() => {
        cy.window({timeout: 15000}).should((win) => {
            const chip = win.game.scene.scenes[1].gameContainer.bottomPanel.historyItems[0].list[1].text;
            const chip_1 = win.game.scene.scenes[1].gameContainer.bottomPanel.historyItems[1].list[1].text;
            expect(chip).to.deep.equal(JSON.stringify(stakesArray[0]));
            expect(chip_1).to.deep.equal(JSON.stringify(stakesArray[1]));
        });
        });


        cy.window().then((win) => {
            if (win.game.scene.scenes[1].gameContainer.winBanner.visible === true) {
            cy.wait(3000)
            }
            else {
            cy.wait(500)
            }
        })

        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            scene.gameContainer.stakeSelector.dozensButtons[1].list[0].emit('pointerdown')
            cy.wait(50)
            scene.gameContainer.list[5].list[0].emit('pointerdown')
        })
        

        cy.wait('@startGame', { timeout: 25000 }).then(() => {
        cy.window({timeout: 15000}).should((win) => {
            const chip = win.game.scene.scenes[1].gameContainer.bottomPanel.historyItems[0].list[1].text;
            const chip_1 = win.game.scene.scenes[1].gameContainer.bottomPanel.historyItems[1].list[1].text;
            const chip_2 = win.game.scene.scenes[1].gameContainer.bottomPanel.historyItems[2].list[1].text;
            expect(chip).to.deep.equal(JSON.stringify(stakesArray[0]));
            expect(chip_1).to.deep.equal(JSON.stringify(stakesArray[1]));
            expect(chip_2).to.deep.equal(JSON.stringify(stakesArray[2]));
        });
        });

        cy.window().then((win) => {
            if (win.game.scene.scenes[1].gameContainer.winBanner.visible === true) {
            cy.wait(3000)
            }
            else {
            cy.wait(500)
            }
        })

        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            scene.gameContainer.stakeSelector.dozensButtons[1].list[0].emit('pointerdown')
            cy.wait(50)
            scene.gameContainer.list[5].list[0].emit('pointerdown')
        })
        

        cy.wait('@startGame', { timeout: 25000 }).then(() => {
        cy.window({timeout: 15000}).should((win) => {
            const chip = win.game.scene.scenes[1].gameContainer.bottomPanel.historyItems[0].list[1].text;
            const chip_1 = win.game.scene.scenes[1].gameContainer.bottomPanel.historyItems[1].list[1].text;
            const chip_2 = win.game.scene.scenes[1].gameContainer.bottomPanel.historyItems[2].list[1].text;
            const chip_3 = win.game.scene.scenes[1].gameContainer.bottomPanel.historyItems[3].list[1].text;
            expect(chip).to.deep.equal(JSON.stringify(stakesArray[0]));
            expect(chip_1).to.deep.equal(JSON.stringify(stakesArray[1]));
            expect(chip_2).to.deep.equal(JSON.stringify(stakesArray[2]));
            expect(chip_3).to.deep.equal(JSON.stringify(stakesArray[3]));
        });
        });

        cy.window().then((win) => {
            if (win.game.scene.scenes[1].gameContainer.winBanner.visible === true) {
            cy.wait(3000)
            }
            else {
            cy.wait(500)
            }
        })

        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            scene.gameContainer.stakeSelector.dozensButtons[1].list[0].emit('pointerdown')
            cy.wait(50)
            scene.gameContainer.list[5].list[0].emit('pointerdown')
        })
        

        cy.wait('@startGame', { timeout: 25000 }).then(() => {
        cy.window({timeout: 15000}).should((win) => {
            const chip = win.game.scene.scenes[1].gameContainer.bottomPanel.historyItems[0].list[1].text;
            const chip_1 = win.game.scene.scenes[1].gameContainer.bottomPanel.historyItems[1].list[1].text;
            const chip_2 = win.game.scene.scenes[1].gameContainer.bottomPanel.historyItems[2].list[1].text;
            const chip_3 = win.game.scene.scenes[1].gameContainer.bottomPanel.historyItems[3].list[1].text;
            const chip_4 = win.game.scene.scenes[1].gameContainer.bottomPanel.historyItems[4].list[1].text;
            expect(chip).to.deep.equal(JSON.stringify(stakesArray[0]));
            expect(chip_1).to.deep.equal(JSON.stringify(stakesArray[1]));
            expect(chip_2).to.deep.equal(JSON.stringify(stakesArray[2]));
            expect(chip_3).to.deep.equal(JSON.stringify(stakesArray[3]));
            expect(chip_4).to.deep.equal(JSON.stringify(stakesArray[4]));
        });
        });


        cy.window().then((win) => {
            if (win.game.scene.scenes[1].gameContainer.winBanner.visible === true) {
            cy.wait(3000)
            }
            else {
            cy.wait(500)
            }
        })

        cy.window().then((win) => {
            const game = win.game
            const scene = game.scene.scenes[1]
            scene.gameContainer.stakeSelector.dozensButtons[1].list[0].emit('pointerdown')
            cy.wait(50)
            scene.gameContainer.list[5].list[0].emit('pointerdown')
        })
        
        cy.wait('@startGame', { timeout: 25000 }).then(() => {
        cy.window({timeout: 15000}).should((win) => {
            const chip = win.game.scene.scenes[1].gameContainer.bottomPanel.historyItems[0].list[1].text;
            const chip_1 = win.game.scene.scenes[1].gameContainer.bottomPanel.historyItems[1].list[1].text;
            const chip_2 = win.game.scene.scenes[1].gameContainer.bottomPanel.historyItems[2].list[1].text;
            const chip_3 = win.game.scene.scenes[1].gameContainer.bottomPanel.historyItems[3].list[1].text;
            const chip_4 = win.game.scene.scenes[1].gameContainer.bottomPanel.historyItems[4].list[1].text;
            expect(chip).to.deep.equal(JSON.stringify(stakesArray[1]));
            expect(chip_1).to.deep.equal(JSON.stringify(stakesArray[2]));
            expect(chip_2).to.deep.equal(JSON.stringify(stakesArray[3]));
            expect(chip_3).to.deep.equal(JSON.stringify(stakesArray[4]));
            expect(chip_4).to.deep.equal(JSON.stringify(stakesArray[5]));
        });
        });


        })
    }) 

            