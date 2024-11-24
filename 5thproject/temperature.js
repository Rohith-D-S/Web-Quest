//TEMPERATURE CONVERSION PROGRAM

const myinput=document.getElementById("myinput");
const celsiusToFahrenheit=document.getElementById("celsiusToFahrenheit");
const FahrenheitTocelsius=document.getElementById("FahrenheitTocelsius");
const result=document.getElementById("result");
let temp;
function convert(){
    if(celsiusToFahrenheit.checked){
        temp=Number(myinput.value)*9/5+32;
        result.textContent=temp.toFixed(1)+"°F"; //toFixed();method is used to give the specified number of decimal val 
    }
    else if(FahrenheitTocelsius.checked){
        temp=5/9*(Number(myinput.value)-32);
        result.textContent=temp.toFixed(1)+"°C";    
    }
    else{
        result.textContent="Select a unit";
    }
}