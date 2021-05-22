const feed = document.querySelector('#feedhim');
const fedImage = document.querySelector('#davefed');

const love = document.querySelector('#lovehim');
const loveImage = document.querySelector('#daveloved');

const fire = document.querySelector('#firehim');
const fireImage = document.querySelector('#davefire');

daveLoved = () => {
  return loveImage
};

daveFired = () => {
  return fireImage
};

daveFed = () => {
  return fedImage
};

feed.addEventListener(('click'), (taregt) => {
  daveLoved()
  console.log(loveImage);
});


love.addEventListener(('click'), (taregt) => {
  daveFired()
  console.log(fireImage);
});

fire.addEventListener(('click'), (taregt) => {
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

