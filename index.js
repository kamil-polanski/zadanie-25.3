const express = require('express');
const fs = require('fs');
const app = express();


app.get('/', (req, res) => {
    console.log('Otrzymałem żądanie GET do strony głównej');
    res.send(`Identyfikator, który został dopisany to  ${req.params.id}`);
});


app.post('/', (req, res) => {
    console.log('Otrzymałem żądanie POST do strony głównej');
    res.send('Hello POST!');
});

app.delete('/del_user', (req, res) => {
    console.log('Otrzymałem żądanie DELETE do strony /del_user');
    res.send('Hello DELETE!');
});

app.get('/list_user', (req, res) => {
    console.log('Otrzymałem żądanie GET do strony /list_user');
    res.send('Strona z listą użytkowników!');
});

app.post('/ab*cd', (req, res) => {
    console.log('Otrzymałem żądanie GET do strony /ab*cd');
    res.send('Wzór pasuje');
});

app.get('/getnote', (req, res) => {
    console.log('pobbieram get note');
    fs.readFile('./test.json', 'utf8', (err, data) => {
        if (err) throw err;
        stringifyFile = data
        res.send(data);
    });
});

app.use(function(req, res, next) {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});

app.listen(9000);