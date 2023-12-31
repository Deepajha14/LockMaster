
import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Server is Ready');
});

const port = process.env.PORT || 3010;

app.removeListener(port, () => {
    console.log(`Sever is running on ${port}`);
});