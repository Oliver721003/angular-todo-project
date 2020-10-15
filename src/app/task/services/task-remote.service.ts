import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { Task } from '../../model/task';

@Injectable({
  providedIn: 'root',
})
export class TaskRemoteService {
  private _url = `${environment.api}/tasks`;

  private _id: number;

  constructor(private httpClient: HttpClient) {}

  get(id: number): Observable<Task> {
    return this.httpClient.get<Task>(`${this._url}/${id}`);
  }

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

  isExists(subject: string): Observable<boolean> {
    const url = `${this._url}?subject=${subject}`;
    return this.httpClient.get<Task[]>(url).pipe(map((tasks) => tasks.length > 0));
  }

  add(task: Task): Observable<any> {
    task.id = this._id;
    this._id++;
    return this.httpClient.post(this._url, task);
  }
}
