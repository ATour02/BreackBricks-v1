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
    // Background
    this.cameras.main.setBackgroundColor("#FFF8DC")
     //Pala
     this.rectangle = this.add.rectangle(400, 500, 140, 30, 0x0000FF);
     //Pelota
     this.ball = this.add.circle(350,50,20,0x00FF00);
    //Fisicas pala
     this.physics.add.existing(this.rectangle);
     this.rectangle.body.setImmovable(true);
     this.rectangle.body.setCollideWorldBounds(true);
     //fisicas bola
     this.physics.add.existing(this.ball);
     this.ball.body.setCollideWorldBounds(true);
     this.ball.body.setBounce(1);
     this.ball.body.setVelocity(350, 300);
     // Obstaculo
     this.obstacle = this.add.rectangle(300,200,140,100,0x00FFFF),
     this.physics.add.existing(this.obstacle);
     this.obstacle.body.setImmovable(true);
     this.obstacle.body.setBounce(1);
     //Perder
     this.final = this.add.rectangle(400,600, 800, 15, 0xFF0000)
     this.physics.add.existing(this.final);
     this.final.body.setCollideWorldBounds(true);
     //Creacion de teclas de movimiento
     this.cursor = this.input.keyboard.createCursorKeys();
    //Colliders 
     this.physics.add.collider(
      this.rectangle,
      this.ball,
      null,
      null,
      this
    )
   this.physics.add.collider(
    this.ball,
    this.obstacle,
    this.handleCollision = (ball, obstacle) => {
      console.log("colision");
      obstacle.destroy();
    },
    null,
    this
   )
   this.physics.add.collider(
    this.ball,
    this.final,
    this.resLevel = (ball, final) => {
      console.log("Perdiste");
      this.scene.restart();
    },
    null,
    this
   );
  
  }

  update() {
    //Movimiento pala
    /*const speed = 500;
    this.rectangle.body.setVelocity(0);
        if (this.cursor.left.isDown) {
            this.rectangle.body.setVelocityX(-speed);
        } else if (this.cursor.right.isDown) {
            this.rectangle.body.setVelocityX(speed);
        }
        */
        this.input.on('pointermove', (pointer) => {
          this.rectangle.x = pointer.x;
      });
  }
}
