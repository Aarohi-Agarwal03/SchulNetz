import dotenv from 'dotenv';
dotenv.config();

import { Pool } from 'pg';

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    max: 20,
});

pool.on('error', (err) => {
    console.error('Database connection error:', err);
    process.exit(-1);
});

console.log('✅ Database connected successfully');

export default pool;