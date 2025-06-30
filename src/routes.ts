import {Router, Request, Response} from 'express';
import { CreateUserController } from './controllers/CreateUserController';

const router = Router();
const createUserController = new CreateUserController();

router.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Bem vindo a API' });
});


router.get('/usuarios', createUserController.handle);

export { router }