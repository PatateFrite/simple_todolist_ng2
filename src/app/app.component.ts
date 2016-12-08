import { Component } from '@angular/core';
import {Todo} from './todo';
import { TodoService } from './todo.service';
import {TodosComponent} from './todos/todos.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [TodoService]
})
export class AppComponent {
  newTodo:Todo = new Todo();

  constructor(private todoService: TodoService) { }

  addTask(){
    console.log("adding " + this.newTodo.title)
    this.todoService.addTodo(this.newTodo)
    this.newTodo.title = "";
  }

}
