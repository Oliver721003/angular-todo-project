import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TaskResolveService } from './resolve/task-resolve.service';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskPageComponent } from './task-page/task-page.component';

const routes: Routes = [
  { path: 'list', component: TaskPageComponent },
  { path: 'form', component: TaskFormComponent },
  {
    path: 'form/:id',
    component: TaskFormComponent,
    resolve: {
      task: TaskResolveService,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskRoutingModule {}
