import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task/task.component';
import { TaskStateColorDirective } from './task-state-color.directive';
import { TaskListComponent } from './task-list/task-list.component';
import { TaiwanDatePipe } from './taiwan-date.pipe';



@NgModule({
  declarations: [TaskComponent, TaskStateColorDirective, TaskListComponent, TaiwanDatePipe],
  imports: [
    CommonModule
  ],
  exports: [TaskComponent, TaskListComponent]
})
export class TaskModule { }
