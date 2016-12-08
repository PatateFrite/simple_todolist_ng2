import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent implements OnInit {

  todos = [];
  subscription: Subscription;

  constructor(private todoService: TodoService) {
  }

  ngOnInit(): void {
      this.todoService
        .getAllTodos()
        .then( () => { this.todos = this.todoService.todos } )

        this.subscription = this.todoService
            .todos$
            .subscribe(todos => this.todos = todos)
  }

  delete(_id){
    this.todoService
        .deleteTodoById(_id)
        .then( () => { this.todos = this.todoService.todos } )
  }

}
