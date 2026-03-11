export default class Storage {

static get(){

return JSON.parse(localStorage.getItem("tasks")) || [];

}

static save(tasks){

localStorage.setItem("tasks",JSON.stringify(tasks));

}

}