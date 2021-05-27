// for this to run, make sure you have a folder 'images' in your root containing cloud1-4.png files, and just copy and paste the canvas into your project
// '.viewer' can then be given z-position to position canvas behind other elements. The frame is responsive.

const canvas = document.getElementById("c");
const ctx = canvas.getContext("2d");

let frame = 0;

let density = 50; // greater number, lower density

const resizeCanvas = () => {
  let width = window.innerWidth;
  let height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
};

resizeCanvas();

class Cloud {
  constructor(
    radius,
    speedMultiplier,
    spriteWidth,
    spriteHeight,
    imgVar,
    xAdjust,
    yAdjust,
    xScale,
    yScale
  ) {
    this.x = canvas.width - (canvas.width + 500);
    this.y = Math.random() * canvas.height;
    this.radius = radius;
    this.speed = Math.random() * speedMultiplier + 1;
    this.frameX = 0;
    this.frameY = 0;
    this.frame = 0;
    this.spriteWidth = spriteWidth;
    this.spriteHeight = spriteHeight;
    this.imgVar = imgVar;
    this.xAdjust = xAdjust;
    this.yAdjust = yAdjust;
    this.xScale = xScale;
    this.yScale = yScale;
  }

  update() {
    this.x += this.speed; //moves clouds across the x axis depending on their speed value
  }

  draw() {
    ctx.drawImage(
      this.imgVar,
      this.frameX * this.spriteWidth, //
      this.frameY * this.spriteHeight,
      this.spriteWidth,
      this.spriteHeight,
      this.x - this.xAdjust, // adjust here to align item with collision area
      this.y - this.yAdjust, // and here (i.e. - 60)
      this.spriteWidth * this.xScale, // scale here if needed (i.e. this.spriteWidth/4)
      this.spriteHeight * this.yScale
    );
  }
}

const cloudArr = [];

const handleClouds = () => {
  if (frame % density == 0) {
    let choice = Math.floor(Math.random() * 4);
    // function to generate image src
    const makeImg = (name) => {
      const img = new Image();
      const path = "./images/";
      const fileType = ".png";
      const imgStr = `${path}${name}${fileType}`;
      img.src = imgStr;
      return img;
    };

    switch (choice) {
      case 0:
        const cloud1Img = makeImg("cloud1");
        cloudArr.push(new Cloud(40, 1, 489, 236, cloud1Img, 30, 30, 0.5, 0.5));
        break;
      case 1:
        const cloud2Img = makeImg("cloud2");
        cloudArr.push(new Cloud(40, 1, 489, 236, cloud2Img, 30, 30, 0.5, 0.5));
        break;
      case 2:
        const cloud3Img = makeImg("cloud3");
        cloudArr.push(new Cloud(40, 1, 489, 236, cloud3Img, 30, 30, 0.5, 0.5));

        break;
      case 3:
        const cloud4Img = makeImg("cloud4");
        cloudArr.push(new Cloud(40, 1, 489, 236, cloud4Img, 30, 30, 0.5, 0.5));
        break;
    }
    //every 50 frames..
  }

  for (let i = 0; i < cloudArr.length; i++) {
    // call update and draw methods for each object in the array
    cloudArr[i].update();
    cloudArr[i].draw();
  }

  // when y position > 0 then delete object. 0 - this.radius * 2 ensures full cloud has passed

  for (let i = 0; i < cloudArr.length; i++) {
    if (cloudArr[i].x > canvas.width + 100 - cloudArr[i].radius * 2) {
      cloudArr.splice(i, 1);
    }
  }
};

const animate = () => {
  if (frame % 1 === 0) {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // clear canvas as part of render loop
  }
  handleClouds();
  requestAnimationFrame(animate);
  frame++;
};

window.addEventListener("resize", () => {
  resizeCanvas();
});

resizeCanvas();

animate();
