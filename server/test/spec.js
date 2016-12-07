const expect = require("chai").expect;
const api = require("../modules/api").api;

describe("TODO list", () => {

	const todo = {
		"created": new Date(),
		"id": 0,
		"title": "Some title"
	}
	/*
	addItem : (req,res) =>{
		const todo = { id : ++lastId, title : req.body.title.trim()};
		todos.push(todo);
		res.send(todo);
	}
	*/

	it('should save a new todo', () => {

		const req = {
			body : {
				title : "Some title"
			}
		}

		const res = {
			send : (docReturned) => {
				expect(docReturned.title).to.equal(req.body.title);
				expect(docReturned.id).to.equal(4);
				expect(docReturned.title).to.not.equal("iujhorzeih zre");
			}
		}

		api.addItem(req, res);
	});

});