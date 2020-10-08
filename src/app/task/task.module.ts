import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TaiwanDatePipe } from './taiwan-date.pipe';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskStateColorDirective } from './task-state-color.directive';
import { TaskComponent } from './task/task.component';
import { TaskFormComponent } from './task-form/task-form.component';

@NgModule({
  imports: [CommonModule, HttpClientModule, FormsModule],
  declarations: [TaskComponent, TaskStateColorDirective, TaskListComponent, TaiwanDatePipe, TaskFormComponent],
  exports: [TaskComponent, TaskListComponent, TaskFormComponent],
})
export class TaskModule {}
