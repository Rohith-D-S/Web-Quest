//NUMBER GUESSING GAME

const yesBtn=document.getElementById("yesBtn");
const noBtn=document.getElementById("noBtn");
const restartBtn=document.getElementById("restartBtn");
const randmsg=document.getElementById("randmsg");
const atmps=document.getElementById("atmps");
const guess=document.getElementById("guess");
let randNumber=false;
let val;
let attempt=7;
let userinput;
const max=100;
const min=1;
const myLable=document.getElementById("myLable").textContent=`Guess the number between ${min}-${max}`;
yesBtn.onclick=function(){
    if (randNumber==false){
        val=Number(Math.floor(Math.random()*(max-min+1))+1);
        randNumber=true;
    }
    while (attempt>0){
        userinput=window.prompt(`You have ${attempt} to guess the number`);
        if (userinput==null){
            window.alert("You cancelled the game..");
            break;
        }
        userinput=Number(userinput);
        attempt--;
        if(isNaN(userinput)){
            window.alert("Enter valid number");
        }
        else if (userinput>max || userinput<min){
            window.alert("Enter valid number");
        }
        if (userinput==val){
            window.alert(`Your guess is correct...you won..!!`);
            break;
        }
        else if (userinput>val){
            window.alert(`Too large..!`);
        }
        else if(userinput<val){
            window.alert(`Too less..!`);
        }
        // window.alert(`Ohh..!! your guess is wrong..`);
        
    }
    if (userinput!=val){
        window.alert("Ohh..you loss the game..!!\n*****Thank you*****");
    }
}
noBtn.onclick=function(){
    guess.textContent=`Click on yes button when you are ready`;
}
