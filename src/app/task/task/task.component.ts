import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

import { TaskState } from '../../enum/task-state.enum';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit, OnChanges {
  @Input() subject: string;

  @Input() state: TaskState;
  @Output() stateChange = new EventEmitter<TaskState>();

  @Input() level: 'XS' | 'S' | 'M' | 'L' | 'XL';
  @Input() tags: string[];
  @Input() expectDate: Date;
  @Input() finishedDate: Date;

  stateClass: { [key: string]: boolean };

  stateDesc: string;

  TaskState = TaskState;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.stateClass = {
      doing: this.state === TaskState.Doing,
      finish: this.state === TaskState.Finish,
    };
    this.stateDesc = this.getStateDesc();
  }

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
    this.stateChange.emit(state);
  }
}
