const originalImage = document.querySelector('#dave-normal')

const feed = document.querySelector('#feedhim');
const fedImage = document.querySelector('#davefed');

const love = document.querySelector('#lovehim');
const loveImage = document.querySelector('#daveloved');

const fire = document.querySelector('#firehim');
const fireImage = document.querySelector('#davefire');

daveLoved = () => {
  originalImage.style.opacity = "0"
  return loveImage.style.opacity = "100%"
};

daveFired = () => {
  originalImage.style.opacity = "0"
  return fireImage.style.opacity = "100%"
};

daveFed = () => {
  originalImage.style.opacity = "0"
  return fedImage.style.opacity = "100%"
};

love.addEventListener(('click'), (taregt) => {
  daveLoved()
  console.log(loveImage);
});


fire.addEventListener(('click'), (taregt) => {
  daveFired()
  console.log(fireImage);
});

feed.addEventListener(('click'), (taregt) => {
  daveFed()
  console.log(fedImage);
});





// function changeImage() {
//   var image = document.getElementById('myImage');
//   if (image.src.match("colorbottel")) {
//       image.src = "waterbottel.gif";
//   }
//   else {
//       image.src = "colorbottel.gif";
//   }
// }

// 

// numbers.forEach((number) => {
//   number.addEventListener(("click"), (event) => {
//     inputNumber(event.target.value)
//     updateScreen(secondNumber)
//   })
// })

