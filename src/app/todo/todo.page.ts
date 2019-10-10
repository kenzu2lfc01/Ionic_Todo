import { Component, OnInit } from '@angular/core';
import { TodoModel } from '../service/todo/todo-model';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss'],
})
export class TodoPage implements OnInit {
  constructor(private alertController: AlertController) { }
  public todos: Array<TodoModel> = [];
  public CheckTodo() {
    if(this.todos.length == 0) return true;
    this.todos.forEach(e => {
      if (e.status === true) {
        return true;
      }
    });
    return false;
  }

  async showDialogAdd() {
    const alert = await this.alertController.create({
      header: 'Add Todo',
      inputs: [
        {
          name: 'todoName',
          type: 'text',
          placeholder: 'Todo Name'
        },
        {
          name: 'description',
          type: 'text',
          placeholder: 'Description'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
          }
        }, {
          text: 'Ok',
          handler: (alertData) => {
            let todo: TodoModel;
            todo = {
              name: alertData.todoName,
              status: false,
              description: alertData.description
            }
            this.todos.push(todo);
          }
        }
      ]
    });

    await alert.present();
  }

  ngOnInit() {
  }

}
