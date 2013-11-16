//small example to debug JS/TS errors.
    var map, renderer;

    /**
     * Handles loading of necessary files, as usual per Phaser.io standard.
     * @method preload
     * @return{void}
     */
    function preload()
    {
      game.load.tilemap("tilemap", "assets/maps/testmap.tmx", "assets/maps/zelda la tileset.png");
      game.load.tileset("tileset", "assets/maps/zelda la tileset.png", 18,18,-1,1,1);
    }
    
    /**
     * Sets up the game world, as usual per Phaser.io standard.
     * @method create
     * @return{void}
     */
    function create()
    {
      map = game.add.tilemap(0,0,"tilemap", false, 18, 18);
      var tileset = game.add.tileset("tileset");
      game.add.tilemapLayer(0, 0, map.widthInPixels, map.heightInPixels,
      tileset, map, 0);
    }
    
    /**
     * Updates the game data per loop cycle, as usual per Phaser.io standard.
     * @method update
     * @return{void}
     */
    function update()
    {

    }

    var game = new Phaser.Game(640, 480, Phaser.AUTO, 'gamearea', {preload:preload,create:create,update:update}, false, false);
    