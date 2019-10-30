import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListListComponent } from './task-list-list.component';
import { TaskListListRoutingModule } from './task-list-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    TaskListListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    TaskListListComponent
  ]
})
export class TaskListListModule { }
