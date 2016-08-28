Game.Level = function(game) {
   
}
var map;
var layer;

Game.Level.prototype = {
  	create: function(){
        this.stage.backgroundColor = '#3a5963'
        map = this.add.tilemap('level1Map', 32, 32);
        map.addTilesetImage('tileset');
        layer = map.createLayer(0);
        //layer.resizeWorld();
        
	}
}