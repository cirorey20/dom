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

    // Agregar el botón a la tarea
    nuevaTarea.appendChild(deleteButton); 

    if (!textTask.value == "") {
        console.log(true);
        newTask.appendChild(nuevaTarea); //agregar tareas nuevas
        textTask.value = "";
    } else {
        console.log(false);
    }
    
    //Eliminar tarea
    deleteButton.addEventListener('click', () => {
        newTask.removeChild(nuevaTarea);
    })
});




// for(taks of listTasks.children) {
//     console.log(taks.innerText);
// }