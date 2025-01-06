//capturar el imput de nueva tarea
let textTask = document.getElementById('inputTask');

//capturar el contenedor de lista de tareas
let newTask = document.getElementById('newTask');
let addNewStaks = document.getElementById('addbutton');

//agregar tareas nuevas
addNewStaks.addEventListener('click', () => {
    const nuevaTarea = document.createElement('li');
    // console.log(!textTask.value == "" ? false: true);
    nuevaTarea.textContent= textTask.value;

    if (!textTask.value == "") {
        console.log(true);
        newTask.appendChild(nuevaTarea); //agregar tareas nuevas
        textTask.value = "";
    } else {
        console.log(false);
    }
    
});

