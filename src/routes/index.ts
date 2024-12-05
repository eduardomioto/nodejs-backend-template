import { Router } from 'express';
import templateRouter from './templateRoutes';

const router = Router();

router.use('/template', templateRouter);

export default router;