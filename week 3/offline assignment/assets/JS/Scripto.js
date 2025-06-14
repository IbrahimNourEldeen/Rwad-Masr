let boxContainer=document.getElementById('boxContainer');
let imageBox=document.getElementsByClassName('imageBox')
let Bast=document.getElementById('Bast')
let Next=document.getElementById('Next')
let xMark=document.getElementById('xMark')


xMark.addEventListener('click',function(){
    boxContainer.classList.replace('d-flex','d-none')
})
for(var i=0; i<imageBox.length; i++){
    imageBox[i].addEventListener('click',function(){
        boxContainer.classList.replace('d-none','d-flex')
    })
}
