const path = require('path');

const filePath = path.join('/public', 'dist', '/styless', 'main.css');

// Me devuelve el archivo
console.log(path.basename(filePath))

// Me devuelve la ruta
console.log(path.dirname(filePath));

// Me parsea y me lo entrega en un objecto
console.log(path.parse(filePath));

// Se encarga de completar la ruta
console.log(path.resolve('dist'));