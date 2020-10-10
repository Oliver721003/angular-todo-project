import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

import { TaskRemoteService } from '../services/task-remote.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent implements OnInit {
  form: FormGroup;

  get subject(): FormControl {
    return this.form.get('subject') as FormControl;
  }

  get level(): FormControl {
    return this.form.get('level') as FormControl;
  }

  get tags(): FormArray {
    return this.form.get('tags') as FormArray;
  }

  constructor(private fb: FormBuilder, private taskService: TaskRemoteService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      subject: this.fb.control(undefined, [Validators.required]),
      state: this.fb.control(0),
      level: this.fb.control(undefined, [Validators.required]),
      tags: this.fb.array([], [this.arrayCannotEmpty]),
    });
  }

  onAddTag(): void {
    // const tag = this.fb.group({
    //   tag: this.fb.control(undefined),
    // });
    const tag = this.fb.control(undefined);
    this.tags.push(tag);
  }

  onDeleteTag(index: number): void {
    this.tags.removeAt(index);
  }

  arrayCannotEmpty(control: FormArray): ValidationErrors {
    if (control.length === 0) {
      return { cannotEmpty: true };
    }
    return null;
  }

  onSave(): void {
    this.taskService.add(this.form.value).subscribe(() => console.log('save'));
  }
}
