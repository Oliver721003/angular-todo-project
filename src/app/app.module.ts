import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskModule } from './task/task.module';
import { UiModule } from './ui/ui.module';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, TaskModule, UiModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
