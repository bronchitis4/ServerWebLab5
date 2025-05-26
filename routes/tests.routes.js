import express from 'express';
import TestsController from '../controllers/tests.controller.js'; 
import verifyFirebaseToken from '../middleware/verifyToken.js';

const router = express.Router();
const testsController = new TestsController();


router.post('/', testsController.saveTestResult);
router.get('/average/:email', testsController.getAverageScore);


export default router;
