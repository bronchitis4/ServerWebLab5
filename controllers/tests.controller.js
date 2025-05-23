import { db } from "../config/dbConfig.js";
class TestsController {
    saveTestResult = async (req, res) => {
        const { userId, testName, score, total } = req.body;

        if (!userId || !testName || typeof score !== 'number' || typeof total !== 'number') {
            return res.status(400).json({
                statusCode: 400,
                succesful: false,
                message: 'Неправильні або неповні дані'
            });
        }

        const percentage = Math.round((score / total) * 100);
        const passedAt = new Date();

        try {
            await db.collection('testResults').add({
                userId,
                testName,
                score,
                total,
                percentage,
                passedAt
            });

            res.status(201).json({
                statusCode: 201,
                succesful: true,
                message: 'Результат тесту збережено'
            });
        } catch (error) {
            console.error('Помилка при збереженні результату:', error);
            res.status(500).json({
                statusCode: 500,
                succesful: false,
                message: 'Не вдалося зберегти результат тесту'
            });
        }
    }

    getAverageScore = async (req, res) => {
        const userEmail = req.params.email;

        try {
            const snapshot = await db.collection('testResults')
                .where('userId', '==', userEmail)
                .get();

            if (snapshot.empty) {
                return res.status(200).json({
                    statusCode: 200,
                    succesful: true,
                    message: 'Результатів тестів немає',
                    data: { averagePercentage: null }
                });
            }

            let totalPercentage = 0;
            let count = 0;

            snapshot.forEach(doc => {
                const data = doc.data();
                if (typeof data.percentage === 'number') {
                    totalPercentage += data.percentage;
                    count++;
                }
            });

            const averagePercentage = count > 0 ? Math.round(totalPercentage / count) : null;

            res.status(200).json({
                statusCode: 200,
                succesful: true,
                message: 'Середній бал отримано',
                data: { averagePercentage }
            });

        } catch (error) {
            console.error('Помилка при отриманні середнього балу:', error);
            res.status(500).json({
                statusCode: 500,
                succesful: false,
                message: 'Помилка сервера при обробці запиту'
            });
        }
    }

}

export default TestsController;