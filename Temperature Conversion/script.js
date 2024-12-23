//Variables
onload=()=>{
    let label=document.getElementById('label');
    let box=document.getElementById('box');
    let output=document.getElementById('output');
    let unit=document.getElementById('Unit');
    let result;
    }
let k=1;
determine();
//Functions
function celsiusFahrenheit(){
    k=1;
    determine();
}
function fahrenheitCelsius(){
    k=2;
    determine();
}
function resultant(){
    let input=Number(box.value);
    if(isNaN(input)){
        output.textContent=`Enter a vaild number`;
    }
    else{
        if(k==1){
            result=Math.round((input*9)/5+32);
            output.textContent=`Fahrenheit:${result}°F`;
        }
        else{
            result=Math.round((input-32)*5/9);
            output.textContent=`Celsius:${result}°C`;
        }
    }
}
function determine()
{
    if(k==1)
    {
    label.textContent="°C:";
    box.setAttribute('placeholder','Enter Celsius');
    }
    else
    {
        label.textContent="°F:";
        box.setAttribute('placeholder','Enter Fahrenheit');  
    }
}