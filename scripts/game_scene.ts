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

    /**
     * Handles loading of necessary files, as usual per Phaser.io standard.
     * @method preload
     * @return{void}
     */
    preload(): void
    {
      game.load.tilemap("tilemap", "assets/maps/level.json", null, Phaser.Tilemap.TILED_JSON);
      game.load.tileset("tileset", "assets/tilesets/minimal.png", 32,32,-1,0,1);
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
    }
    
    /**
     * Updates the game data per loop cycle, as usual per Phaser.io standard.
     * @method update
     * @return{void}
     */
    update(): void
    {

    }

  }

}