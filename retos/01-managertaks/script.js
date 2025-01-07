//capturar el input de nueva tarea
let textTask = document.getElementById('inputTask');
//capturar el contenedor de lista de tareas
let newTask = document.getElementById('newTask');
//capturar el contenedor del botón para crear nueva tarea
let addNewStaks = document.getElementById('addbutton');

//agregar y eliminar tareas nuevas
addNewStaks.addEventListener('click', () => {
    // Crear la nueva tarea
    const nuevaTarea = document.createElement('li');
    nuevaTarea.textContent = textTask.value;

    // Crear botón de eliminar en la nueva tarea
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';

    // Agregar el botón de eliminar a la tarea
    nuevaTarea.appendChild(deleteButton);

    // Crear botón de marcar tarea como completada
    const checkButton = document.createElement('button');
    checkButton.textContent = 'Completada';

    // Agregar el botón de check a la tarea
    nuevaTarea.appendChild(checkButton);

    if (!textTask.value == "") { //valida si hay texto o no
        newTask.appendChild(nuevaTarea); //agregar tareas nuevas
        textTask.value = "";
    } else {
        console.log("El input está vacio");
    }

    //Eliminar tarea
    deleteButton.addEventListener('click', () => {
        newTask.removeChild(nuevaTarea);
    });

    //Completar tarea
    checkButton.addEventListener('click', () => {
        nuevaTarea.style.textDecorationLine = 'line-through';  // Tachado
        nuevaTarea.style.textDecorationStyle = 'solid';
    })
});




// for(taks of listTasks.children) {
//     console.log(taks.innerText);
// }