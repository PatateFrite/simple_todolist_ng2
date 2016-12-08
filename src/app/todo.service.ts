import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Todo } from './todo';

import { ReplaySubject } from 'rxjs/ReplaySubject';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TodoService {

  todos: Todo[] = [];
  newTodo: Todo = { _id: 0, title: "" };

  constructor(private http: Http) { }

  // Observable todos source
  private _todosSource = new ReplaySubject<Todo[]>(1);
  // Observable todos stream
  todos$ = this._todosSource.asObservable();

  addTodo(todo: Todo): Promise<Todo> {
    return this.http
      .post("/todos", todo)
      .toPromise()
      .then( res => {
          this.todos.push(res.json())
          this._todosSource.next(this.todos);
      })
      .catch( err => console.log(err));
  }

  deleteTodoById( _id: number): Promise<Todo> {
    return this.http
      .delete( "/" + _id)
      .toPromise()
      .then((res) => {
        console.log("delete response", res.json())
        this.todos = this.todos.filter( todo => todo._id !== _id )
        this._todosSource.next(this.todos);
      })
      .catch((err) => console.log(err));
  }

  getAllTodos(): Promise<Todo[]> {
    return this.http
      .get("/todos")
      .toPromise()
      .then((res) => { this.todos = res.json() })
      .catch((err) => console.log(err));
  }


}