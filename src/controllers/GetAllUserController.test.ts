import { createConnection } from 'typeorm';
import { getConnection } from 'typeorm';
import { makeMockReponse } from '../../utils/mocks/mockResponse';
import { makeMockRequest } from '../../utils/mocks/mockRequest';
import { GetAllUserController } from "./GetAllUserController";
import { FakeData } from '../../utils/mocks/fakeData/fakeData';


describe('GetAllUserController', () => {
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

    it('Deve retornar status 200 quando pegar os todos os usuários', async ()=> {
        await fakeData.execute(); 

        const getAllUserController = new GetAllUserController();

        const request = makeMockRequest({});
        const response = makeMockReponse();

        await getAllUserController.handle(request, response);

        expect(response.state.status).toBe(200);



    })
})