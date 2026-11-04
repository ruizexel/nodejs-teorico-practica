const { readFile} = require('fs');

const {promisify} = require('util');


const readFilePromise = promisify(readFile);

// const getText = (pathFile) => {
//     return new Promise(function (resolve, rejeact){
//         readFile(pathFile, 'utf-8', (err, date) => {
//             if(err){
//             rejeact(err);
//             }

//             resolve(date);
//         });
//     });
// }

// sirve para cuando la funcion sale bien el then
// en el caso que haya un error es con err
// getText('./data/four.txt').then( (data) => console.log(data) ).catch( (err) => console.log(err) )

async function read(){

    try{
        

        const result = await readFilePromise('./data/first.txt', 'utf-8');

        console.log(result)
    }catch(err){
        console.log(err.name);
        console.log(err.message);
    }
}

read();