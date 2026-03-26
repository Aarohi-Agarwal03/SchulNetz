import pool from "./db.js";

const initDatabase = async () => {
  try {
    console.log("🚀 Running database initialization...");

    // Create testing table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS testing (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        middle_name VARCHAR(100),
        last_name VARCHAR(100),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    // Optional: Add some dummy data if table is empty
    const countResult = await pool.query("SELECT COUNT(*) FROM testing");
    if (parseInt(countResult.rows[0].count) === 0) {
      await pool.query(`
        INSERT INTO testing (name, middle_name, last_name) 
        VALUES 
          (Rahul, Kumar, Sharma),
          (Priya, Singh, Rathore),
          (Amit, Kumar, Verma)
      `);
      console.log("✅ Dummy data inserted into testing table");
    }

    console.log("✅ Database initialization completed successfully!");

  } catch (error) {
    console.error("❌ Database initialization failed:", error);
  }
};

export default initDatabase;
