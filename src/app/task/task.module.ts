import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UiModule } from '../ui/ui.module';
import { TaiwanDatePipe } from './taiwan-date.pipe';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskPageComponent } from './task-page/task-page.component';
import { TaskRoutingModule } from './task-routing.module';
import { TaskStateColorDirective } from './task-state-color.directive';
import { TaskComponent } from './task/task.component';

@NgModule({
  imports: [CommonModule, HttpClientModule, FormsModule, ReactiveFormsModule, UiModule, TaskRoutingModule],
  declarations: [TaskComponent, TaskStateColorDirective, TaskListComponent, TaiwanDatePipe, TaskFormComponent, TaskPageComponent],
  exports: [TaskComponent, TaskListComponent, TaskFormComponent],
})
export class TaskModule {}
