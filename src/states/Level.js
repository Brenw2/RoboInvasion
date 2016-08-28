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
Game.Level.prototype = {
    create: function () {
        this.stage.backgroundColor = '#3a5963'
        map = this.add.tilemap('level1TileMap', 32, 32);
        map2 = this.add.tilemap('map', 32, 32);
        map2.addTilesetImage('tiles');
        map.addTilesetImage('level1', 'tiles');
        backgroundLayer = map.createLayer('backgroundLayer');
        moonLayer = map.createLayer('MoonLayer');
        landLayer = map.createLayer("LandLayer");
        starsLayer = map.createLayer("starsLayer");
        this.physics.startSystem(Phaser.Physics.ARCADE);
        player = this.add.sprite(32, this.world.height - 150, 'spaceman');
        player.animations.add('fallRight', ['playerSpaceman4.png'], 8, true, false);
        player.animations.add('fallLeft', ['playerSpaceman8.png'], 8, true, false);
        player.animations.add('right', ['playerSpaceman9.png', 'playerSpaceman10.png', 'playerSpaceman11.png', 'playerSpaceman12.png', 'playerSpaceman13.png', 'playerSpaceman14.png', 'playerSpaceman15.png', 'playerSpaceman16.png'], 8, true, false);
        player.animations.add('left', ['playerSpaceman17.png', 'playerSpaceman18.png', 'playerSpaceman19.png', 'playerSpaceman20.png', 'playerSpaceman21.png', 'playerSpaceman22.png', 'playerSpaceman23.png', 'playerSpaceman24.png'], 8, true, false);
        cursors = this.input.keyboard.createCursorKeys();
        controlJump = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        this.input.keyboard.addKeyCapture([Phaser.Keyboard.C]);
        this.physics.arcade.enable(player);
        player.body.bounce.y = 0.2;
        player.body.gravity.y = 300;
        player.body.collideWorldBounds = true;
        player.anchor.set(0.5);
        bullets = this.add.group();
        bullets.enableBody = true;
        bullets.physicsBodyType = Phaser.Physics.ARCADE;
        bullets.createMultiple(50, 'bullet');
        bullets.setAll('checkWorldBounds', true);
        bullets.setAll('outOfBoundsKill', true);
        collisionLandLayer = map2.createLayer(0);
        collisionLandLayer.resizeWorld();
        map2.setCollisionBetween(0, 19);
    }
    , update: function () {
        this.physics.arcade.collide(player, collisionLandLayer)
        if (this.input.keyboard.isDown(Phaser.Keyboard.D)) {
            player.body.velocity.x = 300;
            player.animations.play('right');
            playerLookRight = true;
        }
        else if (this.input.keyboard.isDown(Phaser.Keyboard.A)) {
            player.body.velocity.x = -300;
            player.animations.play('left');
            playerLookRight = false;
        }
        else {
            player.animations.stop();
            player.body.velocity.x = 0;
            if (playerLookRight == false) {
                player.frame = 4;
            }
            else {
                player.frame = 0;
            }
        }
        if (controlJump.isDown) {
            if (player.body.velocity.y == -0.8333333333333335 || player.body.velocity.y == -0.8333333333333334) {
                if (this.input.keyboard.isDown(Phaser.Keyboard.D) && controlJump.isDown) {
                    player.body.velocity.y = -300;
                    player.body.velocity.x = 300;
                    player.animations.play('fallRight');
                }
                else if (this.input.keyboard.isDown(Phaser.Keyboard.A) && controlJump.isDown) {
                    player.body.velocity.y = -300;
                    player.body.velocity.x = -300;
                    player.animations.play('fallLeft');
                }
                else {
                    player.body.velocity.y = -300;
                    player.animations.play('fallRight');
                }
            }
        }
        if (this.input.activePointer.isDown) {
            this.fireBullet();
        }
    }
    , fireBullet: function () {
        if (this.time.now > nextFire && bullets.countDead() > 0) {
            nextFire = this.time.now + fireRate;
            var bullet = bullets.getFirstDead();
            if (playerLookRight == false) {
                bullet.reset(player.x - 25, player.y - 12);
                this.physics.arcade.moveToPointer(bullet, 500);
            }
            else {
                bullet.reset(player.x + 25, player.y - 12);
                bullet.body.velocity.x = 500;
                this.physics.arcade.moveToPointer(bullet, 500);
            }
        }
    }
}