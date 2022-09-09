// Random-Dice(1to6) //

var randomNumber1=Math.floor(Math.random()*6)+1;
var randomDiceimg1="images/dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src", randomDiceimg1);
var randomNumber2=Math.floor(Math.random()*6)+1;
var randomDiceimg2="images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomDiceimg2);

// h1-conditions(win,loss,draw) //

if(randomNumber1===randomNumber2){
  document.querySelector("h1").innerHTML="Draw!";
}
else if (randomNumber1>randomNumber2) {
  document.querySelector("h1").innerHTML="🚩Player1 wins!🎲";
}
else if (randomNumber1<randomNumber2) {
  document.querySelector("h1").innerHTML="🚩Player2 wins!🎲";
}
else{
  document.querySelector("h1").innerHTML="Refresh Me";
}
