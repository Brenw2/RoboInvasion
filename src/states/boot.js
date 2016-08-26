var boot = function(game){
	console.log("%cStarting Robo Invasion", "color:white; background:red");
};
  
boot.prototype = {
	preload: function(){
	},
  	create: function(){
		this.game.state.start("Level");
	}
}