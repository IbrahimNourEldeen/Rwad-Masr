function Welcome() {
    let name=prompt("Enter your name: ")
    document.getElementById('home').innerHTML=`<h1>Welcome Back ${name}!</h1>`    
}

function tempratureSummarizer(){
    let temprature=prompt("Enter the current temperature: ")
    temprature=Number(temprature)
    if(temprature>=30){
        alert("HOT")
    }
    else{
        alert("COLD")
    }
}



function tempratureSummarizerV2(){
    let temprature=prompt("Enter the temperature: ");
    let feel=prompt("Enter the actual feel: ");
    temprature=Number(temprature)
    feel=Number(feel)
    if((temprature>=25&&temprature<=30)&&(feel>=25&&feel<=30)){
        alert("Normal")
    }
    else if(temprature<25&&feel<25){
        alert("Cold")
    }
    else if(temprature>30&&feel>30){
        alert("HOT")
    }
    else{
        alert("Ambiguous, Can’t summarize")
    }
}



function fizzBuzzGame(){
    let num=prompt("Enter a number: ")
    num=Number(num)
    if(num%3==0){
        alert("Fizz")
    }
    else if(num%5==0){
        alert("Buzz")
    }
    else if(num%3==0&&num%5==0){
        alert("FizzBuzz")
    }
    else{
        alert(num)
    }
    let x=prompt("Enter a small number: ")
    let y=prompt("Enter a large number: ")

    for(let i=x; i<=y;i++){
        if(i%3==0){
            alert("Fizz")
        }
        else if(i%5==0){
            alert("Buzz")
        }
        else if(i%3==0&&i%5==0){
            alert("FizzBuzz")
        }
        else{
            alert(i)
        }
    }

}


function task5(){
    let faculty=prompt("Enter your faculty")
    // if(faculty=="FCI"){
    //     alert("You are eligible to programming tracks")
    // }
    // else if(faculty=="Engineering"){
    //     alert("You are eligible to Network tracks")
    // }
    // else if(faculty=="Commerce"){
    //     alert("You are eligible to ERP tracks")
    // }
    // else{
    //     alert("You are eligible for SW Fundamentals tracks")
    // }
    switch(faculty){
        case "FCI":
            alert("You are eligible to programming tracks")
            break;
        case "Engineering":
            alert("You are eligible to Network tracks")
            break;
        case "Commerce":
            alert("You are eligible to ERP tracks")
            break;
        default:
            alert("You are eligible for SW Fundamentals tracks")
            break;    
    }
}



function task6(){
    let num=prompt("enter any number (including floats)")
    num=Number(num)
    if(num%2==0)
        alert("even number")
    else{
        alert("odd number")
    }
}


function task7(){
    Data=document.getElementById('Data')
    let name=prompt("Enter your name: ")
    let age=prompt("Enter your age: ")
    age=Number(age)
    Data.innerHTML=`
        <p class="">Name: ${name}</p>
        <p class="">Birth Year: ${2024-age}</p>
        <p class="">Age in Days: ${age*365}days</p>
        <p class="">Age in Hours: ${age*365*24}hours</p>
        <p class="">Age in Minuts: ${age*365*24*60}minutes</p>
        `
}