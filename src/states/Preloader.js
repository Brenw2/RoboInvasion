Game.Preloader = function(game) {
    this.preloadBar = null;
}

Game.Preloader.prototype = {
 preload: function(){
     this.preloadBar = this.add.sprite(this.world.centerX,this.world.centerY, 'preloaderBar');
     this.preloadBar.anchor.setTo(0.5,0.5);
     this.time.advancedTime = true;
     this.load.setPreloadSprite(this.preloadBar);
     
     //Load All Assets
     
     this.load.tilemap('level1Map', '/assets/levelMaps/level1.json');
     this.load.image('tileset', '/assets/img/tileset.png')
 },
    
    create: function(){
        this.state.start('Level');
    }
}
