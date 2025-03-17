const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.send('Welcome to the Node.js Backend!');
});

app.get('/api/message', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
