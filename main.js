const eggNormal = document.querySelector('#egg-normal')
const eggSlightCrack = document.querySelector('#egg-slightly-cracked')
const eggCracked = document.querySelector('#egg-cracked')


// for(i = 0; i < 5; i++) {
//   eggNormal.addEventListener(('click'), () => {
//     firstCrack = () => {
//       eggNormal.style.opacity = "0"
//       return eggSlightCrack.style.opacity = "100%"
//     }
//   })  
// };
// console.log(firstCrack());



const originalImage = document.querySelector('#dave-normal')
const flapImage = document.querySelector('#daveflap')

const feed = document.querySelector('#feedhim');
const fedImage = document.querySelector('#davefed');

const love = document.querySelector('#dave-normal');
const loveImage = document.querySelector('#daveloved');

const fire = document.querySelector('#firehim');
const fireImage = document.querySelector('#davefire');

// daveFlap = () => {
//   originalImage.style.opacity = "0"
//   return flapImage.style.opacity = "100"
// };

// setInterval(daveFlap(), 3*1000);

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

feed.addEventListener(('click'), () => {
  daveFed()
  console.log(fedImage);
});

love.addEventListener(('click'), () => {
  daveLoved()
  console.log(loveImage);
});




//setTimeout(daveFired(), 5*1000);

// fire.addEventListener(('click'), (taregt) => {
//   daveFired()
//   console.log(fireImage);
// });




// settimeout() - can be called for the fire image so after a certain amount of time this image will show 