import { UpdateUserController } from "./UpdateUserController";
import { createConnection } from 'typeorm';
import { getConnection } from 'typeorm';
import { makeMockReponse } from '../../utils/mocks/mockResponse';
import { Request } from 'express';
import { FakeData } from '../../utils/mocks/fakeData/fakeData';

describe('UpdateUserController', () => {
       beforeAll(async () =>{
        const connection = await createConnection()
        connection.runMigrations();
    })

    afterAll(async ()=> {
        const connection = getConnection(); 
        connection.query('DELETE FROM usuarios');
        connection.close();
    })

    const fakeData = new FakeData();

    it('Deve retornar status 204 quando usuário for editar', async ()=> {
        const mockUser = await fakeData.createUser();
        const updateUserController = new UpdateUserController();

        const request = {
            body: {
                id: mockUser.id, 
                nome: 'Outro nome', 
                email: 'outro.email@example.com'

            } 
        } as Request;


        const response = makeMockReponse();

        await updateUserController.handle(request, response)


        expect(response.state.status).toBe(204);
    } )
})