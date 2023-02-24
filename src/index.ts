import { server } from './server/Server';

server.listen(process.env.PORT,
    () => console.log(`API rodando na porta ${process.env.PORT}`));