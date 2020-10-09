import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

import { TaskRemoteService } from '../services/task-remote.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent implements OnInit {
  form: FormGroup;

  get tags(): FormArray {
    return this.form.get('tags') as FormArray;
  }

  constructor(private fb: FormBuilder, private taskService: TaskRemoteService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      subject: this.fb.control(undefined),
      state: this.fb.control(0),
      level: this.fb.control(undefined),
      tags: this.fb.array([]),
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

  onSave(): void {
    this.taskService.add(this.form.value).subscribe(() => console.log('save'));
  }
}
