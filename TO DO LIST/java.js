const taskInput = document.getElementById("taskInput");
const button = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

button.addEventListener("click",()=>{
    if(taskInput.value === ''){
        alert("enter input");
    }else{
        let li = document.createElement("li");
        li.innerHTML=taskInput.value;
        taskList.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    taskInput.value = "";
})
taskList.addEventListener("click",function(e){
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
    }
},false);
 
// function saveData(){
//     localStorage.setItem("data",taskList.innerHTML0;
// }
// function showtask(){
//     taskList.innerHTML= localStorage.getItem("data");
// }
// showtask();