import Storage from "../data/storage.js";
import Task from "./Task.js";

export default class TaskManager{

constructor(){

this.tasks = Storage.get();

}

add(name,due,priority,category){

const task =
new Task(name,due,priority,category);

this.tasks.push(task);

this.save();

}

delete(id){

this.tasks =
this.tasks.filter(t=>t.id!==id);

this.save();

}

toggle(id){

const task =
this.tasks.find(t=>t.id===id);

task.toggle();

this.save();

}

edit(id,newName){

const task =
this.tasks.find(t=>t.id===id);

task.name = newName;

this.save();

}

save(){

Storage.save(this.tasks);

}

}