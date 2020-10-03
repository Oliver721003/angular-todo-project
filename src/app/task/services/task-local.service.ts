import { Injectable } from '@angular/core';

import { TaskState } from '../../enum/task-state.enum';
import { Task } from '../../model/task';

@Injectable({
  providedIn: 'root',
})
export class TaskLocalService {
  private _tasks: Task[];

  constructor() {
    this._tasks = [
      new Task('頁面需要顯示待辦事項主旨'),
      new Task('可以設定待辦事項的狀態', TaskState.Doing),
      new Task('當待辦事項狀態為已完的事項無法編輯事項', TaskState.Finish),
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

  getData(): Task[] {
    return this._tasks;
  }
}
