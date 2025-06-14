const btn=document.getElementById('btn')
const taskInput=document.getElementById('taskInput')
const tasksBox=document.getElementById('tasks')

btn.addEventListener('click',()=>{
    let Task=taskInput.value;
    if(!Task){
        return
    }else{
        addTask(Task)
    }
    taskInput.value=''
})

function addTask(Task){
    let li=document.createElement('li')
    li.innerHTML=Task;
    let span=document.createElement('span')
    span.innerHTML='\u00d7'
    li.appendChild(span)
    tasksBox.appendChild(li)
    
}
function saveTasks(){
    localStorage.setItem('tasks',tasksBox.innerHTML)
}
function showTasks(){
    tasksBox.innerHTML=localStorage.getItem('tasks')
}showTasks()
tasksBox.addEventListener('click',(e)=>{
    // console.log(e.target)
    if(e.target.tagName==='LI'){
        e.target.classList.toggle('checked')
        saveTasks()
    }else if(e.target.tagName==='SPAN'){
        e.target.parentElement.remove();
        saveTasks()
    }
})