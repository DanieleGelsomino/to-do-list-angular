import { Injectable } from '@angular/core';

import { Todo } from '../model/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodolistService {

  todos: Todo[]= []

  constructor() {
    this.todos = this.getTodoFromLocalStorage();
  }


    // Get Todos
    getTodos(): Todo[] {
      return this.todos;
    }

    // Delete Todo
    deleteTodo(todo: Todo): Todo {
      this.todos = this.todos.filter((i: Todo) => todo.id != i.id);
      this.save();
      return todo;
    }

    // Add Todo
    addTodo(todo: Todo): Todo {
      todo.id = this.todos.length
      todo.isNotCompleted = true;
      this.todos.push(todo);
      this.save();
      return todo;
    }

    // Toggle Completed
    toggleCompleted(todo: Todo) {
      for (let item of this.todos) {
        if (item.id == todo.id) {
          item.isNotCompleted = !item.isNotCompleted;
        }
      }
      this.save();
    }

    deleteAllTodo(){
      const confirm = window.confirm( `Sei sicuro di voler eliminare tutto?
i tuoi dati andranno persi definitivamente.`);
              if (confirm) {
                this.todos = [];
              }
          this.save();
    }

    private save() {
      localStorage.setItem("todos", JSON.stringify(this.todos));
    }

    private getTodoFromLocalStorage(): Todo[] {
      let todosFromStorage = localStorage.getItem("todos");
      console.log("todos from storage");

      console.log(todosFromStorage);

      if (todosFromStorage) {
        return JSON.parse(todosFromStorage);
      } else {
        return [];
      }
    }
}
