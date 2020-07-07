var numSquares = 6;
var colors;
var pickedColor;
var square = document.getElementsByClassName("square");
var colorDisplay = document.querySelector("#colorDisplay");
var message = document.querySelector("h4 span");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var modeBtn = document.querySelectorAll(".mode");

//Random Color Generator
function randomColor() {
  //Pick red color from 0 - 255
  var r = Math.floor(Math.random() * 256);
  //Pick blue color 0 - 255
  var g = Math.floor(Math.random() * 256);
  //Pick green color 0 - 255
  var b = Math.floor(Math.random() * 256);

  return "rgb(" + r + ", " + g + ", " + b + ")";
}

//Creating array of random color---num is no. of elementsin Array.
function generateRandomColor(num) {
  //create array
  var arr = [];

  //push Random Color in arr
  for (let i = 0; i < num; i++) {
    arr.push(randomColor());
  }

  return arr;
}
colors = generateRandomColor(numSquares);
console.log(colors);
//==================================================================================

// Random Color Picker from "colors"
function pickColor() {
  var number = Math.floor(Math.random() * colors.length);
  return colors[number];
}
//Picking random color from "colors"
pickedColor = pickColor();
colorDisplay.textContent = pickedColor;

function colorChange(color) {
  for (let i = 0; i < colors.length; i++) {
    //To give each square PickedColor
    square[i].style.background = color;
  }
}

//Loop to give each square a color and a event
for (let i = 0; i < colors.length; i++) {
  //To give each square color
  square[i].style.background = colors[i];

  //To select Square
  square[i].addEventListener("click", function () {
    //Select color clicked
    var clickedColor = this.style.background;

    //Just to check
    console.log(pickedColor, clickedColor);

    //Logic to see Correct or Wrong- wrong opt fades away after click.
    if (pickedColor === clickedColor) {
      message.textContent = " CORRECT!!! ";
      colorChange(pickedColor);
      h1.style.background = pickedColor;
      reset.textContent = "RESET";
    } else {
      this.style.background = "#232323"; //Background color --It looks like square faded away
      message.textContent = "Try Again ";
    }
  });
}

function resetFun() {
  //Generate new colors
  colors = generateRandomColor(numSquares);

  for (let i = 0; i < square.length; i++) {
    if (colors[i]) {
      square[i].style.display = "block";
      square[i].style.background = colors[i];
    } else {
      square[i].style.display = "none";
    }
  }

  //Apply it on Square
  for (let i = 0; i < colors.length; i++) {
    square[i].style.background = colors[i];
  }

  pickedColor = pickColor();
  h1.style.background = "skyblue";
  //Reset TextContent
  colorDisplay.textContent = pickedColor;
  reset.textContent = "New Colors";
  message.textContent = " Good Luck ";
}

//reset btn
reset.addEventListener("click", function () {
  resetFun();
});

//modeBtn----Easy & Hard button
for (var i = 0; i < modeBtn.length; i++) {
  modeBtn[i].addEventListener("click", function () {
    modeBtn[0].classList.remove("selected");
    modeBtn[1].classList.remove("selected");
    this.classList.add("selected");
    //LOGIC for EASY MODE & HARD MODE
    this.textContent === "EASY" ? numSquares = 3 : numSquares = 6;
    resetFun();
  });

}
