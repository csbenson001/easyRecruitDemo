import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobApplicationListComponent } from './job-application-list.component';

const routes: Routes = [
  {
    path: '',
    component: JobApplicationListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobApplicationListRoutingModule { }
