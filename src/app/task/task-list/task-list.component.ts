import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
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
  constructor(private router: Router, private taskService: TaskRemoteService) {}

  ngOnInit(): void {
    this.tasks$ = this.taskService.getData();
  }

  onSearch(form: NgForm): void {
    const { subject, status } = form.value;
    this.tasks$ = this.taskService.getData(subject, status);
  }

  onAdd(): void {
    // this.router.navigate(['task-form']);
    this.router.navigateByUrl('/task-form');
  }
}
