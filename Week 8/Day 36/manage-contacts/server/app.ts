const express = require('express');
const app = express();
const usersRouter = require('./usersRouter');

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello');
});

app.use('/users', usersRouter);

app.listen(4000, () => console.log('im running'));