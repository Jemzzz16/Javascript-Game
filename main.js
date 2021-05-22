const eggNormal = document.querySelector('#egg-normal')
const eggSlightCrack = document.querySelector('#egg-slightly-cracked')
const eggCracked = document.querySelector('#egg-cracked')
const eggBtn = document.querySelector('#egg-button')

const eggDiv = document.querySelector('.egg-images')
const dragonDiv = document.querySelector('.dragon-images')


const originalImage = document.querySelector('#dave-normal')
const flapImage = document.querySelector('#daveflap')

const feed = document.querySelector('#feedhim');
const fedImage = document.querySelector('#davefed');

const love = document.querySelector('#dave-normal');
const loveImage = document.querySelector('#daveloved');

const fire = document.querySelector('#firehim');
const fireImage = document.querySelector('#davefire');

////////////////////////////////////////////////////////////////////


const firstCrack = () => {
  return eggSlightCrack
};          
const secondCrack = () => {
  return eggCracked
};
const finalCrack = () => {
  eggDiv.style.style.zIndex = "1"
  return dragonDiv.style.style.zIndex = "3"
};

////////////////////////////////////////////////////////////////////

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

daveFed = () => {
  originalImage.style.opacity = "0"
  return fedImage.style.opacity = "100%"
};

daveLoved = () => {
  originalImage.style.opacity = "0"
  return loveImage.style.opacity = "100%"
};

// daveFired = () => {
//   originalImage.style.opacity = "0"
//   return fireImage.style.opacity = "100%"
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

//for(i = 0; i < 5; i++) {
  //   eggNormal.addEventListener(('click'), () => {
  //     firstCrack = () => {
  //       if(eggBtn = i)
  //     }
  //   })  
  // };
  // console.log(firstCrack());


//setTimeout(daveFired(), 5*1000);

// fire.addEventListener(('click'), (taregt) => {
//   daveFired()
//   console.log(fireImage);
// });

// daveFlap = () => {
//   originalImage.style.opacity = "0"
//   return flapImage.style.opacity = "100"
// };

// setInterval(daveFlap(), 3*1000);


// settimeout() - can be called for the fire image so after a certain amount of time this image will show 