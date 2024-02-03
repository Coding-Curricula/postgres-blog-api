const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { testConnection } = require('./db/conn');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8080;

// test DB connection
testConnection();

app.get('/health', (req, res) => {
    res.send('I am alive')
});

// import routes
const postRoutes = require('./routes/postRoutes');
const replyRoutes = require('./routes/replyRoutes');
const topicRoutes = require('./routes/topicRoutes');

// use routes
app.use('/topics', topicRoutes.modules);
app.use('/posts', postRoutes.modules);
app.use('/replies', replyRoutes.modules);

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});