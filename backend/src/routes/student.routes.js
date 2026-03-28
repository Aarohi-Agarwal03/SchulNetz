import express from 'express';
import { getStudents, addStudent, deleteStudent } from '../controllers/student.controller.js';
import { validateStudent } from '../middlewares/validate.js';

const router = express.Router();

router.get('/students', getStudents);
router.post('/students', validateStudent, addStudent);
router.delete('/students/:id', deleteStudent);

export default router;