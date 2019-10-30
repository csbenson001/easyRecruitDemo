import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskListEditComponent } from './task-list-edit.component';

const routes: Routes = [
  {
    path: '',
    component: TaskListEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskListEditRoutingModule { }
