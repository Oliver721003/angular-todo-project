import { AfterContentChecked, AfterContentInit, Component, ContentChild, DoCheck, OnInit } from '@angular/core';

import { PageTitleComponent } from '../page-title/page-title.component';

@Component({
  selector: 'app-page-container',
  templateUrl: './page-container.component.html',
  styleUrls: ['./page-container.component.css'],
})
export class PageContainerComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked {
  @ContentChild(PageTitleComponent) title: HTMLElement;

  constructor() {}

  ngOnInit(): void {
    console.log('PageContainerComponent - ngOnInit');
  }

  ngDoCheck(): void {
    console.log('PageContainerComponent - ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('PageContainerComponent - ngAfterContentInit', this.title);
  }

  ngAfterContentChecked(): void {
    console.log('PageContainerComponent - ngAfterContentChecked');
  }
}
