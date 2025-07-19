import {Router, Request, Response} from 'express';
import { CreateUserController } from './controllers/CreateUserController';
import { GetAllUserController } from './controllers/GetAllUserController';
import { UpdateUserController } from './controllers/UpdateUserController';

const router = Router();
const createUserController = new CreateUserController();
const getAllUserController = new GetAllUserController();
const updateUserController = new UpdateUserController();

router.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Bem vindo a API' });
});


router.post('/usuarios', createUserController.handle.bind(createUserController));
router.get('/usuarios', getAllUserController.handle.bind(getAllUserController));
router.patch('/usuario', updateUserController.handle.bind(updateUserController));

export { router }