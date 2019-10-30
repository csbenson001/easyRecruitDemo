import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskEditComponent } from './task-edit.component';
import { TaskEditRoutingModule } from './task-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    TaskEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    TaskEditComponent
  ]
})
export class TaskEditModule { }
