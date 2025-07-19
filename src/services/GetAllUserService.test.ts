import createConnection from '../database';
import { getConnection } from 'typeorm';
import {v4 as uuid} from 'uuid';
import { GetAllUserService } from './GetAllUserService';
import { CreateUserService } from './CreateUserService';



describe('GetAllUserService', () => {

    beforeAll(async () => {
    const connection = await createConnection();
    await connection.runMigrations();
    //await connection.close();
    });

    afterAll(async () => {
        const connection = getConnection();
        await connection.query('DELETE FROM usuarios');
        await connection.close();
    
    })
    
    it('Deve retornar todos os usuários cadastrados', async () => {
        
        const createUserService = new CreateUserService();

        await createUserService.execute({
            id: uuid(),
            nome: 'Algum usuário',
            email: 'usuario@exemplo.com'
        })

        await createUserService.execute({
            id: uuid(),
            nome: 'Outro usuário',
            email: 'usuario@exemplo.com'
        })

        const expectedResponse = [
            {
                nome: 'Algum usuário',
                email: 'usuario@exemplo.com'
            },
            {
                nome: 'Outro usuário',
                email: 'usuario@exemplo.com'
            }
        ]
        const getAllUserService = new GetAllUserService();

        const result = await getAllUserService.execute();

        expect(result).toMatchObject(expectedResponse);
    })
})
