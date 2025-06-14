// let doc = document.createElement("p");
// let x = document.createTextNode("Hello World");

// doc.appendChild(x);
// console.log(doc);

// let c = document.createAttribute("my-Data");
// doc.setAttributeNode(c);
// doc.setAttribute("myDatarr" , "ggg");
// doc.className = "ff";

// document.body.appendChild(doc);
// let us = document.getElementsByClassName("us");
// console.log(us[0].childNodes);

// console.log(us[0].lastElementChild);
// let btn = document.getElementById("btn");
// btn.onmouseleave = function()
// {
//     document.write("hello World");
// }
// window.onload = function()
// {
//     console.log("loading");
// }

// let userInput = document.querySelector("[name = 'username']");
// let ageInput = document.querySelector("[name= 'age']");

// document.forms[0].onsubmit = function(e)
// {
//     userValid = false;
//     ageValid = false;
//     if(userInput.value !== "" && userInput.value.length <= 10)
//     {
//         userValid = true;
//     }
//     if(ageInput !== "")
//     {
//         ageValid = true;
//     }
//     if(userValid === false || ageValid === false)
//     {
//         e.preventDefault();
//     }
// };


// let f = document.getElementById("my-div");
// let clone = f.cloneNode(false);
// console.log(f.classList.contains("show"));
// f.onclick = function()
// {
//     f.classList.toggle("show");
// }
// f.prepend(" hello it's me ")
// console.log(f.parentElement);
// f.onclick = function()
// {
//     document.body.appendChild(clone)
// }
// f.addEventListener("click" , function()
// {
//     console.log(f.innerHTML);
// })
// // window.alert("hi i am devloper");
// let div = document.querySelector("div");

// function countdown()
// {
//     div.innerHTML -=1;
//     if(div.innerHTML === "0")
//     {
//         clearInterval(counter);
//     }
// }
// let counter = setInterval(countdown,1000);
// setTimeout(function()
// {
//     window.open("https:www.google.com" , "_blank" , "width=300,height=400")
// },2000);
// window.localStorage.setItem("color" , "#F04");
// window.localStorage.fontWeight = "bold";
// window.localStorage.color = "red";
// window.localStorage["fontSize"] = "20px";
// document.body.style.backgroundColor = window.localStorage.getItem("color");

// window.sessionStorage.color = "blue";
// let doc = document.createElement("p");
// let text = document.createTextNode("hello Ahmed");
// doc.appendChild(text);
// let att = document.createAttribute("data-test");

// document.body.appendChild(doc);
// doc.className = "test";
// doc.setAttributeNode(att);
// doc.setAttribute("data" , "test");
// let user = document.getElementsByClassName("user")[0];
// console.log(user.lastElementChild);

// let userInput = document.querySelector("[name = username]");
// let ageInput =  document.querySelector("[name = userage]");

// document.forms[0].onsubmit = function(event)
// {
//     let userValid = false;
//     let ageVaild = false;
//     if(userInput.value !== "" && userInput.value.length <=10)
//     {
//         userValid = true;
//         console.log("4");
//     }
//     if(ageInput.value !== "")
//     {
//         ageValid = true;
//         console.log("1");
//     }
//     else if(userValid === false || ageVaild === false)
//     {
//         event.preventDefault();
//         console.log("3");
//     }
// }

// let btn = document.getElementById("btn");
// btn.onmouseleave = function()
// {
//     console.log("hello world");
// }
// btn.addEventListener("click" , ()=> console.log("hi"));
// window.onload = function()
// {
//     document.getElementsByTagName("a").click();
// }

// let x = document.getElementById("user").cloneNode(false);
// // x.classList.toggle("show");
// // x.append("hello")
// document.body.appendChild(x);

// let num = document.getElementById("num");
// function showCount()
// {
//     num.innerHTML -= 1;
//     if (num.innerHTML === "0")
//     {
//         clearInterval(counter);
//     }
// }
// let counter = window.setInterval(showCount,1000);


// let doc = document.createElement("p");
// console.log(doc);
// let text = document.createTextNode("hello Ahmed");
// doc.appendChild(text);
// document.body.appendChild(doc);
// let att = document.createAttribute("data");
// doc.setAttribute("data","test");
// doc.setAttributeNode(att);
// doc.className = "show";

// let doc = document.getElementsByClassName("par")[0];
// console.log(doc.lastChild)

// let nameInput = document.querySelector("[name=username]");
// let ageInput = document.querySelector("[name=userage]");

// document.forms[0].onsubmit = function(event)
// {
//     let nameValid = false;
//     let ageValid = false;
//     if(nameInput.value !== "" && nameInput.value.length <= 10)
//     {
//         nameValid = true;
//     }
//     if(ageInput.value !== "")
//     {
//         ageValid = true;
//     }
//     else if(nameValid === false || ageValid === false)
//     {
//         event.preventDefault();
//     }    
// }
// document.getElementById("btn").onmouseleave = function()
// {
//     document.write("Hello EvertyBody");
// }
// let btn = document.getElementById("btn");
// btn.addEventListener("click" , function()
// {
//     alert("Hello");
// })
// window.onscroll = function()
// {
//     console.log("scrolling");
// }
// let x = document.querySelector("div").cloneNode(false);
// x.classList.add("data");
// x.append(" Hello again ");
// console.log(x.nextElementSibling);
// document.body.appendChild(x);

// let num = document.getElementById("num");
// function showCount()
// {
//     num.innerHTML -= 1;
//     if(num.innerHTML === "0")
//         {
//             clearInterval(count);
//         }

// }
// let count = setInterval(showCount,500);
