import createConnection from '../database';
import { getConnection } from 'typeorm';
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
        await connection.query('DELETE FROM users');
        await connection.close();
    
    })

    
    it('Deve retornar todos os usuários cadastrados', async () => {

    })
})
