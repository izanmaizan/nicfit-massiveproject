<<<<<<< HEAD
import mysql from 'mysql2/promise'
import dotenv from 'dotenv'

dotenv.config()

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'nicfit',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
})

export default pool
=======
import { Sequelize } from 'sequelize'
const db = new Sequelize('nicfit', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
})

export default db
>>>>>>> 4600dbc6ebf83b0c9020f625487e4753deb1ecc5
