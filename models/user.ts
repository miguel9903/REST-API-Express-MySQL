import { DataTypes } from 'sequelize';
import db from '../database/connection';

const User = db.define('User', {
    name: {
        type: DataTypes.STRING
    },
    lastname: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    age: {
        type: DataTypes.NUMBER
    },
    status: {
        type: DataTypes.BOOLEAN
    }
});


export default User;