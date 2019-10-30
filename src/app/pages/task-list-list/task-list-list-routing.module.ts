import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskListListComponent } from './task-list-list.component';

const routes: Routes = [
  {
    path: '',
    component: TaskListListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskListListRoutingModule { }
