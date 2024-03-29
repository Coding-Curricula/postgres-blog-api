const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.POSTGRES_DATABASE_URL);

// test connection function
async function testConnection() {
    try {
        await sequelize.authenticate({ logging: false });
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = {
    testConnection,
    sequelize
}