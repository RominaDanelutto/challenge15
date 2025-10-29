let estudiantes = [
  { id: 1, nombre: "Ana", edad: 20, promedio: 8.5, carrera: "Ingeniería" },
  { id: 2, nombre: "Carlos", edad: 22, promedio: 7.2, carrera: "Medicina" },
  { id: 3, nombre: "Chancho", edad: 2, promedio: 9.1, carrera: "Ingeniería" },
  { id: 4, nombre: "Luis", edad: 21, promedio: 6.8, carrera: "Derecho" },
  { id: 5, nombre: "Sofía", edad: 20, promedio: 8.9, carrera: "Ingeniería" }
];

let destacados = estudiantes.filter(e => e.promedio > 8.0);
console.log("Estudiantes con promedio mayor a 8:", destacados);

let nombresCarreras = estudiantes.map(e => ({ nombre: e.nombre, carrera: e.carrera }));
console.log("Nombres y carreras:", nombresCarreras);

let ingenieria = estudiantes.filter(e => e.carrera === "Ingeniería" && e.edad > 19);
console.log("Estudiantes de Ingeniería mayores de 19:", ingenieria);

let estudianteID3 = estudiantes.find(e => e.id === 3);
console.log("Estudiante con ID 3:", estudianteID3);
