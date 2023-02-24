import express from 'express';
import 'dotenv/config';
import { route } from './routes';

const server = express() ;

server.use(express.json());
server.use(route);

export { server };