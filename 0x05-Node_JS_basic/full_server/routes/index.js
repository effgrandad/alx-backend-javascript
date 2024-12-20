import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';
import express from 'express';

const router = express.Router();

/* Route for homepage*/
router.get('/', AppController.getHomepage);

/* Routes for students*/
router.get('/students', StudentsController.getAllStudents);
router.get('/students/:major', StudentsController.getAllStudentsByMajor);

export default router;
