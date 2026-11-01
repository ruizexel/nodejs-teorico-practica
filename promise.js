const { readFile} = require('fs');

const getText = (pathFile) => {
    return new Promise(function (resolve, rejeact){
        readFile(pathFile, 'utf-8', (err, date) => {
            if(err){
            rejeact(err);
            }

            resolve(date);
        });
    });
}

// sirve para cuando la funcion sale bien el then
// en el caso que haya un error es con err
getText('./data/four.txt').then( (data) => console.log(data) ).catch( (err) => console.log(err) )