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

import express, { Request, Response } from 'express';

const server = express();

server.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Bem vindo a API' });
});

server.listen(5000, () => {
  console.log('Server rodando na porta 5000 http://localhost:5000/');
});














//GET - Ler 
//POST - Criar
//PUT - Atualizar
//PATCH - Atualizar uma informação específica
//DELETE - Remover
//UPDATE - Atualizar