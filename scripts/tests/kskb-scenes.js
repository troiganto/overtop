//small example to debug JS/TS errors.
    var map;

    /**
     * Handles loading of necessary files, as usual per Phaser.io standard.
     * @method preload
     * @return{void}
     */
    function preload()
    {
      game.load.tilemap("tilemap", "assets/maps/testmap.json", null, Phaser.Tilemap.TILED_JSON);
      game.load.tileset("tileset", "assets/maps/tileset.png", 16,16,-1,0,0);
    }
    
    /**
     * Sets up the game world, as usual per Phaser.io standard.
     * @method create
     * @return{void}
     */
    function create()
    {
      map = game.add.tilemap("tilemap");
      var tileset = game.add.tileset("tileset");
      game.add.tilemapLayer(0, 0, 640, 480, tileset, map, 0);
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
    