import { Component, OnInit } from '@angular/core';

import { Task } from '../../model/task';
import { TaskRemoteService } from '../services/task-remote.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  tasks: Task[];

  constructor(private taskService: TaskRemoteService) {}

  ngOnInit(): void {
    this.taskService.getData().subscribe((tasks) => (this.tasks = tasks));
  }
}
