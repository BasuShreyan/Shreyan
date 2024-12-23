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
    label.textContent="°C:";
    box.setAttribute('placeholder','Enter Celsius');
    k=1;
}
function fahrenheitCelsius(){
    label.textContent="°F:";
    box.setAttribute('placeholder','Enter Fahrenheit');
    k=2;
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