import { Component, OnInit } from '@angular/core';

import { Task } from '../../model/task';
import { TaskLocalService } from '../services/task-local.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  tasks: Task[];

  constructor(private taskService: TaskLocalService) {}

  ngOnInit(): void {
    this.tasks = this.taskService.getData();
  }
}
