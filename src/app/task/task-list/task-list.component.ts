import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Task } from '../../model/task';
import { CounterService } from '../services/counter.service';
import { TaskRemoteService } from '../services/task-remote.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  tasks$: Observable<Task[]>;

  constructor(private taskService: TaskRemoteService, public counterService: CounterService) {}

  ngOnInit(): void {
    this.tasks$ = this.taskService.getData();
  }
}
