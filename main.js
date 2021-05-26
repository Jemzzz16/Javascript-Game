const eggNormal = document.querySelector('#egg-normal')
const eggSlightCrack = document.querySelector('#egg-slightly-cracked')
const eggCracked = document.querySelector('#egg-cracked')

const eggDiv = document.querySelector('.egg-div')
const dragonDiv = document.querySelector('.dragon-div')

const originalImage = document.querySelector('#dave-normal')
//const flapImage = document.querySelector('#daveflap')
const deadImage = document.querySelector('#davedead')

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

// let i = 0
// const eggBtn = document.querySelector('#egg-button')
// for(i = 0; i < eggBtn.length; i++) {
//   eggBtn.addEventListener(('click'), () => {
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
/// EGG EVENTS
let eggClick = 0
eggNormal.addEventListener('click', () => {
  eggClick++
  if (eggClick === 5) {
    return firstCrack()
  }
});
eggSlightCrack.addEventListener('click', () => {
  eggClick++
  if (eggClick === 5) {
    secondCrack()
  }
});
eggCracked.addEventListener('click', () => {
  eggClick++
  if (eggClick === 2) {
    finalCrack()
  }
});
////////////////////////////////////////////////////////////////////
// DAVE MOOD
daveNormal = () => {
  removePicture(fedImage)
  removePicture(fireImage)
  removePicture(loveImage)
  pictureOnTop(originalImage)
};
daveFed = () => {
  removePicture(originalImage)
  removePicture(fireImage)
  removePicture(loveImage)
  pictureOnTop(fedImage)
};
daveLoved = () => {
  removePicture(originalImage)
  removePicture(fireImage)
  removePicture(fedImage)
  pictureOnTop(loveImage)
};
daveFired = () => {
  removePicture(originalImage)
  removePicture(fedImage)
  removePicture(loveImage)
  pictureOnTop(fireImage)
};
// daveDead = () => {
//   removePicture(fedImage)
//   removePicture(fireImage)
//   removePicture(loveImage)
//   pictureOnTop(deadImage)
// };
// daveFlap = () => {
//   removePicture(originalImage)
//   removePicture(loveImage)
//   removePicture(fedImage)
//   removePicture(fireImage)
//   pictureOnTop(flapImage)
// };

////////////////////////////////////////////////////////////////////
/// FEED + LOVE
// eggCracked.addEventListener(('click'), () => {
//   daveNormal()
// });



feed.addEventListener(('click'), () => {
  daveFed()
});
love.addEventListener(('click'), () => {
  daveLoved()
});


////////////////////////////////////////////////////////////////////



// if(feedDragon === true) {
//     setTimeout(daveFired, 5000); 
//   }



// const fireUp = () => {
//   if(fireUp === true) {
//     fireUp()
//   }else if (feed === true) {
//     clearTimeout(fireUp)
//   }
// } 


// if feed is true/clicked return normal
// if fire is true for 5 secs return dead
// if feed is false return fire



// eggCracked.addEventListener(('click'), () => {
//   setTimeout(daveDead, 10000)
// });


// feed.addEventListener(('click'), () => {
//   if (daveFed === true){
//     clearTimeout(resetFire)
//   } else if (daveDead === true)
//     setTimeout(resetDead)
// });
// needs to reset daveDead
////// can you add things in a class and call the class when items in that class are clicked on? that way reducing code size.

// let to change event listener 

// Array.from(elements).forEach(function(element) {
//   element.addEventListener('click', myFunction);
// });


//Clicking on a "Fed or fire" button will rest timer for fire and death
// const resetDeath = () => {
//   if(daveNormal === true) {
//     clearTimeout()
//   } else if (daveFired === true)
//   clearTimeout()
// }


// const alertFunc = () => {
//   alert("FEED ME");
// }

// setInterval(daveFlap(), 3*1000);

// setTimeout(daveFired(), 5*1000);

// fire.addEventListener(('click'), (event) => {
//   daveFired()
//   console.log(fireImage);
// });


// window.setInterval(function, milliseconds);  - DAVE