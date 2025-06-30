import { Request, Response } from 'express';

class CreateUserController{
    handle (req: Request, res: Response){
    res.json([
        { nome: 'Amanda' },
        { nome: 'Pedro Lucas' },
        { nome: 'Giovanna' }
    ]);
}
}

export { CreateUserController };