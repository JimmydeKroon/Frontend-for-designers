var playerName1 = document.getElementById('PlayerName1');
var playerName2 = document.getElementById('PlayerName2');
var playerName3 = document.getElementById('PlayerName3');

var textPlayer1 = document.getElementById('textplayer1');
var textPlayer2 = document.getElementById('textplayer2');
var textPlayer3 = document.getElementById('textplayer3');

var nameButton1 = document.getElementById('namebutton1');
var nameButton2 = document.getElementById('namebutton2');
var nameButton3 = document.getElementById('namebutton3');

var count = 0;
var count2 = 0;
var count3 = 0;
var score1 = document.getElementById('score1');

var infoButton = document.getElementById('info-button');
var infoField = document.getElementById('info-field');
var displayInfo = false;

var notEditing = true;


function nameplayer1 () {
  textPlayer1.innerHTML = document.getElementById('PlayerName1').value;
  document.getElementById('PlayerName1').style.opacity = "0";
  nameButton1.style.opacity = "0";
}

function nameplayer2 () {
  textPlayer2.innerHTML = document.getElementById('PlayerName2').value;
  document.getElementById('PlayerName2').style.opacity = "0";
  nameButton2.style.opacity = "0";
}

function nameplayer3 () {
  textPlayer3.innerHTML = document.getElementById('PlayerName3').value;
  document.getElementById('PlayerName3').style.opacity = "0";
  nameButton3.style.opacity = "0";
}

nameButton1.onclick = nameplayer1;
nameButton2.onclick = nameplayer2;
nameButton3.onclick = nameplayer3;

function addone_1 () {
  //console.log(parseInt(document.getElementById('score1').innerHTML));
  count++
  score1.innerHTML = count;
}

function removeone_1 () {
  count--
  score1.innerHTML = count;
}

function bounce1 () {
  score1.classList.add("bounce");

setTimeout(function(){
  score1.classList.remove("bounce");
  }, 800);
}

function bouncecolorgreen_1 () {
  score1.classList.add("bouncegreen");

setTimeout(function(){
  score1.classList.remove("bouncegreen");
  }, 800);
}

function bouncecolorred_1 () {
  score1.classList.add("bouncered");

setTimeout(function(){
  score1.classList.remove("bouncered");
  }, 800);
}


document.getElementById('upbutton1').addEventListener("click", addone_1);
document.getElementById('upbutton1').addEventListener("click", bounce1);
document.getElementById('upbutton1').addEventListener("click", bouncecolorgreen_1);

document.getElementById('downbutton1').addEventListener("click", removeone_1);
document.getElementById('downbutton1').addEventListener("click", bounce1);
document.getElementById('downbutton1').addEventListener("click", bouncecolorred_1);

function addone_2 () {
  count2++
  score2.innerHTML = count2;
}

function removeone_2 () {
  count2--
  score2.innerHTML = count2;
}

function bounce2 () {
  score2.classList.add("bounce");

setTimeout(function(){
  score2.classList.remove("bounce");
  }, 1000);
}

function bouncecolorgreen_2 () {
  score2.classList.add("bouncegreen");

setTimeout(function(){
  score2.classList.remove("bouncegreen");
  }, 800);
}

function bouncecolorred_2 () {
  score2.classList.add("bouncered");

setTimeout(function(){
  score2.classList.remove("bouncered");
  }, 800);
}

document.getElementById('upbutton2').addEventListener("click", addone_2);
document.getElementById('upbutton2').addEventListener("click", bounce2);
document.getElementById('upbutton2').addEventListener("click", bouncecolorgreen_2);


document.getElementById('downbutton2').addEventListener("click", removeone_2);
document.getElementById('downbutton2').addEventListener("click", bounce2);
document.getElementById('downbutton2').addEventListener("click", bouncecolorred_2);


function addone_3 () {
  count3++
  score3.innerHTML = count3;
}

function removeone_3 () {
  count3--
  score3.innerHTML = count3;
}

function bounce3 () {
  score3.classList.add("bounce");

setTimeout(function(){
  score3.classList.remove("bounce");
  }, 1000);
}

function bouncecolorgreen_3 () {
  score3.classList.add("bouncegreen");

setTimeout(function(){
  score3.classList.remove("bouncegreen");
  }, 800);
}

function bouncecolorred_3 () {
  score3.classList.add("bouncered");

setTimeout(function(){
  score3.classList.remove("bouncered");
  }, 800);
}

document.getElementById('upbutton3').addEventListener("click", addone_3);
document.getElementById('upbutton3').addEventListener("click", bounce3);
document.getElementById('upbutton3').addEventListener("click", bouncecolorgreen_3);

document.getElementById('downbutton3').addEventListener("click", removeone_3);
document.getElementById('downbutton3').addEventListener("click", bounce3);
document.getElementById('downbutton3').addEventListener("click", bouncecolorred_3);


window.addEventListener("keydown", (function keycodepress(e) {
    var keyCode = e.keyCode;
    console.log(keyCode);

    if (notEditing === true) {

    if (keyCode == 87) {
      addone_1();
      bounce1();
      bouncecolorgreen_1();
    }

    if (keyCode == 83) {
      removeone_1();
      bounce1();
      bouncecolorred_1();
    }

    if (keyCode == 73) {
      addone_2();
      bounce2();
      bouncecolorgreen_2();
    }

    if (keyCode == 75) {
      removeone_2();
      bounce2();
      bouncecolorred_2();
    }

    if (keyCode == 38) {
      addone_3();
      bounce3();
      bouncecolorgreen_3();
    }

    if (keyCode == 40) {
      removeone_3();
      bounce3();
      bouncecolorred_3();
    }
}}));

function toggleInfo() {
  if (displayInfo == false) {
    displayInfo = true;
    document.getElementById('info-field').style.display = "block";
  }

  else {
    displayInfo = false;
    document.getElementById('info-field').style.display = "none";
  }
}

infoButton.onclick = toggleInfo;

var editable_1 = document.getElementById('textplayer1');
editable_1.addEventListener("keydown", function (){
    notEditing = false;
    console.log(notEditing);
    setTimeout(function(){
      notEditing = true;
      }, 1000);
})

var editable_2 = document.getElementById('textplayer2');
editable_2.addEventListener("keydown", function (){
    notEditing = false;
    console.log(notEditing);
    setTimeout(function(){
      notEditing = true;
      }, 1000);
})

var editable_3 = document.getElementById('textplayer3');
editable_3.addEventListener("keydown", function (){
    notEditing = false;
    console.log(notEditing);
    setTimeout(function(){
      notEditing = true;
      }, 1000);
})

console.log(notEditing);
