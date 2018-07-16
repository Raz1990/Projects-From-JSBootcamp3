const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/', (req, res) => {
    try {
        const readFile = fs.readFile(__dirname + '/contacts.json');
        res.json(readFile);
    }catch (e) {
        console.log(e);
    }
});


app.post('/', async (req, res) => {
    try {

        const contact = {
            name: req.body.name
        };

        res.json(contact);

    } catch (e) {
        res.status(500).json({error: e.toString()});
    }
});

app.listen(4000, () => console.log('im running'));

module.exports = {app};