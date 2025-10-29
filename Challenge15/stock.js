let productos = [
  { id: 1, nombre: "Laptop", precio: 1200, categoria: "tecnologia", stock: 15 },
  { id: 2, nombre: "Mouse", precio: 25, categoria: "tecnologia", stock: 0 },
  { id: 3, nombre: "Silla", precio: 150, categoria: "muebles", stock: 8 },
  { id: 4, nombre: "Monitor", precio: 300, categoria: "tecnologia", stock: 12 },
  { id: 5, nombre: "Teclado", precio: 45, categoria: "tecnologia", stock: 0 }
];

let disponibles = productos.filter(p => p.stock > 0);
console.log("Productos con stock:", disponibles);

let nombresPrecios = productos.map(p => ({ nombre: p.nombre, precio: p.precio }));
console.log("Nombres y precios:", nombresPrecios);

let tecnologiaConStock = productos.filter(p => p.categoria === "tecnologia" && p.stock > 0);
console.log("Tecnología con stock:", tecnologiaConStock);

let monitor = productos.find(p => p.nombre === "Monitor");
console.log("Producto encontrado:", monitor);
