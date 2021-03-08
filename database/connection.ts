import { Sequelize } from 'sequelize';

const db = new Sequelize('res-api-mysql', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    //logging: false
});

export default db;