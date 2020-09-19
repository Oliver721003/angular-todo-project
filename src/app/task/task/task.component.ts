import { Component, Input, OnInit } from '@angular/core';

import { TaskState } from '../../enum/task-state.enum';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  @Input() subject: string;
  @Input() state: TaskState;

  TaskState = TaskState;

  constructor() {}

  ngOnInit(): void {}

  getStateDesc(): string {
    switch (this.state) {
      case TaskState.None:
        return '未完成';
      case TaskState.Doing:
        return '進行中';
      case TaskState.Finish:
        return '已完成';
    }
  }

  getStateColor(): string {
    switch (this.state) {
      case TaskState.Doing:
        return 'green';
      case TaskState.Finish:
        return 'blue';
    }
  }

  getStateStyle(): string {
    switch (this.state) {
      case TaskState.Doing:
        return 'color: green';
      case TaskState.Finish:
        return 'color: blue';
    }
  }

  onSetTaskState(state: TaskState): void {
    this.state = state;
  }
}
