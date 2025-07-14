import { Request, Response } from 'express';
import {v4 as uuid} from 'uuid';
import { CreateUserService } from '../services/CreateUserService';

// Vai ter as vaidações e regras de negócio
// Vai receber a requisição, chamar o service e devolver uma resposta

class CreateUserController{
     async handle (req: Request, res: Response){

       const createUserService = new CreateUserService();

        const nome = req.body.nome;
        const email = req.body.email;
        const id = uuid();

       if(nome.length === 0 || email.length === 0){
        return res.status(400).json({mensagem: 'Nome e email são obrigatórios'});
       }

       const user = await createUserService.execute({id, nome, email});

       res.status(201).json(user);   
    }
}

export { CreateUserController };