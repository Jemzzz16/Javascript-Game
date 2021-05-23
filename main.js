const eggNormal = document.querySelector('#egg-normal')
const eggSlightCrack = document.querySelector('#egg-slightly-cracked')
const eggCracked = document.querySelector('#egg-cracked')


const eggDiv = document.querySelector('.egg-div')
const dragonDiv = document.querySelector('.dragon-div')


const originalImage = document.querySelector('#dave-normal')
const flapImage = document.querySelector('#daveflap')

const feed = document.querySelector('#feedhim');
const fedImage = document.querySelector('#davefed');

const love = document.querySelector('#dave-normal');
const loveImage = document.querySelector('#daveloved');

const fire = document.querySelector('#firehim');
const fireImage = document.querySelector('#davefire');

////////////////////////////////////////////////////////////////////

// const eggBtn = document.querySelector('#egg-button')
// for(i = 0; i < eggBtn.length; i++) {
//   eggBtn[i].addEventListener(('click'), () => {
//     firstCrack()
//     console.log(firstCrack());
//   })  
// };

////////////////////////////////////////////////////////////////////
// EGGS
const firstCrack = () => {
  eggNormal.style.zIndex = "1"
  eggSlightCrack.style.opacity = "100%"
  eggSlightCrack.style.zIndex = '3'
};          
const secondCrack = () => {
  eggSlightCrack.style.zIndex = '1'
  eggCracked.style.opacity = "100%"
  eggCracked.style.zIndex = '3'
};
const finalCrack = () => {
  eggDiv.style.opacity = "0"
  return dragonDiv.style.opacity = "100%"
};

eggNormal.addEventListener(('click'), () => {
  firstCrack()
  console.log(firstCrack);
});
eggSlightCrack.addEventListener(('click'), () => {
  secondCrack()
  console.log(secondCrack);
});
eggCracked.addEventListener(('click'), () => {
  finalCrack()
  console.log(finalCrack);
});

////////////////////////////////////////////////////////////////////
// DAVE MOOD
daveFed = () => {
  originalImage.style.opacity = "0"
  return fedImage.style.opacity = "100%"
};
daveLoved = () => {
  originalImage.style.opacity = "0"
  return loveImage.style.opacity = "100%"
};

if (daveloved() = true )


// daveFired = () => {
//   originalImage.style.opacity = "0"
//   return fireImage.style.opacity = "100%"
// };
// daveFlap = () => {
//   originalImage.style.opacity = "0"
//   return flapImage.style.opacity = "100"
// };

////////////////////////////////////////////////////////////////////

feed.addEventListener(('click'), () => {
  daveFed()
  console.log(fedImage);
});

love.addEventListener(('click'), () => {
  daveLoved()
  console.log(loveImage);
});

// setInterval(daveFlap(), 3*1000);

// setTimeout(daveFired(), 5*1000);

// fire.addEventListener(('click'), (event) => {
//   daveFired()
//   console.log(fireImage);
// });

// settimeout() - can be called for the fire image so after a certain amount of time this image will show 