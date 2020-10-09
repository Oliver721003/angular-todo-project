import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Task } from '../../model/task';

@Injectable({
  providedIn: 'root',
})
export class TaskRemoteService {
  private _url = 'http://localhost:3000/tasks';

  private _id: number;

  constructor(private httpClient: HttpClient) {}

  getData(subject?: string, state?: number): Observable<Task[]> {
    const condition = [];
    if (subject) {
      condition.push(`subject_like=${subject}`);
    }
    if (state !== undefined) {
      condition.push(`state=${state}`);
    }
    const url = this._url + (condition.length === 0 ? '' : `?${condition.join('&')}`);
    return this.httpClient.get<Task[]>(url).pipe(tap((tasks) => (this._id = Math.max(...tasks.map((task) => task.id)) + 1)));
  }

  add(task: Task): Observable<any> {
    task.id = this._id;
    this._id++;
    return this.httpClient.post(this._url, task);
  }
}
