const form=document.querySelector('#search-box') 
const searchInput=document.querySelector('#searchInput')
const weatherIcon=document.querySelector('#weather-icon')
const temp=document.querySelector('#temp')
const city=document.querySelector('#city')
const humidity=document.querySelector('#humidity')
const speed=document.querySelector('#speed')


key='166be6bb90e82309befb282843f6941a'
let searchName;

async function getData() {
    if(searchInput.value==undefined){
        searchName='egypt'
    }
    searchName=searchInput.value
    const  url=`https://api.openweathermap.org/data/2.5/weather?q=${searchName}&appid=${key}&units=metric`
    const res=await(await fetch(url)).json()
    console.log(res)
    city.textContent=res.name
    temp.textContent=res.main.temp
    humidity.textContent=res.main.humidity
    speed.textContent=res.wind.speed
}

form.addEventListener('submit',e=>{
    e.preventDefault();
    getData();
})