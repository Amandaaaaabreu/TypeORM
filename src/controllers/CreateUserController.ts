import { Request, Response } from 'express';

class CreateUserController{
    handle (req: Request, res: Response){

       const name = req.body.name;
       res.json({mensagem: `Usuário ${name} criado com sucesso!`})    
}
}

export { CreateUserController };