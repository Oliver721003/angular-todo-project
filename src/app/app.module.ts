import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { UiModule } from './ui/ui.module';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, BrowserAnimationsModule, UiModule],
  declarations: [AppComponent, MainPageComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
