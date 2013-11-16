///<reference path="../lib/phaser.d.ts"/>
///<reference path="./game_stage.ts"/>

import PhaserModule = Phaser;

var initialState: Game.GameStage;
initialState = new Game.GameStage();

var game = new Phaser.Game(640, 480, Phaser.AUTO, 'gamearea', initialState, false, false);