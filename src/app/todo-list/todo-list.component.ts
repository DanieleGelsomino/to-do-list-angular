import { Component, OnInit } from '@angular/core';
import { TodolistService } from '../services/todolist.service';

import { Todo } from '../model/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos:Todo[]

  constructor(private todolistService : TodolistService) { }


  ngOnInit(): void {
    this.todos = this.todolistService.getTodos()
    console.log(this.todos);
  }

  addTodo(todo: Todo) {
    this.todolistService.addTodo(todo);
    this.todos = this.todolistService.getTodos();
  }

  deleteTodo(todo: Todo) {
    // Remove From UI
    this.todolistService.deleteTodo(todo);
    this.todos = this.todolistService.getTodos();
  }

  deleteAllTodo(){
    this.todolistService.deleteAllTodo()
    this.todos = this.todolistService.getTodos();
  }

}
