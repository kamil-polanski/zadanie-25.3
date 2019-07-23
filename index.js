const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello world!')
})

const server = app.listen(9000, function() {
    console.log('Przykładowa aplikacja nasłuchuje na http://localhost:9000');
});