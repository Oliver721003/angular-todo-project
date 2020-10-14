import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { TaskRemoteService } from '../services/task-remote.service';
import { TaskComponent } from '../task/task.component';
import { TaskStateColorDirective } from './../task-state-color.directive';
import { TaskListComponent } from './task-list.component';

describe('TaskListComponent', () => {
  let component: TaskListComponent;
  let fixture: ComponentFixture<TaskListComponent>;

  let taskService: jasmine.SpyObj<TaskRemoteService>;

  beforeEach(async(() => {
    taskService = jasmine.createSpyObj(['getData']);
    taskService.getData.and.returnValue(
      of([
        {
          id: 1,
          subject: '頁面需要顯示待辦事項主旨',
          state: 0,
          level: 'XS',
          tags: ['FEATURE', 'ISSUE', 'enhancement', 'discussion'],
        },
      ])
    );

    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule, FormsModule],
      declarations: [TaskListComponent, TaskComponent, TaskStateColorDirective],
      providers: [{ provide: TaskRemoteService, useValue: taskService }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('應顯示一筆待辦事項', () => {
    const debugElements = fixture.debugElement.queryAll(By.directive(TaskComponent));
    expect(debugElements.length).toBe(1);
  });
});
