import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { Task } from '../../model/task';
import { TaskRemoteService } from '../services/task-remote.service';

@Injectable({
  providedIn: 'root',
})
export class TaskResolveService implements Resolve<Task> {
  constructor(private taskService: TaskRemoteService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Task> {
    const id = +route.paramMap.get('id');
    return this.taskService.get(id);
  }
}
