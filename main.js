const eggNormal = document.querySelector('#egg-normal')
const eggSlightCrack = document.querySelector('#egg-slightly-cracked')
const eggCracked = document.querySelector('#egg-cracked')

const eggDiv = document.querySelector('.egg-div')
const dragonDiv = document.querySelector('.dragon-div')
const interactiveBtns = document.querySelector('.buttons')

const originalImage = document.querySelector('#dave-normal')
const deadImage = document.querySelector('#davedead')

const feed = document.querySelector('#feedhim');
const fedImage = document.querySelector('#davefed');

const love = document.querySelector('#lovehim');
const loveImage = document.querySelector('#daveloved');

const fire = document.querySelector('#firehim');
const fireImage = document.querySelector('#davefire');

const energy = document.querySelector('#energy')
const flapImage = document.querySelector('#daveflap')

const resetBtn = document.querySelector('#reset-button');

let dragonFed = false
let dragonLoved = false
let dragonDead = false
let dragonFly = false

////////////////////////////////////////////////////////////////////
/// TIMERS + GAME RESET
var fireTimer;
var deadTimer;

let fireHandle = () => {
  fireTimer = setTimeout(daveFired, 5000)
};
let fireStop = () => {
  clearTimeout(fireTimer)
};
let deadHandle = () => {
  deadTimer = setTimeout(daveDead, 10000)
};
let deadStop = () => {
  clearTimeout(deadTimer)
};
const resetGame = () => {
  location.reload();
};
resetBtn.addEventListener('click', () => {
 resetGame()
});

////////////////////////////////////////////////////////////////////
/// PICTURE CHANGES 
const removePicture = (element) => {
  element.style.zIndex = '1'
  element.style.opacity = '0'
};
const pictureOnTop = (element) => {
  element.style.zIndex = '3'
  element.style.opacity = '100%'
};
const removeAllImages = () => {
  removePicture(fedImage)
  removePicture(fireImage)
  removePicture(loveImage)
  removePicture(originalImage)
  removePicture(flapImage)
};

////////////////////////////////////////////////////////////////////
// EGGS    
const firstCrack = () => {
  removePicture(eggNormal)
  pictureOnTop(eggSlightCrack)
};  
const secondCrack = () => {
  removePicture(eggSlightCrack)
  pictureOnTop(eggCracked)
};
const finalCrack = () => {
  removePicture(eggDiv)
  pictureOnTop(dragonDiv)
  interactiveBtns.style.opacity = '100'
};

////////////////////////////////////////////////////////////////////
/// EGG EVENTS
let eggClick = 0
eggNormal.addEventListener('click', () => {
  eggClick++
  if (eggClick === 5) 
  { firstCrack() }
});
let nextEggClick = 0
eggSlightCrack.addEventListener('click', () => {
  nextEggClick++
  if (nextEggClick === 5) 
  { secondCrack() }
});
let lastEggClick = 0
eggCracked.addEventListener('click', () => {
  lastEggClick++
  if (lastEggClick === 8) 
  { finalCrack() }
});

////////////////////////////////////////////////////////////////////
// DAVE MOOD
daveNormal = () => {
  removePicture(flapImage)
  removePicture(fedImage)
  removePicture(fireImage)
  removePicture(loveImage)
  pictureOnTop(originalImage)
  fireHandle()
  deadHandle()
};
daveFed = () => {
  removePicture(flapImage)
  removePicture(originalImage)
  removePicture(fireImage)
  removePicture(loveImage)
  pictureOnTop(fedImage)
  fireStop()
  deadStop()
};
daveLoved = () => {
  removePicture(flapImage)
  removePicture(originalImage)
  removePicture(fireImage)
  removePicture(fedImage)
  pictureOnTop(loveImage)
  fireStop()
  deadStop()
};
daveFlap = () => {
  removePicture(originalImage)
  removePicture(loveImage)
  removePicture(fedImage)
  removePicture(fireImage)
  pictureOnTop(flapImage)
  fireStop()
  deadStop()
};
daveFired = () => {
  removePicture(flapImage)
  removePicture(originalImage)
  removePicture(fedImage)
  removePicture(loveImage)
  pictureOnTop(fireImage)
};
daveDead = () => {
  removePicture(flapImage)
  removePicture(fedImage)
  removePicture(fireImage)
  removePicture(loveImage)
  pictureOnTop(deadImage)
  resetBtn.style.opacity = '100'
  interactiveBtns.parentNode.removeChild(interactiveBtns)
};

////////////////////////////////////////////////////////////////////
/// FEED + LOVE + FIRE + DEAD
eggCracked.addEventListener('click', () => {
  dragonFed = false
  if (dragonFed = false) {
    fireHandle()
    deadHandle() 
  } if (dragonFed = true) {
    fireStop()
    fireHandle()
    deadStop()
    deadHandle()
  }
});
feed.addEventListener('click', () => {
  dragonFed = true
  if (dragonFed = true) {
    daveFed()
    setTimeout(daveNormal, 1000)
    fireStop()
    deadStop()
  } 
});
love.addEventListener('click', () => {
  dragonLoved = true
  if (dragonLoved = true) {
  daveLoved()
  setTimeout(daveNormal, 1000)
  }
});
energy.addEventListener('click', () => {
  dragonFly = true
  if (dragonFly = true) {
  daveFlap()
  setTimeout(daveNormal, 1000)
  }
});
