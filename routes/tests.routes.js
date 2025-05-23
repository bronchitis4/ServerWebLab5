import express from 'express';
import TestsController from '../controllers/tests.controller.js'; 
import verifyFirebaseToken from '../middleware/verifyToken.js';

const router = express.Router();
const testsController = new TestsController();

router.get('/', verifyFirebaseToken, testsController.saveTestResult);
router.post('/average/:email', verifyFirebaseToken, testsController.getAverageScore);

export default router;