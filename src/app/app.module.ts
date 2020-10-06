import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskRemoteService } from './task/services/task-remote.service';
import { TaskModule } from './task/task.module';
import { UiModule } from './ui/ui.module';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, TaskModule, UiModule],
  declarations: [AppComponent],
  providers: [
    {
      provide: TaskRemoteService,
      useValue: {
        getData: () => {
          console.log('from value provider');
          return of([]);
        },
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
