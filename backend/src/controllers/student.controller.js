import pool from '../config/db.js';

// GET ALL STUDENTS
const getStudents = async (req, res) => {
    try {
        const result = await pool.query(`
            SELECT s.id, s.name, s.email, s.dob, s.gender, s.admission_date,
                   b.name AS branch,
                   c.name AS course
            FROM students s
            LEFT JOIN branches b ON s.branch_id = b.id
            LEFT JOIN courses c ON s.course_id = c.id
        `);

        res.json({
            success: true,
            students: result.rows
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

// ADD STUDENT
const addStudent = async (req, res) => {
    const { name, email, dob, gender, admission_date, branch_id, course_id } = req.body;

    try {
        const result = await pool.query(
            `INSERT INTO students 
            (name, email, dob, gender, admission_date, branch_id, course_id)
            VALUES ($1, $2, $3, $4, $5, $6, $7)
            RETURNING *`,
            [name, email, dob, gender, admission_date, branch_id, course_id]
        );

        res.status(201).json({
            success: true,
            message: 'Student added successfully',
            student: result.rows[0]
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

// DELETE STUDENT
const deleteStudent = async (req, res) => {
    const { id } = req.params;

    try {
        await pool.query('DELETE FROM students WHERE id = $1', [id]);

        res.json({
            success: true,
            message: 'Student deleted successfully'
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

export { getStudents, addStudent, deleteStudent };