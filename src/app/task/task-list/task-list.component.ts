import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
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

  // constructor(private taskService: TaskRemoteService, public counterService: CounterService) {}
  constructor(private taskService: TaskRemoteService) {}

  ngOnInit(): void {
    this.tasks$ = this.taskService.getData();
  }

  onSearch(subject: NgModel): void {
    this.tasks$ = this.taskService.getData(subject.value);
  }
}
