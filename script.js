const inputBox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");
const filterTodo = document.getElementById("filter-todo");


let addTask =()=>{
    if(inputBox.value ===''){
        alert('You must write something!');
    }
    else{
        let li = document.createElement('li');
        li.innerHTML=inputBox.value;
        listcontainer.appendChild(li);
        let span =document.createElement('span');
        span.innerHTML="\u00d7";
        li.appendChild(span);       
    }
    inputBox.value = '';
    saveData();
}

listcontainer.addEventListener("click",function(e){
    if(e.target.tagName ==='LI'){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

let saveData=()=>{
    localStorage.setItem("data", listcontainer.innerHTML);
    
}
let showTask=()=>{
    localStorage.innerHTML=localStorage.getItem("data");
}
showTask();


// function all(){
//     const todos = listcontainer.childNodes;
//     todos.forEach(function(todo){
//         todo.style.display="flex";
//     })
// }

// function completed(){
//     const todos = listcontainer.childNodes;
//     todos.forEach(function(todo){
//         if(todo.classList.toggle("checked")){
//         todo.style.display="flex";
//         }  else{
//             todo.style.display="none";
//         } 
//     })
// }