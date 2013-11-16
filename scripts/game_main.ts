///<reference path="../lib/phaser.d.ts"/>
///<reference path="./game_scene.ts"/>

import PhaserModule = Phaser;

var initialState: Overtop.GameScene;
initialState = new Overtop.GameScene();

var game = new Phaser.Game(640, 480, Phaser.AUTO, 'gamearea', initialState, false, false);