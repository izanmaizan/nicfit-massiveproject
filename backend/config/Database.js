import { Sequelize } from 'sequelize'
const db = new Sequelize('nicfit', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
})

export default db
