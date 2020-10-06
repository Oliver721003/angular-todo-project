import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { TaskState } from '../../enum/task-state.enum';
import { Task } from '../../model/task';

@Injectable({
  providedIn: 'root',
})
export class TaskLocalService {
  private _tasks: Task[];

  constructor() {
    this._tasks = [
      new Task(1, '頁面需要顯示待辦事項主旨'),
      new Task(2, '可以設定待辦事項的狀態', TaskState.Doing),
      new Task(3, '當待辦事項狀態為已完的事項無法編輯事項', TaskState.Finish),
    ];
    this._tasks[0].level = 'XS';
    this._tasks[0].tags = ['FEATURE', 'ISSUE', 'enhancement', 'discussion'];

    this._tasks[1].level = 'S';
    this._tasks[1].tags = ['Feature', 'Issue', 'document'];
    this._tasks[1].expectDate = new Date(2020, 10, 1);

    this._tasks[2].level = 'M';
    this._tasks[2].tags = ['feature', 'issue'];
    this._tasks[2].expectDate = new Date(2020, 9, 1);
    this._tasks[2].finishedDate = new Date(2020, 9, 1);
  }

  getData(): Observable<Task[]> {
    console.log('from TaskLocalService');
    return of(this._tasks);
  }
}
