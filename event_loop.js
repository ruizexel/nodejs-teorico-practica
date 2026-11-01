const http = require('http');


const server = http.createServer( (request, response) => {
    if(request.url === '/'){
        response.write(`
            <h1>Servidor</h1>
            <p>Hola mundo</p>
            `);
        return response.end();
    }

    if(request.url === '/about'){


        // blocking code

        // for(let i = 0; i <= 100000; i++){
        //     console.log(Math.random() * i);
        // }

        response.write('Welcome to about');
        return response.end();
    }

    return response.end('Not found');

} )

server.listen(3000);
console.log('server on port 3000');