import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/model/todo';
import { helper } from 'src/app/model/helper';

@Component({
  selector: 'app-add-todo-item',
  templateUrl: './add-todo-item.component.html',
  styleUrls: ['./add-todo-item.component.css'],
})
export class AddTodoItemComponent implements OnInit {
  @Output() onTodoItemAdd: EventEmitter<Todo> = new EventEmitter();
  title: string = '';
  desc: string = '';
  reminder: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    const todo = {
      sno: helper.generateRandom(6),
      title: this.title,
      desc: this.desc,
      active: this.reminder,
    };
    console.log(todo);
    this.onTodoItemAdd.emit(todo);
    this.clearTodo();
  }

  clearTodo() {
    this.title = this.desc = '';
    this.reminder = false;
  }
}
