import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainPageComponent } from './main-page/main-page.component';
import { TaskResolveService } from './task/resolve/task-resolve.service';
import { TaskFormComponent } from './task/task-form/task-form.component';
import { TaskPageComponent } from './task/task-page/task-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'main' },
  { path: 'main', component: MainPageComponent },
  { path: 'task-list', component: TaskPageComponent },
  { path: 'task-form', component: TaskFormComponent },
  {
    path: 'task-form/:id',
    component: TaskFormComponent,
    resolve: {
      task: TaskResolveService,
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
