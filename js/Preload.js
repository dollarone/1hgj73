var PlatformerGame = PlatformerGame || {};

//loading the game assets
PlatformerGame.Preload = function(){};

PlatformerGame.Preload.prototype = {
  preload: function() {
    //show loading screen
    this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'preloadbar');
    this.preloadBar.anchor.setTo(0.5);

    this.load.setPreloadSprite(this.preloadBar);

    this.game.load.spritesheet('logo-tiles', 'assets/images/logo-tiles.png', 17, 16);
    this.game.load.spritesheet('tiles', 'assets/images/isolation.png', 16, 16);
    this.game.load.spritesheet('dude', 'assets/images/cray.png', 12, 26);
    this.load.tilemap('level1', 'assets/tilemaps/isolation.json', null, Phaser.Tilemap.TILED_JSON);
    //this.game.load.image('sky', 'assets/images/sky_new.png');
    this.game.load.image('star', 'assets/images/cloud.png');
    this.game.load.image('gamejam', 'assets/images/onehourgamejamlogo.png');

    this.game.load.audio('splash', 'assets/audio/onehourgamejamsplash.ogg');
    this.game.load.audio('music', 'assets/audio/wind.ogg');
    this.game.load.audio('rant', 'assets/audio/rant-deep.ogg');
    this.game.load.audio('dollarone', 'assets/audio/dollarone.ogg');

  },
  create: function() {
    var colour = "222";
    var timeout = 2;
    this.state.start('Logo', true, false, colour, timeout);
  }
};
