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


const removePicture = (element) => {
  element.style.zIndex = '1'
  element.style.opacity = '0'
}
const pictureOnTop = (element) => {
  element.style.zIndex = '3'
  element.style.opacity = '100%'
}
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
// DAVE MOOD
daveNormal = () => {
  removePicture(fedImage)
  removePicture(loveImage)
  removePicture(fireImage)
  pictureOnTop(originalImage)
};
daveFed = () => {
  removePicture(originalImage)
  removePicture(loveImage)
  removePicture(fireImage)
  pictureOnTop(fedImage)
};
daveLoved = () => {
  removePicture(originalImage)
  removePicture(fedImage)
  removePicture(fireImage)
  pictureOnTop(loveImage)
};
daveFired = () => {
  removePicture(originalImage)
  removePicture(loveImage)
  removePicture(fedImage)
  pictureOnTop(fireImage)
};
// daveFlap = () => {
//   originalImage.style.opacity = "0"
//   return flapImage.style.opacity = "100"
// };

////////////////////////////////////////////////////////////////////

feed.addEventListener(('click'), () => {
  daveFed()
  setTimeout(daveNormal, 1000)
  console.log(fedImage);
});

love.addEventListener(('click'), () => {
  daveLoved()
  setTimeout(daveNormal, 1000)
  console.log(loveImage);
});

// window.addEventListener('load', (event) => {
//   setTimeout(daveFired, alertFunc, 1000)
//   daveNormal()
//   console.log(daveFired);
// });

// const alertFunc = () => {
//   alert("FEED ME");
// }

// setInterval(daveFlap(), 3*1000);

// setTimeout(daveFired(), 5*1000);

// fire.addEventListener(('click'), (event) => {
//   daveFired()
//   console.log(fireImage);
// });
