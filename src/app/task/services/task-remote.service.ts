import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Task } from '../../model/task';

@Injectable({
  providedIn: 'root',
})
export class TaskRemoteService {
  private _url = 'http://localhost:3000/tasks';

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
    return this.httpClient.get<Task[]>(url);
  }
}
