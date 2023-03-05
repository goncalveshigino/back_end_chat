const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const cors = require('cors');
const logger = require('morgan');


const port = process.env.PORT || 3000;
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cors());

app.disable('x-powered-by');

app.set('port', port);

server.listen(3000, '192.168.43.135' || 'localhost', function(){
    console.log('Aplicacao de nodejs' + port + 'Inciada...')
});

app.get('/', (req, res) => {
    res.send('Rota raiz do back_end')
});

app.get('/test', (req, res) => {
    res.send('Rota Test')
});

app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500).send(err.stack)
})