const express = require('express');
require('dotenv').config();
const { testConnection } = require('./db/conn');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 8080;

// test DB connection
testConnection();

app.get('/health', (req, res) => {
    res.send('I am alive')
});

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});