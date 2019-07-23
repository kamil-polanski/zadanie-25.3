const express = require('express');
const fs = require('fs');
const app = express();
let stringifyFile;


app.get('/getnote', (req, res) => {
    console.log('pobbieram get note');
    fs.readFile('./test.json', 'utf8', (err, data) => {
        if (err) throw err;
        stringifyFile = data
        res.send(data);
    });
});

app.post('/updateNote/:note', (req, res) => {
    console.log('wysyłam note!');
    stringifyFile += req.params.note;
    fs.writeFile('./test.json', stringifyFile, (err) => {
        if (err) throw err;
        console.log('file updated');
    });
});

app.use((req, res, next) => {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});

app.listen(9000);