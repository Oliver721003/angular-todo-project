import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Task } from '../../model/task';
import { TaskRemoteService } from '../services/task-remote.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  // providers: [CounterService]
})
export class TaskListComponent implements OnInit {
  tasks$: Observable<Task[]>;

  subject: string;

  // constructor(private taskService: TaskRemoteService, public counterService: CounterService) {}
  constructor(private taskService: TaskRemoteService) {}

  ngOnInit(): void {
    this.tasks$ = this.taskService.getData();
  }

  onSearch(): void {
    this.tasks$ = this.taskService.getData(this.subject);
  }
}
