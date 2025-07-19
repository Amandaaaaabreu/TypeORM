import {Router, Request, Response} from 'express';
import { CreateUserController } from './controllers/CreateUserController';
import { GetAllUserController } from './controllers/GetAllUserController';
import { UpdateUserController } from './controllers/UpdateUserController';
import { DeleteUserControler } from './controllers/DeleteUserController';

const router = Router();
const createUserController = new CreateUserController();
const getAllUserController = new GetAllUserController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserControler();

router.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Bem vindo a API' });
});


router.post('/usuarios', createUserController.handle.bind(createUserController));
router.get('/usuarios', getAllUserController.handle.bind(getAllUserController));
router.patch('/usuario', updateUserController.handle.bind(updateUserController));
router.delete('/usuario/:id', deleteUserController.handle.bind(deleteUserController));

export { router }