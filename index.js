const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log('Otrzymałem żądanie GET do strony głównej');
    res.send('Hello GET!');
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

const server = app.listen(9000, function() {
    console.log('Przykładowa aplikacja nasłuchuje na http://localhost:9000');
});