let a = prompt("Enter the name of the player 1");
let b = prompt("Enter the name of the player 2");
let c = document.querySelector(".name1");
let d = document.querySelector(".name2");
c.innerHTML=a;
d.innerHTML=b;
let e= c.innerHTML;
let f=d.innerHTML;

// player 1
var one = document.querySelector("#i1");
var two = document.querySelector("#i2");
var three = document.querySelector("#i3");
var four = document.querySelector("#i4");
var five = document.querySelector("#i5");
var six = document.querySelector("#i6");
//for player 2
var one1 = document.querySelector("#j1");
var two1 = document.querySelector("#j2");
var three1 = document.querySelector("#j3");
var four1 = document.querySelector("#j4");
var five1 = document.querySelector("#j5");
var six1 = document.querySelector("#j6");
// selection of buttons

var button1=document.querySelector("#btn1");
var button2=document.querySelector("#btn2")
//Node list
var piece1 = document.querySelectorAll(".piece");
var piece2 = document.querySelectorAll(".piece1");
// Converting to an array
var piece1arr = Array.from(piece1);
var piece2arr = Array.from(piece2);
//dummy Array
var dummy1arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 20, 21,22, 23, 24, 25, 26, 27, 28, 29, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 40,41, 42, 43, 44, 45, 46, 47, 48, 49, 59, 58, 57, 56, 55, 54, 53, 52, 51, 50,60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 79, 78, 77, 76, 75, 74, 73, 72, 71,70, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 99, 98, 97, 96, 95, 94, 93, 92,91, 90];
var dummy2arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 20, 21,22, 23, 24, 25, 26, 27, 28, 29, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 40,41, 42, 43, 44, 45, 46, 47, 48, 49, 59, 58, 57, 56, 55, 54, 53, 52, 51, 50,60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 79, 78, 77, 76, 75, 74, 73, 72, 71,70, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 99, 98, 97, 96, 95, 94, 93, 92,91, 90];

//counter for counting the value and location
//logic for player 1
var count = -1;
var dicecounter = 0;
var count1=-1;
var dicecounter1=0;

function movement() {
    count=count+dicecounter;
     win();
     snakes();
     ladder();
  for (let i = 0; i <= 99; i++) {
    if (i == count) {
      piece1arr[dummy1arr[count]].style.visibility = "visible";
    }
    piece1arr[dummy1arr[i]].style.visibility = "hidden";
}
    piece1arr[dummy1arr[count]].style.visibility = "visible";
}
function movement1() {
    count1=count1+dicecounter1;

     snakes1();
     ladder1();
     win();
  for (let i = 0; i <= 99; i++) {
    if (i == count1) {
      piece2arr[dummy2arr[count1]].style.visibility = "visible";
    }
    piece2arr[dummy2arr[i]].style.visibility = "hidden";
}
    piece2arr[dummy2arr[count1]].style.visibility = "visible";
}

//ladder and snakes
//for player 1
function snakes() {
  if (count == 95) {
    count = 41;
  } else if (count == 93) {
    count = 70;
  } else if (count == 74) {
    count = 31;
  } else if (count == 47) {
    count = 15;
  } else if (count == 36) {
    count = 2;
  } else if (count == 27) {
    count = 9;
  }
}
function ladder() {
  if (count == 3) {
    count = 55;
  } 
  else if (count == 11) {
    count = 49;
  } 
  else if (count == 13) {
    count = 54;
  } 
  else if (count == 21) {
    count = 57;
  } 
  else if (count == 40) {
    count = 78;
  } 
  else if (count == 53) {
    count = 87;
  }
}
//for player 2
function snakes1() {
    if (count1 == 95) {
      count1 = 41;
    } else if (count1 == 93) {
      count1 = 70;
    } else if (count1 == 74) {
      count1 = 31;
    } else if (count1 == 47) {
      count1 = 15;
    } else if (count1 == 36) {
      count1 = 2;
    } else if (count1 == 27) {
      count1 = 9;
    }
  }
  function ladder1() {
    if (count1 == 3) {
      count1 = 55;
    } 
    else if (count1 == 11) {
      count1 = 49;
    } 
    else if (count1 == 13) {
      count1 = 54;
    } 
    else if (count1 == 21) {
      count1 = 57;
    } 
    else if (count1 == 40) {
      count1 = 78;
    } 
    else if (count1 == 53) {
      count1 = 87;
    }
  }

//for dice rolling

