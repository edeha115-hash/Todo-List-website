import TaskManager from "../scripts/taskManager.js";
import UI from "./UI.js";

const manager = new TaskManager();

const list =
document.querySelector(".js-task-list");

const nameInput =
document.querySelector(".js-name-input");

const dateInput =
document.querySelector(".js-date-input");

const priorityInput =
document.querySelector(".js-priority");

const categoryInput =
document.querySelector(".js-category");

const searchInput =
document.querySelector(".js-search");

const addBtn =
document.querySelector(".js-add-btn");

function render(tasks=manager.tasks){

list.innerHTML="";

UI.updateStats(tasks);

tasks.forEach(task=>{

const li =
document.createElement("li");

li.draggable = true;

if(task.completed){
li.classList.add("completed");
}

li.innerHTML = `
<div class="task-card priority-${task.priority}">

<div class="task-main">

<div class="task-title">${task.name}</div>

<div class="task-meta">

<span>Due: ${task.dueDate}</span>

<span>${task.category}</span>

</div>

</div>

<div class="task-actions">

<button class="complete">
<i class="fa fa-check"></i>
</button>

<button class="edit">
<i class="fa fa-pen"></i>
</button>

<button class="delete">
<i class="fa fa-trash"></i>
</button>

</div>

</div>
`;

li.querySelector(".delete")
.onclick = () => {

manager.delete(task.id);
render();
UI.message("Task deleted");

};

li.querySelector(".complete")
.onclick = () => {

manager.toggle(task.id);
render();

};

li.querySelector(".edit")
.onclick = () => {

const newName =
prompt("Edit task",task.name);

if(newName){

manager.edit(task.id,newName);

render();

}

};

list.appendChild(li);

});

}

addBtn.onclick = ()=>{

const name = nameInput.value.trim();

if(!name){
UI.message("Enter task name");
return;
}

manager.add(

name,

dateInput.value,

priorityInput.value,

categoryInput.value

);

nameInput.value="";
dateInput.value="";
categoryInput.value="";

render();

};

searchInput.addEventListener("input",()=>{

const value =
searchInput.value.toLowerCase();

const filtered =
manager.tasks.filter(task =>
task.name
.toLowerCase()
.includes(value)
);

render(filtered);

});

render();