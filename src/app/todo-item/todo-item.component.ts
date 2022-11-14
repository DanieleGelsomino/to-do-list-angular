import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodolistService } from '../services/todolist.service';

import { Todo } from '../model/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();



  constructor(private todolistService : TodolistService) { }

  ngOnInit(): void {
  }

  onToggle(todo: Todo) {

    this.todolistService.toggleCompleted(todo);
  }

  onDelete(todo: Todo) {
    this.deleteTodo.emit(todo);
  }

}
