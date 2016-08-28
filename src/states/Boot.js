var Game = {};

Game.Boot = function(game){
    
};

Game.Boot.prototype = {
    init: function(){
        //only one input at a time this is just the mouse for now.
        this.input.maxPointers = 1
        this.stage.disableVisibilityChange = true;
    },
    preload: function(){
        this.load.image('preloaderBar', '../../assets/img/preloader.png')
    },
    create: function(){
        this.state.start('Preloader');
    },
    update: function(){
        
    }
}
