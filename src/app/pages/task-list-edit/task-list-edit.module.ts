import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListEditComponent } from './task-list-edit.component';
import { TaskListEditRoutingModule } from './task-list-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    TaskListEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    TaskListEditComponent
  ]
})
export class TaskListEditModule { }
