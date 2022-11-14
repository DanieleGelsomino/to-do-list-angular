import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-add-todo',
  templateUrl: './todo-add-todo.component.html',
  styleUrls: ['./todo-add-todo.component.scss']
})
export class TodoAddTodoComponent implements OnInit {
  @Output() addTodo: EventEmitter<any> = new EventEmitter();

  title: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.title){
      const todo = {
        title: this.title,
        isNotCompleted: false,
      };

      this.title = '';

      this.addTodo.emit(todo);
    }

  }

}
