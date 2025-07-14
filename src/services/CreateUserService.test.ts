import {getConnection} from 'typeorm';
import createConnection from '../database';
import { CreateUserService } from './CreateUserService';


describe('CreateUserService', () => {
     beforeAll(async () =>{
        const connection = await createConnection();
        await connection.runMigrations();
     })

     afterAll(async () => {
        const connection = getConnection(); 
        await connection.query('DELETE FROM usuarios');
        await connection.close();
     })

     it('Deve retornar o id do usuário criado', async () => {
        const createUserService = new CreateUserService();

        const result = await createUserService.execute({
            id: '7137462a-1802-419e-8f02-db12aba45219', 
            nome: 'John Doe',
            email: 'john.doe@example.com'
        })

        console.log(result);

        expect(result).toHaveProperty('id');
     })
})
