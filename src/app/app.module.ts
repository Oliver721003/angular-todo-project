import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskLocalService } from './task/services/task-local.service';
import { TaskRemoteService } from './task/services/task-remote.service';
import { TaskModule } from './task/task.module';
import { UiModule } from './ui/ui.module';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, TaskModule, UiModule],
  declarations: [AppComponent],
  providers: [TaskLocalService, { provide: TaskRemoteService, useExisting: TaskLocalService }],
  bootstrap: [AppComponent],
})
export class AppModule {}
