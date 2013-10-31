///<reference path="../lib/phaser.d.ts"/>


import PhaserModule = Phaser;

var logo;

var state = new PhaserModule.State();

state.preload = preload;
state.create = create;
state.update = update;

var game = new Phaser.Game(640, 480, Phaser.AUTO, 'gamearea', state, false, false);

function preload () {
    game.load.image('test', 'assets/sprites/test.png');
}

function create() {

	logo = game.add.sprite(game.world.centerX, game.world.centerY, 'test');
	logo.anchor.x = 0.5;
	logo.anchor.y = 0.5;

}

function update () {

}