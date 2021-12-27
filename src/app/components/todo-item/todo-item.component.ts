import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/model/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo;
  @Output() onTodoItemDeleteEvent: EventEmitter<Todo> = new EventEmitter();
  @Output() onTodoItemDoneEvent: EventEmitter<Todo> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onDelClick(todo: Todo) {
    this.onTodoItemDeleteEvent.emit(todo);
  }

  onCheckChange(todo: Todo) {
    console.log(todo.active);
    this.onTodoItemDoneEvent.emit(todo);
  }
}
