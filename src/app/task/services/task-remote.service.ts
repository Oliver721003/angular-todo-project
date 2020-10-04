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

  getData(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(this._url);
  }
}
