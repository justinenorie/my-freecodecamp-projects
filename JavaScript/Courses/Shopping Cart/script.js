//selecting the DOM to manipulate
const startBtn = document.getElementById("start-btn");
const canvas = document.getElementById("canvas");
const startScreen = document.querySelector(".start-screen");
const checkpointScreen = document.querySelector(".checkpoint-screen");
const checkpointMessage = document.querySelector(".checkpoint-screen > p");

//Creating a canvas to manipulate the 2d design in the website
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

//Initial value for gravity and collission
const gravity = 0.5;
let isCheckpointCollisionDetectionActive = true;

//Checks the height of the Screen to be responsive 
const proportionalSize = (size) => {
  return innerHeight < 500 ? Math.ceil((size / 500) * innerHeight) : size;
}

//Player design it has a positioning, the speed player movement and the height and width. 
class Player {
  constructor() {
    this.position = {
      x: proportionalSize(10),
      y: proportionalSize(400),
    };
    this.velocity = {
      x: 0,
      y: 0,
    };
    this.width = proportionalSize(40);
    this.height = proportionalSize(40);
  }

  //It will draw in canvas based on the position and width and height of the player
  draw() {
    ctx.fillStyle = "#99c9ff";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
  
  //The player movement positioning
  update() {
    this.draw();
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    if (this.position.y + this.height + this.velocity.y <= canvas.height) {
      if (this.position.y < 0) {
        this.position.y = 0;
        this.velocity.y = gravity;
      }
      this.velocity.y += gravity;
    } else {
      this.velocity.y = 0;
    }

    if (this.position.x < this.width) {
      this.position.x = this.width;
    }

    if (this.position.x >= canvas.width - this.width * 2) {
      this.position.x = canvas.width - this.width * 2;
    }
  }
}


//This is the generation of the platforms
class Platform {
  constructor(x, y) {
    this.position = {
      x,
      y,
    };
    this.width = 200;
    this.height = proportionalSize(40);
  }
  draw() {
    ctx.fillStyle = "#acd157";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}

//Creating a checkpoint so the player can claim it
class CheckPoint {
  constructor(x, y, z) {
    this.position = {
      x,
      y,
      z,
    };
    this.width = proportionalSize(40);
    this.height = proportionalSize(70);
    this.claimed = false;
  };

