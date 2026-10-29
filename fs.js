const fs = require('fs');

// // Manera de leer un archivo ya haciendo la traduccion a utf-8
// const first = fs.readFileSync('./data/first.txt', 'utf-8');

// //  manera de leer pero aparece en formato buffer
// const second = fs.readFileSync('./data/second.txt');


// console.log(first);

// // manera de imprimir la lectura haciendo la transcripcion a utf-8
// console.log(second.toString());


// // manera de crear un archivo, ademas de poner la ruta, donde desea que se guarde y el contenido
// fs.writeFileSync('./data/third.txt', 'este es un tercer archivo');

// const title = "Klk";

// // Manera de crear o sobreescribir archivos

// //fs.writeFileSync('./data/four.txt', title);


// // manera de agregar contenido a un archivo agregado

// fs.writeFileSync('./data/four.txt', title, {
//     flag: 'a'
// });

// codigo syncrono


// pesimo, para mantenibilidad y comprension a futuro

fs.readFile('./data/first.txt', "utf-8",(error, date) => {
    if(error){
        console.log(error);
    }
    console.log(date);

    fs.readFile('./data/second.txt', "utf-8",(error, date) => {
        if(error){
            console.log(error);
        }
        console.log(date);

        fs.writeFile('./data/first.txt', 'archivo creade desde fs', (err, date) => {
            if(err){
                console.log(err);
            }

            console.log(date);
        });
    });
});