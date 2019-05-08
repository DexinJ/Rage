function Player(game, key, frame, scale, rotation, x, y) {
    //call to phaser sprite
    Phaser.Sprite.call(this, game, x, y, key, frame);
    //properties
    this.anchor.set(0.5);
    this.alpha = 0.5;
    this.scale.x = scale;
    this.scale.y = scale;
    this.rotation = rotation;

    game.physics.enable(this);
    this.body.collideWorldBounds = true;
}

Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;

Player.prototype.update = function () {
    
   
}