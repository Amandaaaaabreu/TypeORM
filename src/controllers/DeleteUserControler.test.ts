import { UpdateUserController } from "./UpdateUserController";
import { createConnection } from 'typeorm';
import { getConnection } from 'typeorm';
import { makeMockRequest } from "../../utils/mocks/mockRequest";
import { DeleteUserControler } from "./DeleteUserController";
import { FakeData } from '../../utils/mocks/fakeData/fakeData';
import { makeMockReponse } from "../../utils/mocks/mockResponse";

describe(DeleteUserControler, ()=> {
           beforeAll(async () =>{
        const connection = await createConnection()
        connection.runMigrations();
    })

    afterAll(async ()=> {
        const connection = getConnection(); 
        connection.close();
    })

    const fakeData = new FakeData();

    it('Deve retornar 204 quando usuário for deletado', async ()=> {
        const mockUser = await fakeData.createUser();

        const deleteUserController = new DeleteUserControler();

        const request = makeMockRequest({
            params: {
                id: mockUser.id
            }
        })

        const response = makeMockReponse()

        await deleteUserController.handle(request, response);

        expect(response.state.status).toBe(204);


        
    })
})