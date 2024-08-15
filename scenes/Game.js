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
     this.rectangle = this.add.rectangle(400, 550, 140, 30, 0xffffff);
     //Pelota
     this.ball = this.add.circle(200,300,20,0xffffff);
 
     this.physics.add.existing(this.rectangle);
     this.rectangle.body.setImmovable(true);
     this.rectangle.body.setCollideWorldBounds(true);
     this.physics.add.existing(this.ball);
     this.ball.body.setCollideWorldBounds(true);
     this.ball.body.setBounce(1);
     this.ball.body.setVelocity(200, 200)
     this.cursor = this.input.keyboard.createCursorKeys();

     this.physics.add.collider(
      this.rectangle,
      this.ball,
      null,
      null,
      this
    )
  }

  update() {
    //Movimiento pala
    const speed = 500;
    this.rectangle.body.setVelocity(0);
        if (this.cursor.left.isDown) {
            this.rectangle.body.setVelocityX(-speed);
        } else if (this.cursor.right.isDown) {
            this.rectangle.body.setVelocityX(speed);
        }
        //Movimiento pelota
  }
}
