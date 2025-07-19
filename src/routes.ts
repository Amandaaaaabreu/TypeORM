import {Router, Request, Response} from 'express';
import { CreateUserController } from './controllers/CreateUserController';
import { GetAllUserController } from './controllers/GetAllUserController';

const router = Router();
const createUserController = new CreateUserController();
const getAllUserController = new GetAllUserController();

router.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Bem vindo a API' });
});


router.post('/usuarios', createUserController.handle.bind(createUserController));

router.get('/usuarios', getAllUserController.handle.bind(getAllUserController));

export { router }