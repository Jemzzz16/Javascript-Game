<h5> Game Ideas </h5>
<ul>
<li>Virtual Pet</li>
<li>Numbers games</li>
<li>Whack a mole</li>
<li>Jump rabbit</li>
</ul>

<p>

Virtual pet that doesnt decrease in health but you can over feed it

- this will save on 'complicated' timer functions

// if there's no name stored, set the name to 'My Pet'
if (localStorage.getItem('petName') === null) {
localStorage.setItem('petName', 'My Pet')
}

//Clicking on a "Feed" button will restore vitamin and health to your pet.
getBtnVM.addEventListener("click",function(){
if(alive == true){
if(ctCurVM + points <= ctMaxVM)
{
ctCurVM = ctCurVM + points;
if(ctCurH + points < ctMaxH)
{
ctCurH = ctCurH + points;
}
meterWidth();

//// NAME
var searchName = name + "=";
Submit box for name

/////// RESTARTING THE GAME
var button = document.getElementById('restart');

        button.onclick = function () {
            restart();

///// starting stats
//game starts with life stats of 4
let hunger = 4;
let happiness = 4;
let health = 4;

////////// HEALTH GOES DOWN
//changes star jpg depending on stat level
function changeStar() {
var star = document.getElementById('star');
if (happiness === 4) {
star.src = "https://res.cloudinary.com/dytmcam8b/image/upload/v1561725934/virtual%20pet/s1.png";
}
else if (happiness === 3) {
star.src = "https://res.cloudinary.com/dytmcam8b/image/upload/v1561725934/virtual%20pet/s2.png";
} else if (happiness === 2) {
star.src = "https://res.cloudinary.com/dytmcam8b/image/upload/v1561725934/virtual%20pet/s3.png";
} else if (happiness === 1) {
star.src = "https://res.cloudinary.com/dytmcam8b/image/upload/v1561725934/virtual%20pet/s4.png";
}
}

///// INCREASE HEALTH
//increase hunger stat if donut clicked

        document.getElementById("food").onclick = function feed() {
            if (hunger < 4) {
                hunger++;
            }
        }

function clickedTreatButton() {
//Increase pet happiness
pet_info.happiness = pet_info.happiness + 1;
// Increase pet weight
pet_info.weight = pet_info.weight + 1;
checkAndUpdatePetInfoInHtml();
}

const foodStock = [
{ img: "🍕", name: "pizza", foodType: "junk", price: 2.5 },
{ img: "🍔", name: "burger", foodType: "junk", price: 3 },
{ img: "🍟", name: "fries", foodType: "junk", price: 1 },
{ img: "🌭", name: "hot dog", foodType: "junk", price: "1.5" },
{ img: "🥗", name: "salad", foodType: "healthy", price: [2] },
{ img: "🥙", name: "pita", foodType: "healthy", price: 0 },
{ img: "🥪", name: "sandwich", foodType: "healthy", price: 3 },
{ img: "🌯", name: "burrito", foodType: "healthy", price: 5 },
{ img: "🥣", name: "soup", foodType: "healthy", price: 2 },
];
const foodContainer = document.getElementById("food-container");
const generateHTML = foodArray => {
const HTML = foodArray.map(food => {
return `<div><p>${food.img}</p><p>${food.name}</p><p>${food.price}</p></div>`;
});
return HTML.join("");
};
foodContainer.innerHTML = generateHTML(foodStock);x