function dice() {
  let random = Math.random();
  if (random >= 0 && random < 0.17) {
    one.style.visibility = "visible";
    two.style.visibility = "hidden";
    three.style.visibility = "hidden";
    four.style.visibility = "hidden";
    five.style.visibility = "hidden";
    six.style.visibility = "hidden";
    dicecounter = 1;
    movement();
  } else if (random >= 0.17 && random < 0.34) {
    one.style.visibility = "hidden";
    two.style.visibility = "visible";
    three.style.visibility = "hidden";
    four.style.visibility = "hidden";
    five.style.visibility = "hidden";
    six.style.visibility = "hidden";
    dicecounter = 2;
    movement();
  } else if (random >= 0.34 && random < 0.51) {
    one.style.visibility = "hidden";
    two.style.visibility = "hidden";
    three.style.visibility = "visible";
    four.style.visibility = "hidden";
    five.style.visibility = "hidden";
    six.style.visibility = "hidden";
    dicecounter = 3;
    movement();
  } else if (random >= 0.51 && random < 0.68) {
    one.style.visibility = "hidden";
    two.style.visibility = "hidden";
    three.style.visibility = "hidden";
    four.style.visibility = "visible";
    five.style.visibility = "hidden";
    six.style.visibility = "hidden";
    dicecounter = 4;
    movement();
  } else if (random >= 0.68 && random < 0.85) {
    one.style.visibility = "hidden";
    two.style.visibility = "hidden";
    three.style.visibility = "hidden";
    four.style.visibility = "hidden";
    five.style.visibility = "visible";
    six.style.visibility = "hidden";
    dicecounter = 5;
    movement();
  } else if (random >= 0.85 && random <= 1) {
    one.style.visibility = "hidden";
    two.style.visibility = "hidden";
    three.style.visibility = "hidden";
    four.style.visibility = "hidden";
    five.style.visibility = "hidden";
    six.style.visibility = "visible";
    dicecounter = 6;
    movement();
  } else {
    console.log("hello");
  }
}

function dice1() {
    let random = Math.random();
    if (random >= 0 && random < 0.17) {
      one1.style.visibility = "visible";
      two1.style.visibility = "hidden";
      three1.style.visibility = "hidden";
      four1.style.visibility = "hidden";
      five1.style.visibility = "hidden";
      six1.style.visibility = "hidden";
      dicecounter1 = 1;
      movement1();
    } else if (random >= 0.17 && random < 0.34) {
      one1.style.visibility = "hidden";
      two1.style.visibility = "visible";
      three1.style.visibility = "hidden";
      four1.style.visibility = "hidden";
      five1.style.visibility = "hidden";
      six1.style.visibility = "hidden";
      dicecounter1 = 2;
      movement1();
    } else if (random >= 0.34 && random < 0.51) {
      one1.style.visibility = "hidden";
      two1.style.visibility = "hidden";
      three1.style.visibility = "visible";
      four1.style.visibility = "hidden";
      five1.style.visibility = "hidden";
      six1.style.visibility = "hidden";
      dicecounter1 = 3;
      movement1();
    } else if (random >= 0.51 && random < 0.68) {
      one1.style.visibility = "hidden";
      two1.style.visibility = "hidden";
      three1.style.visibility = "hidden";
      four1.style.visibility = "visible";
      five1.style.visibility = "hidden";
      six1.style.visibility = "hidden";
      dicecounter1 = 4;
      movement1();
    } else if (random >= 0.68 && random < 0.85) {
      one1.style.visibility = "hidden";
      two1.style.visibility = "hidden";
      three1.style.visibility = "hidden";
      four1.style.visibility = "hidden";
      five1.style.visibility = "visible";
      six1.style.visibility = "hidden";
      dicecounter1 = 5;
      movement1();
    } else if (random >= 0.85 && random <= 1) {
      one1.style.visibility = "hidden";
      two1.style.visibility = "hidden";
      three1.style.visibility = "hidden";
      four1.style.visibility = "hidden";
      five1.style.visibility = "hidden";
      six1.style.visibility = "visible";
      dicecounter1 = 6;
      movement1();
    } else {
      console.log("hello");
    }
  }
  // logic for button
  button1.onclick=()=>{
      button1.style.visibility="hidden";
      button2.style.visibility="visible";
    dice();
  }
  button2.onclick=()=>{
    button1.style.visibility="visible";
    button2.style.visibility="hidden";
  dice1();
}
// logic for winner xhexking
function win(){
  if(count>=100){
    alert('Congratulations' + e+' is the winner')
  }
  else if(count1>=100){
    alert('Congratulations' + f+' is winner')
  }
  else{
    console.log("hello")
  }
        }
