//Variables
onload=()=>{
    let label=document.getElementById('label');
    let box=document.getElementById('box');
    let output=document.getElementById('output');
    let k;
    let result;
    }

//Functions
function celsiusFahrenheit(){
    label.textContent="Celsius";
    k=1;
}
function fahrenheitCelsius(){
    label.textContent="Fahrenheit";
    k=2;
}
function resultant(){
    let input=Number(box.value);
    if(k==1){
        result=Math.round((input*9)/5+32);
        output.textContent=`${result}`;
    }
    else{
        result=Math.round((input-32)*5/9);
        output.textContent=`${result}`;
    }

}