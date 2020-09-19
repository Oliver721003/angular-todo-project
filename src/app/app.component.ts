import { Component, OnInit } from '@angular/core';
import { Task } from './model/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  task: Task;

  ngOnInit(): void {
    this.task = new Task('頁面需要顯示待辦事項主旨');
  }
}
