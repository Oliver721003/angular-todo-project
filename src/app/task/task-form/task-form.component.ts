import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of, Subject } from 'rxjs';
import { filter, map, takeUntil, tap } from 'rxjs/operators';

import { Task } from '../../model/task';
import { TaskRemoteService } from '../services/task-remote.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent implements OnInit, OnDestroy {
  form: FormGroup;

  get id(): FormControl {
    return this.form.get('id') as FormControl;
  }

  get subject(): FormControl {
    return this.form.get('subject') as FormControl;
  }

  get level(): FormControl {
    return this.form.get('level') as FormControl;
  }

  get tags(): FormArray {
    return this.form.get('tags') as FormArray;
  }

  stop$ = new Subject<void>();

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private taskService: TaskRemoteService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      id: this.fb.control(undefined),
      subject: this.fb.control(undefined, [Validators.required], [this.shouldBeUnique.bind(this)]),
      state: this.fb.control(0),
      level: this.fb.control(undefined, [Validators.required]),
      tags: this.fb.array([], [this.arrayCannotEmpty()]),
    });

    this.route.data
      .pipe(
        map(({ task }: { task: Task }) => task),
        filter((task) => !!task),
        tap(() => this.tags.clear()),
        tap((task) => this.onAddTag(task.tags.length)),
        takeUntil(this.stop$)
      )
      .subscribe((task) => this.form.patchValue(task));
  }

  ngOnDestroy(): void {
    this.stop$.next();
    this.stop$.complete();
  }

  onAddTag(count: number = 0): void {
    for (let i = 0; i <= count - 1; i++) {
      const tag = this.fb.control(undefined);
      this.tags.push(tag);
    }
  }

  onDeleteTag(index: number): void {
    this.tags.removeAt(index);
  }

  shouldBeUnique(control: FormControl): Observable<ValidationErrors> {
    if (control.value) {
      return this.taskService.isExists(control.value).pipe(map((isExists) => (isExists ? { shouldBeUnique: true } : null)));
    } else {
      return of(null);
    }
  }

  arrayCannotEmpty(): ValidatorFn {
    return (control: FormArray) => {
      if (control.length === 0) {
        return { cannotEmpty: true };
      }
      return null;
    };
  }

  onNext(): void {
    this.router.navigate(['task-form', this.id.value + 1]);
  }

  onSave(): void {
    this.taskService.add(this.form.value).subscribe(() => console.log('save'));
  }
}
