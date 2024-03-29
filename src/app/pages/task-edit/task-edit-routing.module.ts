import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskEditComponent } from './task-edit.component';

const routes: Routes = [
  {
    path: '',
    component: TaskEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskEditRoutingModule { }
