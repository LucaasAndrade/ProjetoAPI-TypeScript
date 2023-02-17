import express from 'express';

const server = express() ;

server.get('/', (req, resp) => {
    return resp.send('Olá, Dev!');
});

interface Teste {

}

export { server };