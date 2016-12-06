import {Injectable} from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import {Todo} from './todo';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TodoService {

  // Placeholder for todo's
  todos: Todo[] = [];
  newTodo:Todo = {id:0,title:""};
  lastId: number = 3;

  constructor(private http: Http) {
  }

  addTodo(todo: Todo):  Promise<Todo> {
      return this.http
        .post("/todos", todo)
        .toPromise()
        .then((res) => { this.todos.push(res.json()) } )
        .catch((err) => console.log(err));

  }

  deleteTodoById(id: number): Promise<Todo> {

      console.log("DELETE id = ", id)

      return this.http
        .post("/delete", {id:id}) // Cannot pass id with DELETE method (??)
        .toPromise()
        .then((res) => { console.log("delete response", res.json()) } )
        .catch((err) => console.log(err));
  }

  // Simulate PUT /todos/:id
  updateTodoById(id: number, values: Object = {}): Todo {
    let todo = this.getTodoById(id);
    if (!todo) {
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }

  getAllTodos():  Promise<Todo[]> {
    return this.http
			.get("/todos")
			.toPromise()
      .then((res) => { this.todos = res.json() } )
			.catch((err) => console.log(err));
  }

  // Simulate GET /todos/:id
  getTodoById(id: number): Todo {
    return this.todos
      .filter(todo => todo.id === id)
      .pop();
  }

}