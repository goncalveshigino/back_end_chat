const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const cors = require('cors');
const logger = require('morgan');


const users = require('./routes/users_routes');


const port = process.env.PORT || 3000;
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cors());

app.disable('x-powered-by');

app.set('port', port);

//Chamando as rotas
users(app)

server.listen(3000, '192.168.43.135' || 'localhost', function(){
    console.log('Aplicacao de nodejs' + port + 'Inciada...')
});



app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500).send(err.stack)
})

module.exports = {
    app: app, 
    server: server
}