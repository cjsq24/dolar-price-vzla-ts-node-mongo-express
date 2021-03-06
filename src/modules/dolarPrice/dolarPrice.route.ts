import { Router } from 'express';
import controller from './dolarPrice.controller';

const router = Router();

router.get('/get-actual-price', controller.getActualPrice);
router.post('/create', controller.create);
router.post('/test', controller.testingScraping);

export default router;
