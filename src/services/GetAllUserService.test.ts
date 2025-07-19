import createConnection from '../database';
import { getConnection } from 'typeorm';
import { GetAllUserService } from './GetAllUserService';
import { FakeData } from '../../utils/mocks/fakeData/fakeData';



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

    const fakeData = new FakeData();
    
    it('Deve retornar todos os usuários cadastrados', async () => {

        await fakeData.execute()
        
        const expectedResponse = [
            {
                nome: 'Algum usuário',
                email: 'algumusuario@gmail.com',
            },
            {
                nome: 'Outro usuário',
                email: 'outrousuario@gmail.com'
            }
        ]
        const getAllUserService = new GetAllUserService();

        const result = await getAllUserService.execute();

        expect(result).toMatchObject(expectedResponse);
    })
})
