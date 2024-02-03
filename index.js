const express = require('express');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 8080;

app.get('/health', (req, res) => {
    res.send('I am alive')
});

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});