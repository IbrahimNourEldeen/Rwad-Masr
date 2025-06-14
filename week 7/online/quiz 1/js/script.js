let lists=document.getElementsByClassName('list')
let Left=document.getElementById('Left')
let Right=document.getElementById('Right')

for(i of lists){
    i.addEventListener('dragstart',function(ele){
        let selectedEle =ele.target
        Right.addEventListener('dragover',function(ele){
            ele.preventDefault()
        })
        Right.addEventListener('drop',function(ele){
            Right.appendChild(selectedEle)
            selectedEle=null
        })


        Left.addEventListener('dragover',function(ele){
            ele.preventDefault()
        })
        Left.addEventListener('drop',function(ele){
            Left.appendChild(selectedEle)
            selectedEle=null
        })
    })
}