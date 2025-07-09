import  createConnection  from '../database';
import { Result } from './../../node_modules/@jest/reporters/node_modules/glob/dist/commonjs/glob.d';
import { CreateUserController } from './CreateUserController';
import {Request} from 'express';
import { makeMockReponse } from '../../utils/mocks/mockResponse';


describe('CreateUserController', () => {
    it ('Deve retornar o id do usuário criado',  async() =>{
        const connection = await createConnection();
        await connection.runMigrations();
        
        const createUserController = new CreateUserController();

        const request = {
            body: {
                nome: 'Algum usuário', 
                email: 'email@email.com'
            }
        } as Request;

        const response = makeMockReponse();

        const result =  await createUserController.handle(request, response);

        console.log(result);

    })

   
}) 