const http = require('http');

const server = http.createServer((request, response) => {

    console.log(request.url);

    if(request.url === '/'){
        response.write('Welcome to server');
        return response.end();
    }

    if(request.url === '/about'){
        response.write(`
            <h1>About</h1>
            <p>Klk hermano</p>
            <a href='/'>Volver al inicio</a>    
        `);
        return response.end();
    }

    response.write(`
        <h1>Not Found</h1>
        <p>esta pagina no se encontro</p> 
        <a href='/'> Volver a la pagina principal</a>
    `);
    response.end();
})

server.listen(3000);

console.log('servidor escuchando en el puerto 3000');