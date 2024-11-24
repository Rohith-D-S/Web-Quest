//.checked = property that determines the checked state of an HTML checkbox or radio button element

const myCheckedBox=document.getElementById("myCheckedBox");
const mySubmit=document.getElementById("mySubmit");
const ques=document.getElementById("ques");

mySubmit.onclick=function(){
    if(myCheckedBox.checked){
        ques.textContent=`print the question`;
    }
    else{
        ques.textContent=`Check box not selected`;
    }
}
