const feed = document.querySelector('.feedhim');
const love = document.querySelector('.lovehim');
const fire = document.querySelector('.firehim');


feed.addEventListener(('click'), (event) => {

}



function changeImage() {
  var image = document.getElementById('myImage');
  if (image.src.match("colorbottel")) {
      image.src = "waterbottel.gif";
  }
  else {
      image.src = "colorbottel.gif";
  }
}

// 

// numbers.forEach((number) => {
//   number.addEventListener(("click"), (event) => {
//     inputNumber(event.target.value)
//     updateScreen(secondNumber)
//   })
// })

