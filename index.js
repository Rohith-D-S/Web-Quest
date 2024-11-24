//RANDOM NUMBER GENERATOR

const myLabel=document.getElementById("myLabel");
const myButton=document.getElementById("myButton");
const max=6,min=1;
let randNumber;
myButton.onclick=function(){
    randNumber=Number(Math.floor((Math.random()*(max-min+1))+min));
    myLabel.textContent=randNumber;
}