export default class Task{

constructor(name,dueDate,priority,category){

this.id = Date.now();

this.name = name;

this.created =
new Date().toISOString().split("T")[0];

this.dueDate = dueDate;

this.priority = priority;

this.category = category;

this.completed = false;

this.completedDate = null;

}

toggle(){

this.completed = !this.completed;

if(this.completed){

this.completedDate =
new Date().toISOString().split("T")[0];

}

}

}