import { getConnection } from 'typeorm';
import  createConnection  from '../database';
import { Result } from './../../node_modules/@jest/reporters/node_modules/glob/dist/commonjs/glob.d';
import { CreateUserController } from './CreateUserController';
import {Request} from 'express';
import { makeMockReponse } from '../../utils/mocks/mockResponse';


describe('CreateUserController', () => {
    beforeAll(async () => {
        const connection = await createConnection();
        await connection.runMigrations();
    })

    afterAll(async () => {
        const connection = getConnection();
        await connection.query('DELETE FROM usuarios')
        await connection.dropDatabase();

    })

    const createUserController = new CreateUserController();

    const response = makeMockReponse();

    it ('Deve retornar status 201 quando o usuário for criado',  async() =>{
        const request = {
            body: {
                nome: 'Algum usuário', 
                email: 'email@email.com'
            }
        } as Request;

        await createUserController.handle(request, response);

        expect(response.state.status).toBe(201);

    })

    it('Deve retornar status 400 quando nome ou email não forem preenchidos', async () => {
         const request = {
            body: {
                nome: '', 
                email: ''
            }
        } as Request;

        await createUserController.handle(request, response);

        expect(response.state.status).toBe(400);
    })
    

   
}) 