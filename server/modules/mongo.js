const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
  	title: String,
  	created: {
   		type: Date,
    	default: Date.now
  	}
});

const Todo = mongoose.model('todo', todoSchema); // Todo est un modèle Mongoose.
												 // 'todo' indique à Mongoose d'utiliser la collection 'todos'
mongoose.connect('mongodb://localhost/todolist', (err) => {
	if (err) {return console.error("Error connecting to MongoDB!");}
});

module.exports = {
	Todo
}