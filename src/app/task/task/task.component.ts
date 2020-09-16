import { Component, OnInit } from '@angular/core';

import { TaskState } from '../../enum/task-state.enum';
import { Task } from '../../model/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  task: Task;

  TaskState = TaskState;

  constructor() {}

  ngOnInit(): void {
    this.task = new Task('頁面需要顯示待辦事項主旨');
  }

  getStateDesc(): string {
    switch (this.task.state) {
      case TaskState.None:
        return '未完成';
      case TaskState.Doing:
        return '進行中';
      case TaskState.Finish:
        return '已完成';
    }
  }

  onSetTaskState(state: TaskState): void {
    this.task.state = state;
  }
}