  //It will design the checkpoint based on the position, width and height
  draw() {
    ctx.fillStyle = "#f1be32";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  //If it's claimed it will removed
  claim() {
    this.width = 0;
    this.height = 0;
    this.position.y = Infinity;
    this.claimed = true;
  }
};

//Initialization of the player class so it can be used on the global state.
const player = new Player();

//Creating a platforms positions
const platformPositions = [
  { x: 500, y: proportionalSize(450) },
  { x: 700, y: proportionalSize(400) },
  { x: 850, y: proportionalSize(350) },
  { x: 900, y: proportionalSize(350) },
  { x: 1050, y: proportionalSize(150) },
  { x: 2500, y: proportionalSize(450) },
  { x: 2900, y: proportionalSize(400) },
  { x: 3150, y: proportionalSize(350) },
  { x: 3900, y: proportionalSize(450) },
  { x: 4200, y: proportionalSize(400) },
  { x: 4400, y: proportionalSize(200) },
  { x: 4700, y: proportionalSize(150) },
];

//Selecting the platforms array using .map method to generate the platforms using the class Platform methods
const platforms = platformPositions.map(
  (platform) => new Platform(platform.x, platform.y)
);

//Creating a checkpoints positions
const checkpointPositions = [
  { x: 1170, y: proportionalSize(80), z: 1 },
  { x: 2900, y: proportionalSize(330), z: 2 },
  { x: 4800, y: proportionalSize(80), z: 3 },
];

//Mapping all the checkpoints using the class Checkpoint methods
const checkpoints = checkpointPositions.map(
  (checkpoint) => new CheckPoint(checkpoint.x, checkpoint.y, checkpoint.z)
);

//Animate function to generate the platforms, checkpoints and to check the playermovements.
const animate = () => {
  //Calling the javascript method to animate the movements
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //Calling the platforms and checkpoint to generate it inside of the canvas
  platforms.forEach((platform) => {
    platform.draw();
  });

  checkpoints.forEach(checkpoint => {
    checkpoint.draw();
  });

  //Calling the Player Class to get the movement positioning
  player.update();

  //Checks if the correct key is pressed
  if (keys.rightKey.pressed && player.position.x < proportionalSize(400)) {
    player.velocity.x = 5;
  } else if (keys.leftKey.pressed && player.position.x > proportionalSize(100)) {
    player.velocity.x = -5;
  } else {
    player.velocity.x = 0;

    if (keys.rightKey.pressed && isCheckpointCollisionDetectionActive) {
      platforms.forEach((platform) => {
        platform.position.x -= 5;
      });

      checkpoints.forEach((checkpoint) => {
        checkpoint.position.x -= 5;
      });
    
    } else if (keys.leftKey.pressed && isCheckpointCollisionDetectionActive) {
      platforms.forEach((platform) => {
        platform.position.x += 5;
      });

      checkpoints.forEach((checkpoint) => {
        checkpoint.position.x += 5;
      });
    }
  }

  //It checks the collision 
  platforms.forEach((platform) => {
    const collisionDetectionRules = [
      player.position.y + player.height <= platform.position.y,
      player.position.y + player.height + player.velocity.y >= platform.position.y,
      player.position.x >= platform.position.x - player.width / 2,
      player.position.x <= platform.position.x + platform.width - player.width / 3,
    ];

    //If all collision bolean array is true it will stop the player to move 
    if (collisionDetectionRules.every((rule) => rule)) {
      player.velocity.y = 0;
      return;
    }

    //It checks if the player is on or in the platforms
    const platformDetectionRules = [
      player.position.x >= platform.position.x - player.width / 2,
      player.position.x <= platform.position.x + platform.width - player.width / 3,
      player.position.y + player.height >= platform.position.y,
      player.position.y <= platform.position.y + platform.height,
    ];

    //If all the platform bolean array is true it will stay on or in the platform
    if (platformDetectionRules.every(rule => rule)) {
      player.position.y = platform.position.y + player.height;
      player.velocity.y = gravity;
    };
  });


  //It checks the checkpoints if the player near or in the checkpoint it will claimed it by the player
  checkpoints.forEach((checkpoint, index, checkpoints) => {
    const checkpointDetectionRules = [
      player.position.x >= checkpoint.position.x,
      player.position.y >= checkpoint.position.y,
      player.position.y + player.height <=
        checkpoint.position.y + checkpoint.height,
      isCheckpointCollisionDetectionActive,
      player.position.x - player.width <=
        checkpoint.position.x - checkpoint.width + player.width * 0.9,
      index === 0 || checkpoints[index - 1].claimed === true,
    ];


    //If the checkpoints array bolean is all true it will claim the checkpoint means it will removed from the canvas
    if (checkpointDetectionRules.every((rule) => rule)) {
      checkpoint.claim();

      //Message if the checkpoint is claimed
      if (index === checkpoints.length - 1) {
        isCheckpointCollisionDetectionActive = false;
        showCheckpointScreen("You reached the final checkpoint!");
        movePlayer("ArrowRight", 0, false);
      }else if (player.position.x >= checkpoint.position.x && player.position.x <= checkpoint.position.x + 40) {
        showCheckpointScreen("You reached a checkpoint!");
      }
    };
  });
}

//Checks if the correct key is pressed
const keys = {
  rightKey: {
    pressed: false
  },
  leftKey: {
    pressed: false
  }
};

//Movement function based on the correct key pressed
const movePlayer = (key, xVelocity, isPressed) => {
  if (!isCheckpointCollisionDetectionActive) {
    player.velocity.x = 0;
    player.velocity.y = 0;
    return;
  }

  switch (key) {
    case "ArrowLeft":
      keys.leftKey.pressed = isPressed;
      if (xVelocity === 0) {
        player.velocity.x = xVelocity;
      }
      player.velocity.x -= xVelocity;
      break;
    case "ArrowUp":
    case " ":
    case "Spacebar":
      player.velocity.y -= 8;
      break;
    case "ArrowRight":
      keys.rightKey.pressed = isPressed;
      if (xVelocity === 0) {
        player.velocity.x = xVelocity;
      }
      player.velocity.x += xVelocity;
  }
}

//Start game function to animate everything in the canvas
const startGame = () => {
  canvas.style.display = "block";
  startScreen.style.display = "none";
  animate();
}

//checkpoint function message if it's claimed it will display the message for 2secs
const showCheckpointScreen = (msg) => {
  checkpointScreen.style.display = "block";
  checkpointMessage.textContent = msg;
  if (isCheckpointCollisionDetectionActive) {
    setTimeout(() => (checkpointScreen.style.display = "none"), 2000);
  }
};

//add a eventlister if the start button is clicked and call the startgame function
startBtn.addEventListener("click", startGame);

//If key is pressed
window.addEventListener("keydown", ({ key }) => {
  movePlayer(key, 8, true);
});

//If the arrow key is not pressed 
window.addEventListener("keyup", ({ key }) => {
  movePlayer(key, 0, false);
});