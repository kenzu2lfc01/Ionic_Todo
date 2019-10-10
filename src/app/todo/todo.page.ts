import { Component, OnInit } from '@angular/core';
import { TodoModel } from '../service/todo/todo-model';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss'],
})
export class TodoPage implements OnInit {
  constructor() { }
  public todos: Array<TodoModel> = [
    {
      name: 'Đi Ăn Xế',
      status: false,
      description: 'Đi lại chổ quầy nước ăn xế.'
    },
    {
      name: 'Đi Bộ 30 Phút',
      status: false,
      description: 'Đi dạo 30 phút để khỏe hơn.'
    }
  ];
  public CheckTodo() {
    this.todos.forEach(e => {
      if (e.status === true) {
        return true;
      }
    });
    return false;
  }

  ngOnInit() {
  }

}
