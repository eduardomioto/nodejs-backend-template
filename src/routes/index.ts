import { Router } from 'express';
import templateRouter from './templateRoutes';

const router = Router();

router.use('/entities', templateRouter);

export default router;