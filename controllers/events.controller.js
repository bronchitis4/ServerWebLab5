import { db } from "../config/dbConfig.js";

class EventsController {
    getMainEventsList = async (req, res) => {
        try {
            const snapshot = await db.collection('mainEventsList').get();
            const list = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));

            res.status(200).json({
                statusCode: 200,
                succesful: true,
                message: 'Головний список подій отримано',
                data: list
            });
        } catch (error) {
            console.error('Помилка при отриманні головного списку подій:', error);
            res.status(500).json({
                statusCode: 500,
                succesful: false,
                message: 'Помилка сервера при отриманні головного списку подій'
            });
        }
    }

    getEventsInfo = async (req, res) => {
        try {
            const snapshot = await db.collection('evenstInfo').get();
            const list = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));

            console.log(list);
            res.status(200).json({
                statusCode: 200,
                succesful: true,
                message: 'Інформація про події отримана',
                data: list
            });
        } catch (error) {
            console.error('Помилка при отриманні інформації про події:', error);
            res.status(500).json({
                statusCode: 500,
                succesful: false,
                message: 'Помилка сервера при отриманні інформації про події'
            });
        }
    }

    getEvents = async (req, res) => {
        try {
            const eventsCollection = await db.collection('events').get();
            const eventsInfoList = eventsCollection.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));

            res.status(200).json({
                statusCode: 200,
                succesful: true,
                message: "Події отримано",
                data: eventsInfoList
            })
        } catch (error) {
            console.error('Помилка при отриманні інформації про події:', error);
            res.status(500).json({
                statusCode: 500,
                succesful: false,
                message: 'Помилка сервера при отриманні інформації про події'
            });
        }
    }
}

export default EventsController;