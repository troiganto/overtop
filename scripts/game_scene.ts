///<reference path="../lib/phaser.d.ts"/>

import PhaserModule = Phaser;

module Overtop {
  /**
   * This class handles the stage in which the main game takes place - a level is
   * displayed and a character is shown and can be moved.
   *
   * @class GameStage
   * @constructor
   */
  export class GameScene extends PhaserModule.State {

    private map: Phaser.Tilemap;
    private layer: Phaser.TilemapLayer;
    private renderer: Phaser.TilemapRenderer;
    
    private pc: Phaser.Sprite; // only a single player character for now, until
    // network connectivity is in place
    
    private cursors: any; // 

    /**
     * Handles loading of necessary files, as usual per Phaser.io standard.
     * @method preload
     * @return{void}
     */
    preload(): void
    {
      game.load.tilemap("tilemap", "assets/maps/level.json", null, Phaser.Tilemap.TILED_JSON);
      game.load.tileset("tileset", "assets/tilesets/minimal.png", 32,32,-1,0,1);
      game.load.spritesheet("character", "assets/sprites/character-static-tmp.png", 32,32);
    }
    
    /**
     * Sets up the game world, as usual per Phaser.io standard.
     * @method create
     * @return{void}
     */
    create(): void
    {
      this.map = game.add.tilemap("tilemap");
      var tileset = game.add.tileset("tileset");

      this.layer = game.add.tilemapLayer(0, 0, 640,480, tileset, this.map, 0);
      
      game.world.setBounds(0,0, this.map.widthInPixels, this.map.heightInPixels);
      
     // this.map.collide();
      
      this.pc = game.add.sprite(32, 32, "character");
      this.cursors = game.input.keyboard.createCursorKeys(); // enable keyboard controls for the PC
      
      game.camera.follow(this.pc, Phaser.Camera.FOLLOW_TOPDOWN); // well, obviously.

    }
    
    /**
     * Updates the game data per loop cycle, as usual per Phaser.io standard.
     * @method update
     * @return{void}
     */
    update(): void
    {
      // check for movement
      this.pc.body.velocity.setTo(0,0);
      if(this.cursors.left.isDown)
        this.pc.body.velocity.x -= 200;
      if(this.cursors.right.isDown)
        this.pc.body.velocity.x += 200;
      if(this.cursors.up.isDown)
        this.pc.body.velocity.y -= 200;
      if(this.cursors.down.isDown)
        this.pc.body.velocity.y += 200;
    }
    
    render(): void
    {
      game.debug.renderCameraInfo(game.camera, 32, 32);
      game.debug.renderSpriteCoords(this.pc, 32, 200);
    }

  }

}