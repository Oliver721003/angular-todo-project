import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task/task.component';
import { TaskStateColorDirective } from './task-state-color.directive';



@NgModule({
  declarations: [TaskComponent, TaskStateColorDirective],
  imports: [
    CommonModule
  ],
  exports: [TaskComponent]
})
export class TaskModule { }
