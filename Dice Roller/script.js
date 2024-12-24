const dice=document.getElementById("num");
const picture=document.getElementById("picture");
let numbers=[];
let images=[];
let diceNumber;

function numberDice(){
    diceNumber=Number(dice.value);
    console.log(diceNumber);
}