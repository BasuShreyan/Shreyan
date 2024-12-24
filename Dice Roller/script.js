const dice=document.getElementById("num");
const picture=document.getElementById("picture");
let para=document.getElementById('para');
let heading=document.getElementById("heading");
let numbers=[];
let images=[];
let diceNumber;

function numberDice(){
    diceNumber=Number(dice.value);
    for(let i=0; i<=diceNumber; i++){
        numbers.push(Math.floor(Math.random()*6)+1);
        images.push(`<img src="${numbers[i]}.png" alt=${numbers[i]}>`);
    }
    picture.innerHTML=images.join(' ');
    heading.textContent=`You have rolled:`;
    para.textContent=numbers.join(',');
}