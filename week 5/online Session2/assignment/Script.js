function guessingGame(){
    let x=Math.floor(Math.random()*11)
    let y;
    do{
        y=prompt("write a random number between 0 and 10: ")
        if(x==y)
            alert("Good Guess")
        else if(y=="exit")
            return
        else
            alert("Try Again")
    }
    while(x!=y);
}

function multiplicationTable(){
    let num=prompt("Write a number: ")
    let table=``
    Display=document.getElementById('display')
    for(let i=1; i<=12; i++){
        table+=`<p>${num} x ${i} = ${num*i}</p>`
    }
    Display.innerHTML=table
}

function smallestNumberInArray(Arr){
    small=Arr[0]
    for(let i=1; i<Arr.length; i++){
        if(small>Arr[i]){
            small=Arr[i];
        }
    }
    Display=document.getElementById('dis').innerHTML=small
} 

function evenOnly(Arr){
    function myFun(ele){
        return ele%2==0;
    }
    let newArr=Arr.filter(myFun)
    Display=document.getElementById('di').innerHTML=`[${newArr}]`
}

function numberSearch(arr,num){
    let res=[]
    for(let i=0; i<arr.length;i++){
        if(arr[i]==num){
            res.push(i)
        }
    }
    Display=document.getElementById('Search').innerHTML=`[${res}]`
}

function charactersSearch(String, target){
    let res=[]
    for(let i=0; i<String.length;i++){
        if(String[i]==target){
            res.push(i)
        }
    }
    Display=document.getElementById('CharSearch').innerHTML=`[${res}]`
}

function battleGame(arr){
    let x,y;
    do{
        x=Math.floor(Math.random()*arr.length)
        y=Math.floor(Math.random()*arr.length)
    }
    while(x==y);
    Display=document.getElementById('rand').innerHTML=`[${arr[x]},${arr[y]}]`
}



function trianglePattern(){
    let h= prompt("enter the height of the pyramid: ")
    let star="*";
    let res=``
    for(let i=1; i<=h; i++){
        res+=`<p>${star}</p>`
        star+=" *";
    }
    Display=document.getElementById('d').innerHTML=res
}



