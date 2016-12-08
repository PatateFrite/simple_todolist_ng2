const express = require('express');
const app = express();
const server = require('http').createServer(app);
const port = 8080;

const bodyParser = require('body-parser');

const root = __dirname.replace("server","dist")

const api = require('./modules/api').api;

const log = (req, res, next) => {
	const condition = true;
	if(condition){
		next();
	} else {
		res.status(403).end();
	}
}

app
	.use(express.static(root))
	.use(bodyParser.urlencoded({extended: true}))
	.use(bodyParser.json())

app
	.get('/todos', log , api.getItems)
	.post('/todos', log, api.addItem )
	.delete('/:id', log, api.deleteItem )

server.listen(port, ()=>{
	console.log("Listnening on port " + port)
});

