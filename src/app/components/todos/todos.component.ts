import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/model/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  localTodos!: string;
  constructor() {
    this.todos = [];
  }

  ngOnInit(): void {
    let local_todos = localStorage.getItem('todos');
    if (local_todos) this.todos = JSON.parse(local_todos);
  }

  deleteTodoItem(todo: Todo) {
    console.log('Event emiited!');
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    //console.log(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  addTodo(todo: Todo) {
    //console.log('add todo emiited!');
    let count = this.todos.length;
    this.todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  toggleTodoItem(todo: Todo) {
    todo.active = !todo.active;
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
