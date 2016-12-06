import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  providers : [TodoService]
})
export class TodosComponent implements OnInit {

  todos = [];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
      this.todoService
        .getAllTodos()
        .then( () => { this.todos = this.todoService.todos } )
  }

  delete(id){
    this.todoService
        .deleteTodoById(id)
        .then( () => { this.todos = this.todoService.todos } )
  }

}
