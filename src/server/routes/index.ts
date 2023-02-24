import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

const route = Router();


route.get('/', (req, resp) => {
    try {
        return resp.send('Olá, Dev!');
    } catch (err: any) {
        resp.status(StatusCodes.BAD_REQUEST).send({
            erro: err.message
        });
    }
});

route.post('/teste', (req, resp) => {
    const {teste}  = req.body;
    console.log(teste); 
    resp.send('OK');
});

export { route };