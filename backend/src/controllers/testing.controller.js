import pool from "../config/db.js";

export const testingSave = async (req, res) => {
    const { name, middleName, lastName } = req.body;

    try {
        const result = await pool.query(
            `INSERT INTO testing (name, middle_name, last_name) 
             VALUES ($1, $2, $3) 
             RETURNING id, name, middle_name, last_name`,
            [name, middleName, lastName]
        );

        const newData = result.rows[0];

        res.status(201).json({
            success: true,
            message: "Data saved successfully",
            data: newData
        });
    } catch (error) {
        console.error("Error saving data:", error);
        res.status(500).json({ 
            success: false, 
            message: error.message 
        });
    }
};

export const getTestingAll = async (req, res) => {
    try {
        const result = await pool.query(`SELECT * FROM testing ORDER BY id DESC`);
        res.json(result.rows);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ 
            success: false, 
            message: "Error fetching data" 
        });
    }
};

export default { testingSave, getTestingAll };