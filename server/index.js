const express = require('express');
const app = express();
const server = require('http').createServer(app);
const port = 8000;

const bodyParser = require('body-parser');

const root = __dirname.replace("server","dist")

const api = require('./modules/api').api;

app
	.use(express.static(root))
	.use(bodyParser.urlencoded({extended: true}))
	.use(bodyParser.json())

app
	.get('/todos', api.getItems)
	.post('/todos', api.addItem )
	.delete('/todos/:id', api.deleteItem )

server.listen(port);