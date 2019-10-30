import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list.component';
import { TaskListRoutingModule } from './task-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    TaskListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    TaskListComponent
  ]
})
export class TaskListModule { }
