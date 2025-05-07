import { TaskService } from './../../services/task.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})

export class TaskFormComponent {
  newTaskTitle: string ="";

  constructor(private taskService: TaskService){}

  addTask(): void{
    if(this.newTaskTitle.trim()){
      this.taskService.addTask(this.newTaskTitle.trim());
      this.newTaskTitle="";
    }
  }
}
