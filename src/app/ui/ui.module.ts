import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTitleComponent } from './page-title/page-title.component';
import { PageContainerComponent } from './page-container/page-container.component';



@NgModule({
  declarations: [PageTitleComponent, PageContainerComponent],
  imports: [
    CommonModule
  ],
  exports: [PageTitleComponent, PageContainerComponent]
})
export class UiModule { }
