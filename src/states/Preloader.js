Game.Preloader = function (game) {
    this.preloadBar = null;
}
Game.Preloader.prototype = {
    preload: function () {
        this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderBar');
        this.preloadBar.anchor.setTo(0.5, 0.5);
        this.time.advancedTime = true;
        this.load.setPreloadSprite(this.preloadBar);
        //Load All Assets
        this.load.image('bullet', 'assets/img/playerBullet.png', 13, 5);
        this.load.atlasJSONHash('spaceman', '../../assets/img/playerSpacemanSpriteMap.png', '../../assets/img/playerSpacemanSpriteMap.json');
        this.load.tilemap('map', '../../assets/levelMaps/level1Map_LandLayer.csv', null, Phaser.Tilemap.CSV);
        this.load.tilemap('level1TileMap', '../../assets/levelMaps/level1Map.json', null, Phaser.Tilemap.TILED_JSON);
        this.load.image('tiles', '../../assets/img/tileset.png');
    }
    , create: function () {
        this.state.start('Level');
    }
}