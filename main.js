const originalImage = document.querySelector('#dave-normal')

const feed = document.querySelector('#feedhim');
const fedImage = document.querySelector('#davefed');

const love = document.querySelector('#dave-normal');
const loveImage = document.querySelector('#daveloved');

const fire = document.querySelector('#firehim');
const fireImage = document.querySelector('#davefire');

daveFed = () => {
  originalImage.style.opacity = "0"
  return fedImage.style.opacity = "100%"
};

daveLoved = () => {
  originalImage.style.opacity = "0"
  return loveImage.style.opacity = "100%"
};

daveFired = () => {
  originalImage.style.opacity = "0"
  return fireImage.style.opacity = "100%"
};

feed.addEventListener(('click'), (taregt) => {
  daveFed()
  console.log(fedImage);
});

love.addEventListener(('click'), (taregt) => {
  daveLoved()
  console.log(loveImage);
});



//setTimeout(daveFired(), 5*1000);

// fire.addEventListener(('click'), (taregt) => {
//   daveFired()
//   console.log(fireImage);
// });




// settimeout() - can be called for the fire image so after a certain amount of time this image will show 