import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CandidateNotificationEditComponent } from './candidate-notification-edit.component';

const routes: Routes = [
  {
    path: '',
    component: CandidateNotificationEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidateNotificationEditRoutingModule { }
