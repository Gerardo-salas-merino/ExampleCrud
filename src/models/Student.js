const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Student = sequelize.define('student', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    }
    //degree ID
    // countryID
});

module.exports = Student;