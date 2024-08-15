// URL to explain PHASER scene: https://rexrainbow.github.io/phaser3-rex-notes/docs/site/scene/

export default class Game extends Phaser.Scene {
  constructor() {
    // key of the scene
    // the key will be used to start the scene by other scenes
    super("Game");
  }

  init() {
  }

  preload() {
  }

  create() {
     //Pala
     const rectangle = this.add.rectangle(400, 550, 140, 30, 0xffffff);
     //Pelota
     const ball = this.add.circle(200,300,20,0xffffff);
 
     this.physics.add.existing(rectangle);
     this.physics.add.existing(ball);
  }

  update() {
    // update game objects
  }
}
