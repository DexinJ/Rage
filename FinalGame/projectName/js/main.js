// Define game
var game;

window.onload = function() {
    game = new Phaser.Game(800, 600, Phaser.AUTO);

    // Add states to StatManager and start MainMenu
    game.state.add('MainMenu', MainMenu);
    game.state.add('Play', Play);
    game.state.add('GameOver', GameOver);

    game.state.start('MainMenu');
}
