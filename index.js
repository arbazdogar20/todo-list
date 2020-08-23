document.addEventListener("DOMContentLoaded",function () {
    var el = document.querySelector('#submit');
    el.addEventListener('click', () => add(event));
});

function add(event){
    event.preventDefault();
    var item = document.createElement("div");
    var task = document.getElementById('task').value;
    item.innerHTML = `<div> <li> ${task} </li> </div>`;
    document.querySelector("#container").appendChild(item);
}