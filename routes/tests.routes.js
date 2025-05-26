import express from 'express';
import TestsController from '../controllers/tests.controller.js'; 
import verifyFirebaseToken from '../middleware/verifyToken.js';

const router = express.Router();
const testsController = new TestsController();


router.post('/', verifyFirebaseToken, testsController.saveTestResult);
router.get('/average/:email', verifyFirebaseToken, testsController.getAverageScore);


export default router;
