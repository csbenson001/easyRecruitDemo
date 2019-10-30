import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobApplicationEditComponent } from './job-application-edit.component';

const routes: Routes = [
  {
    path: '',
    component: JobApplicationEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobApplicationEditRoutingModule { }
