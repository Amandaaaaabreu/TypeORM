import { Result } from './../../node_modules/@jest/reporters/node_modules/glob/dist/commonjs/glob.d';
import { CreateUserController } from './CreateUserController';


describe('CreateUserController', () => {
    it ('Deve retornar o id do usuário criado', () =>{
        const createUserController = new CreateUserController();

        const result = createUserController.handle()
    })
   
}) 