import { Request, Response } from 'express';
import { CreateUserService } from '../services/CreateUserService';

// Vai ter as vaidações e regras de negócio
// Vai receber a requisição, chamar o service e devolver uma resposta

class CreateUserController{
    handle (req: Request, res: Response){

       const createUserService = new CreateUserService();

        const name = req.body.name;
        const email = req.body.email;
        const profissao = req.body.profissao;

       if(name.length === 0 || email.length === 0 || profissao.length === 0){
        return res.status(400).json({mensagem: 'Preencha todos os campos!'});
       }

       const user = createUserService.execute({name, email, profissao});

       res.status(201).json({user});   
    }
}

export { CreateUserController };