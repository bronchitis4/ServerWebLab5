import express from 'express';
import EventsController from '../controllers/events.controller.js'; 

const router = express.Router();
const eventsController = new EventsController();

router.get('/main-events-list', eventsController.getMainEventsList);
router.get('/events-info', eventsController.getEventsInfo)
router.get('/events', eventsController.getEvents)
export default router;