




// let userInput=document.querySelector('[name=userName]')
// let PasswordInput=document.querySelector('[name=Password]')
// let rePasswordInput=document.querySelector('[name=rePassword]')
// document.forms[0].onsubmit=function(event){
//     let nameValid=false;
//     let PasswordValid=false;
//     let rePasswordValid=false;
//     if(userInput.value!==""&&userInput.value.length>=10){
//         nameValid=true;
//     }
//     if(PasswordInput.value!==""&&PasswordInput.value.length>=10){
//         PasswordValid=true;
//         if(rePasswordInput===PasswordInput){
//             rePasswordValid=true;
//         }
//     }
//     if(nameValid===false || PasswordValid===false || rePasswordInput===false){
//         event.preventDefault();
//     }
// }








let count=document.getElementById('count')

let num = setInterval(function(){
    count.innerHTML-=1;
    if(count.innerHTML === "0"){
        clearInterval(num);
        count.innerHTML=`flash Sale has Started <a href="">kljsdl</a>`;
    }
},1000);