let todos =  [
    {id : 1, title : "Donner à manger au chien"},
    {id : 2, title : "Aller à la gym"},
    {id : 3, title : "Appeler ma grand mère"},
  ]

let lastId = 3;

const api = {
	getItems : (req,res) => {
		res.send(todos)
	},

	deleteItem : (req,res) => {
		const id = req.params.id;
		todo = todos.find( todo => todo.id === id )
		todos = todos.filter(todo => todo.id !== id);
		res.send(todo)
	},

	addItem : (req,res) =>{
		const todo = { id : ++lastId, title : req.body.title.trim()};
		todos.push(todo);
		res.send(todo);
	}
}

module.exports = {
	api
}
