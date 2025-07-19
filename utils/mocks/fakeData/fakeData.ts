import { CreateUserService } from "../../../src/services/CreateUserService";
import {v4 as uuid} from 'uuid';

class FakeData {
    async execute(){
        const createUserService = new CreateUserService();

        await createUserService.execute({
            id: uuid(),
            nome:'Algum usuário',
            email: 'algumusuario@gmail.com',
        })

        await createUserService.execute({
            id: uuid(),
            nome:'Outro usuário',
            email: 'outrousuario@gmail.com',
        })
    }
}

export {FakeData};