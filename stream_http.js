const http = require('http');
const {createReadStream} = require('fs'); 


const server = http.createServer( (request, response) => {
    const fileStream = createReadStream('./data/bigfile.txt', {
        encoding: 'utf-8'
    });

    fileStream.on('data', (chunck) => {
        fileStream.pipe(response);
    });

    fileStream.on('error', error => {
        console.log(error);
    });

    response.end();
});

server.listen();
console.log(`server port ${3000}`);