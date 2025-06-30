// import express, { Request, Response, Router } from 'express';

// const server = express();
// const routes = Router();

// routes.get('/', (req: Request, res: Response) => {
//   res.json({
//     message: 'Hello World'
//   });
// });

// server.use(routes);

// server.listen(5000, () => {
//   console.log('Server is running on port 5000');
// });

// ou

import express from 'express';
import { router } from './routes';

const server = express();

server.use(express.json()); // Permite que o servidor entenda JSON no corpo das requisições
server.use(router);

server.listen(5000, () => {
  console.log('Server rodando na porta 5000 http://localhost:5000/');
});














//GET - Ler 
//POST - Criar
//PUT - Atualizar
//PATCH - Atualizar uma informação específica
//DELETE - Remover
//UPDATE - Atualizar