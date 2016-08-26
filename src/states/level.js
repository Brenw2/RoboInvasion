var level = function(game) {
};

level.prototype = {
    preload: function(){
       this.game.load.image('background', '../../assets/img/background.jpg');
	},
  	create: function(){
		 this.game.add.sprite(0, 0, 'background');
	}
}