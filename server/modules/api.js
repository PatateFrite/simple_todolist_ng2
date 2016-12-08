
const Todo = require('./mongo').Todo

const api = {
	getItems : (req,res) => {
		Todo.find((err, docs) => {
			if(err) return console.log(err);
			res.json(docs);
		})
	},
	deleteItem : (req,res) => {
		Todo.findByIdAndRemove(req.params.id,  (err, doc) => {
			if(err) return console.log(err);
			res.json(doc);
		})
	},
	addItem : (req,res) =>{
		(new Todo(req.body)).save((err, doc) => {
			if(err) return console.log(err);
			res.json(doc);
		})
	}
}

module.exports = {
	api
}
