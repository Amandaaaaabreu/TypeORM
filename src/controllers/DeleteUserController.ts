import { Request, Response } from 'express';
import { DeleteUserService } from '../services/DeleteUserService';


class DeleteUserControler {
    async handle(request: Request, response: Response){
        const deleteUserService = new DeleteUserService();
        
        const {id} = request.params;

        await deleteUserService.execute({id});

        return response.status(204).json({mensagem: 'Usuário deletado'});



    }
}

export { DeleteUserControler };