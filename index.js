const express = require('express');
const app = express();

app.use(express.static('assets'));
app.use('/store',(req, res, next) => {
    console.log('Jestem pośrednikiem przy żądaniu do /store');
    next();
});

app.get('/', (req, res) => {
    res.sendFile('/index.html')
});

app.get('/store', (req, res) => {
    res.send('To jest sklep')
});

app.get('/userform', (req, res) => {
    const response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name
    };
    res.json(response);

});

const server = app.listen(9000, 'localhost', () => {
    const host = server.address().address;
    const port = server.address().port;
    console.log(`Przykładowa aplikacja nasłuchuje na http://${host}:${port}`);
});

app.use((req, res, next) => {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});