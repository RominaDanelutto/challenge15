let tareas = [
  { id: 1, descripcion: "Hacer ejercicio", completada: true, prioridad: "alta" }, 
  { id: 2, descripcion: "Estudiar JavaScript", completada: false, prioridad: "alta" }, 
  { id: 3, descripcion: "Comprar víveres", completada: false, prioridad: "media" }, 
  { id: 4, descripcion: "Llamar al médico", completada: true, prioridad: "baja" }, 
  { id: 5, descripcion: "Limpiar la casa", completada: false, prioridad: "media" }
];

let pendientes = tareas.filter(t => !t.completada);
console.log("Tareas pendientes:", pendientes);

let descripciones = tareas.map(t => t.descripcion);
console.log("Descripciones de tareas:", descripciones);

let altaPendientes = tareas.filter(t => t.prioridad === "alta" && !t.completada);
console.log("Tareas de alta prioridad pendientes:", altaPendientes);

let tareaJS = tareas.find(t => t.descripcion.includes("JavaScript"));
console.log("Tarea con 'JavaScript':", tareaJS);
