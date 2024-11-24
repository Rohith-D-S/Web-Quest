//COUTER PROGRAM

const decreaseBtn=document.getElementById("dcrBtn");
const increaseBtn=document.getElementById("incBtn");
const resetBtn=document.getElementById("rstBtn");
const countLabel=document.getElementById("counterLabel");
count=0;

decreaseBtn.onclick=function(){
    count--;
    countLabel.textContent=count;
}

resetBtn.onclick=function(){
    count=0;
    countLabel.textContent=count;
}

increaseBtn.onclick=function(){
    count++;
    countLabel.textContent=count;
}