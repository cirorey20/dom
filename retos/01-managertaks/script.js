//capturar el imput de nueva tarea
let textTask = document.getElementById('inputTask');

let newTask = document.getElementById('newTask');
let addNewStaks = document.getElementById('addbutton');

addNewStaks.addEventListener('click', () => {
    const nuevaTarea = document.createElement('li');
    console.log(textTask.value);
    nuevaTarea.textContent= textTask.value;

    newTask.appendChild(nuevaTarea);
});

