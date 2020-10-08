import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // this.form = this.fb.group({
    //   subject: this.fb.control(undefined),
    //   state: this.fb.control(0),
    //   level: this.fb.control(undefined),
    // });

    // FormBuilder 縮寫
    this.form = this.fb.group({
      subject: [],
      state: [0],
      level: [],
    });
  }
}
