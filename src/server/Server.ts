
import express from 'express'

const server = express();

server.get('/', (req, resp) => {
    resp.send('Olá, Dev!');
});


export default server;