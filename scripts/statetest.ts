///<reference path="../lib/phaser.d.ts"/>

import PhaserModule = Phaser;

var logo: Phaser.Sprite;

class TitleScreen extends PhaserModule.State
{
    logo: Phaser.Sprite;
    pressKey: Phaser.Sprite;
    lastTick: number;
    
    preload (): void
    {
        this.stage.backgroundColor = '#ffffff';
        game.load.image('logo', 'assets/pictures/radical_title.png');
        game.load.image('press', 'assets/pictures/press.png');
    }

    create(): void
    {
        this.logo = game.add.sprite(game.world.centerX,
                                    game.world.centerY, 'logo');
        this.logo.anchor.setTo(0.5, 1.0);
        this.logo.scale.setTo(1.0, 0.0);
        this.pressKey = game.add.sprite(game.world.centerX,
                                        game.world.centerY + 100,
                                        'press');
        this.pressKey.anchor.setTo(0.5, 0.5);
        this.pressKey.visible = false;
        var logoTween = game.add.tween(this.logo.scale).to(
            {y: 1.0},
            1800, // duration
            Phaser.Easing.Linear.None, // ease
            true, // autoStart
            200, // delay
            0, // repeat
            false // yoyo
            );
        this.lastTick = 0;
    }
    
    update(): void
    {
        if (this.logo.scale.y == 1.0) {
            var diff = game.time.now - this.lastTick;
            if (diff > 1250) {
                this.lastTick += diff - diff % 1250
            }
            if (this.pressKey.visible && diff >= 750) {
                this.pressKey.visible = false;
                this.lastTick += 750;
            } else if (!this.pressKey.visible && diff >= 500) {
                this.pressKey.visible = true;
                this.lastTick += 500;
            }
        } else {
            this.lastTick = game.time.now;
        }
    }
}


var titleScreen = new TitleScreen();
var game = new Phaser.Game(640, 480, Phaser.AUTO, 'gamearea',
                           titleScreen, false, false);
