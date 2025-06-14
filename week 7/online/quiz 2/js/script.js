const accessKey='O1ksNJRWueptvUS5X-TA4TMTZXIRPFKdqLIdlB-NFe0'
const search=document.querySelector('#searchInput')
const searchResult=document.querySelector('#searchResult')
const form=document.querySelector('#form')
const showMore=document.getElementById('showMore')


let keyword='car'
let page=1
async function getData(){
    keyword=search.value
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`
    let res=await(await fetch(url)).json();
    let data=res.results
    console.log (data)
    data.map(i=>{
        let img=document.createElement('img')
        img.src=i.urls.small
        img.style.width='33.333%'
        img.style.height='250px'
        searchResult.appendChild(img)
    })   
    showMore.style.display='block'
}
form.addEventListener('submit',e=>{
    e.preventDefault()
    getData();
})

showMore.addEventListener('click',()=>{
    page++;
    getData()
})