let newTask = document.getElementById('newTask');
let add = document.getElementById('add');

let addButton = addEventListener('click', () => {
    const nuevaTarea = document.createElement('p');
    console.log("newTask");
    nuevaTarea.textContent= "Nueva Tarea Agregada";

    newTask.appendChild(nuevaTarea);
});

