const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.static('assets'))


app.get('/', (req, res) => {
    res.render('login');
});

app.get('/logon', (req, res) => {
    let name = req.query.name;
    if (name)
        res.render('logon', {
            name: name,
            url: "http://www.google.com"
        });
    else {
        res.render('err');
    }
});

app.listen(9000);
app.use((req, res, next) => {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});