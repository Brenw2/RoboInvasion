Game.Level = function (game) {}
var map;
var map2;
var backgroundLayer;
var landLayer;
var collisionLandLayer;
var moonLayer;
var starsLayer;
var player;
var controls;
var controlJump;
var bullets
var fireRate = 250;
var nextFire = 0;
var playerLookRight = true;
var player;

Game.Level.prototype = {
   create: function () {
        game = this;
        this.stage.backgroundColor = '#3a5963'
        
        map = this.add.tilemap('level1TileMap', 32, 32);
        map2 = this.add.tilemap('map', 32, 32);
        map2.addTilesetImage('tiles');
        map.addTilesetImage('level1', 'tiles');
       
        backgroundLayer = map.createLayer('backgroundLayer');
        moonLayer = map.createLayer('MoonLayer');
        landLayer = map.createLayer("LandLayer");
        starsLayer = map.createLayer("starsLayer");
       
        
        
       
        player = new Player(game,32, this.world.height - 150);
        
        this.physics.startSystem(Phaser.Physics.ARCADE);
        this.physics.arcade.enable(player);
        player.body.bounce.y = 0.2;
        player.body.gravity.y = 300;
        player.body.collideWorldBounds = true;

        collisionLandLayer = map2.createLayer(0);
        collisionLandLayer.resizeWorld();
        map2.setCollisionBetween(0, 19);
    }
    , update: function () {
        this.physics.arcade.collide(player, collisionLandLayer)
        
    }
    
}