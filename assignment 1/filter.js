// declare variables needed for the sticky header
var header = document.querySelector('.colors');
var colorCircles = document.querySelector('.color');
var sticky = header.offsetTop;

// save images
var green = document.getElementById('green');
var blue = document.getElementById('blue');
var red = document.getElementById('red');
var pink = document.getElementById('pink');
var purple = document.getElementById('purple');
var orange = document.getElementById('orange');
var yellow = document.getElementById('yellow');

// save buttons
var greenButton = document.getElementById('greenbutton');
var blueButton = document.getElementById('bluebutton');
var redButton = document.getElementById('redbutton');
var pinkButton = document.getElementById('pinkbutton');
var purpleButton = document.getElementById('purplebutton');
var orangeButton = document.getElementById('orangebutton');
var yellowButton = document.getElementById('yellowbutton');
var allButton = document.getElementById('allbutton');

window.onscroll = function() {stickyheader()};

function stickyheader() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");

    greenButton.style.height = "42px";
    greenButton.style.width = "42px";

    blueButton.style.height = "42px";
    blueButton.style.width = "42px";

    redButton.style.height = "42px";
    redButton.style.width = "42px";

    pinkButton.style.height = "42px";
    pinkButton.style.width = "42px";

    purpleButton.style.height = "42px";
    purpleButton.style.width = "42px";

    orangeButton.style.height = "42px";
    orangeButton.style.width = "42px";

    yellowButton.style.height = "42px";
    yellowButton.style.width = "42px";

    allButton.style.height = "42px";
    allButton.style.width = "42px";
  }
  else {
    header.classList.remove("sticky");

    greenButton.style.height = "85px";
    greenButton.style.width = "85px";

    blueButton.style.height = "85px";
    blueButton.style.width = "85px";

    redButton.style.height = "85px";
    redButton.style.width = "85px";

    pinkButton.style.height = "85px";
    pinkButton.style.width = "85px";

    purpleButton.style.height = "85px";
    purpleButton.style.width = "85px";

    orangeButton.style.height = "85px";
    orangeButton.style.width = "85px";

    yellowButton.style.height = "85px";
    yellowButton.style.width = "85px";

    allButton.style.height = "85px";
    allButton.style.width = "85px";
  }
}

console.log(colorCircles);

function displayGreen () {
  allButton.style.border = "none"
  greenButton.style.border = "solid #dfe6e9";
  blueButton.style.border = "none";
  redButton.style.border = "none";
  pinkButton.style.border = "none";
  purpleButton.style.border = "none";
  orangeButton.style.border = "none";
  yellowButton.style.border = "none";

  green.style.display = "block";
  blue.style.display = "none";
  red.style.display = "none";
  pink.style.display = "none";
  purple.style.display = "none";
  orange.style.display = "none";
  yellow.style.display = "none";
}

function displayBlue () {
  allButton.style.border = "none"
  greenButton.style.border = "none";
  blueButton.style.border = "solid #dfe6e9";
  redButton.style.border = "none";
  pinkButton.style.border = "none";
  purpleButton.style.border = "none";
  orangeButton.style.border = "none";
  yellowButton.style.border = "none";

  green.style.display = "none";
  blue.style.display = "block";
  red.style.display = "none";
  pink.style.display = "none";
  purple.style.display = "none";
  orange.style.display = "none";
  yellow.style.display = "none";
}

function displayRed () {
  allButton.style.border = "none"
  greenButton.style.border = "none";
  blueButton.style.border = "none";
  redButton.style.border = "solid #dfe6e9";
  pinkButton.style.border = "none";
  purpleButton.style.border = "none";
  orangeButton.style.border = "none";
  yellowButton.style.border = "none";

  green.style.display = "none";
  blue.style.display = "none";
  red.style.display = "block";
  pink.style.display = "none";
  purple.style.display = "none";
  orange.style.display = "none";
  yellow.style.display = "none";
}

function displayPink () {
  allButton.style.border = "none"
  greenButton.style.border = "none";
  blueButton.style.border = "none";
  redButton.style.border = "none";
  pinkButton.style.border = "solid #dfe6e9";
  purpleButton.style.border = "none";
  orangeButton.style.border = "none";
  yellowButton.style.border = "none";

  green.style.display = "none";
  blue.style.display = "none";
  red.style.display = "none";
  pink.style.display = "block";
  purple.style.display = "none";
  orange.style.display = "none";
  yellow.style.display = "none";
}

function displayPurple () {
  allButton.style.border = "none"
  greenButton.style.border = "none";
  blueButton.style.border = "none";
  redButton.style.border = "none";
  pinkButton.style.border = "none";
  purpleButton.style.border = "solid #dfe6e9";
  orangeButton.style.border = "none";
  yellowButton.style.border = "none";

  green.style.display = "none";
  blue.style.display = "none";
  red.style.display = "none";
  pink.style.display = "none";
  purple.style.display = "block";
  orange.style.display = "none";
  yellow.style.display = "none";
}

function displayOrange () {
  allButton.style.border = "none"
  greenButton.style.border = "none";
  blueButton.style.border = "none";
  redButton.style.border = "none";
  pinkButton.style.border = "none";
  purpleButton.style.border = "none";
  orangeButton.style.border = "solid #dfe6e9";
  yellowButton.style.border = "none";

  green.style.display = "none";
  blue.style.display = "none";
  red.style.display = "none";
  pink.style.display = "none";
  purple.style.display = "none";
  orange.style.display = "block";
  yellow.style.display = "none";
}

function displayYellow () {
  allButton.style.border = "none"
  greenButton.style.border = "none";
  blueButton.style.border = "none";
  redButton.style.border = "none";
  pinkButton.style.border = "none";
  purpleButton.style.border = "none";
  orangeButton.style.border = "none";
  yellowButton.style.border = "solid #dfe6e9";

  green.style.display = "none";
  blue.style.display = "none";
  red.style.display = "none";
  pink.style.display = "none";
  purple.style.display = "none";
  orange.style.display = "none";
  yellow.style.display = "block";
}

function displayYellow () {
  allButton.style.border = "none"
  greenButton.style.border = "none";
  blueButton.style.border = "none";
  redButton.style.border = "none";
  pinkButton.style.border = "none";
  purpleButton.style.border = "none";
  orangeButton.style.border = "none";
  yellowButton.style.border = "solid #dfe6e9";

  green.style.display = "none";
  blue.style.display = "none";
  red.style.display = "none";
  pink.style.display = "none";
  purple.style.display = "none";
  orange.style.display = "none";
  yellow.style.display = "block";
}

function displayAll () {
  allButton.style.border = "solid #000"
  greenButton.style.border = "none";
  blueButton.style.border = "none";
  redButton.style.border = "none";
  pinkButton.style.border = "none";
  purpleButton.style.border = "none";
  orangeButton.style.border = "none";
  yellowButton.style.border = "none";

  green.style.display = "block";
  blue.style.display = "block";
  red.style.display = "block";
  pink.style.display = "block";
  purple.style.display = "block";
  orange.style.display = "block";
  yellow.style.display = "block";
}
