export default class UI{

static message(text){

const box =
document.querySelector(".js-message");

box.textContent = text;

box.classList.add("message-holder-show");

setTimeout(()=>{
box.classList.remove(
"message-holder-show"
)
},3000)

}

static updateStats(tasks){

document.querySelector(".js-total")
.textContent = tasks.length;

}

}