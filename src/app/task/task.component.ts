import { Component, OnInit } from '@angular/core';

import { Constants } from '../util/constants';
import { Task } from '../model/task';
import { User } from '../model/user';
import { WebStorageUtil } from '../util/web-storage-util';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tasks: Task[] = [];

  constructor() { }

  ngOnInit(): void {
    this.tasks = WebStorageUtil.get(Constants.TASK_KEY) as Task[];
  }

}
