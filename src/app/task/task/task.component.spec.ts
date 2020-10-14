import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { TaskStateColorDirective } from '../task-state-color.directive';
import { TaskComponent } from './task.component';

describe('TaskComponent', () => {
  let component: TaskComponent;
  let fixture: ComponentFixture<TaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TaskComponent, TaskStateColorDirective],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('當指定主旨為 "頁面需要顯示待辦事項主旨", 頁面應顯示為 "頁面需要顯示待辦事項..."', () => {
    // arrange
    const expected = '頁面需要顯示待辦事項...';

    // act
    component.subject = '頁面需要顯示待辦事項主旨';
    fixture.detectChanges();

    // assert
    const debugElement = fixture.debugElement.query(By.css('div.content span'));
    expect(debugElement.nativeElement.textContent).toContain(expected);
  });
});
