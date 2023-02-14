
import server from "./server/Server";

const port:number = 5000

server.listen(port, () => console.log(`API rodando na porta ${port}`));