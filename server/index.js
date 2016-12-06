const express = require('express');
const app = express();
const server = require('http').createServer(app);
const port = 8000;

const bodyParser = require('body-parser');

const root = __dirname.replace("server","dist")

console.log("root = " + root)

// const api = require('./modules/api');

let todos =  [
    {id : 1, title : "Donner à manger au chien"},
    {id : 2, title : "Aller à la gym"},
    {id : 3, title : "Appeler ma grand mère"},
  ]

let lastId = 3;

app
	.use(express.static(root))
	.use(bodyParser.urlencoded({extended: true}))
	.use(bodyParser.json())

app
	.get('/todos', 	(req,res) => {
		res.send(todos)
	})
	.post('/todos', (req,res) => {
		const todo = { id : ++lastId, title : req.body.title.trim()};
		console.log("Received todo = ", req.body)
		todos.push(todo);
		res.send(todo);
	})
	.post('/delete', (req,res) => {  // Cannot pass id with DELETE method (??)
		const id = req.body.id;
		console.log("Received id to delete = ", id)
		todo = todos.find( todo => todo.id === id )
		todos = todos.filter(todo => todo.id !== id);
		res.send(todo)
	})


server.listen(port);
