var controlJump;
var cursors;
var playerLookRight = true;

Player = function(game, x, y){
    Phaser.Sprite.call(this, game, x, y, 'spaceman');
    this.anchor.set(0.5);
    
    cursors = game.input.keyboard.createCursorKeys();
    controlJump = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
  
    game.add.existing(this);
    
}

Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player; 

Player.prototype.update = function() {

    //  Automatically called by World.update
    
    
    
     if (game.input.keyboard.isDown(Phaser.Keyboard.D)) {
            this.body.velocity.x = 300;
            this.animations.play('right');
            playerLookRight = true;
        }
        else if (game.input.keyboard.isDown(Phaser.Keyboard.A)) {
            this.body.velocity.x = -300;
            this.animations.play('left');
            playerLookRight = false;
        }
        else {
            this.animations.stop();
            this.body.velocity.x = 0;
            if (playerLookRight == false) {
                player.frame = 4;
            }
            else {
                player.frame = 0;
            }
        }
        if (game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
            if (this.body.velocity.y == -0.8333333333333335 || this.body.velocity.y == -0.8333333333333334) {
                if (game.input.keyboard.isDown(Phaser.Keyboard.D) && game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
                    this.body.velocity.y = -300;
                    this.body.velocity.x = 300;
                    this.animations.play('fallRight');
                }
                else if (game.input.keyboard.isDown(Phaser.Keyboard.A) && game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
                    this.body.velocity.y = -300;
                    this.body.velocity.x = -300;
                    this.animations.play('fallLeft');
                }
                else {
                    this.body.velocity.y = -300;
                    this.animations.play('fallRight');
                }
            }
        }

   

};







